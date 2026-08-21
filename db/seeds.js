/*
 * Gyminy seed runner.
 *
 *   yarn seed              seed the database named by MONGODB_URI
 *   yarn seed:dry          build and validate every document, touch no database
 *   yarn seed --force      allow seeding a non-local database (see guard below)
 *
 * Seeding is destructive: it empties the users, images, videos, articles,
 * trainings and chats collections before inserting. Because MONGODB_URI in a
 * working .env usually points at a real Atlas cluster, the runner refuses to
 * touch anything that is not localhost unless you pass --force.
 */

require('dotenv').config()

const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')

const User = require('../models/user')
const Image = require('../models/image')
const Video = require('../models/video')
const Article = require('../models/article')
const Training = require('../models/training')
const Chat = require('../models/chat')

const data = require('./data')

const argv = process.argv.slice(2)
const DRY_RUN = argv.includes('--dry-run')
const FORCE = argv.includes('--force') || process.env.SEED_ALLOW_REMOTE === 'true'

/* ------------------------------------------------------------- safeguards */

// Never print the password embedded in a connection string.
function redact(uri) {
  return String(uri).replace(/\/\/[^@/]*@/, '//<credentials>@')
}

function isLocal(uri) {
  return /(^|@|\/\/)(localhost|127\.0\.0\.1|0\.0\.0\.0)(:|\/)/.test(String(uri))
}

/* -------------------------------------------------------------- utilities */

const byIndex = list => n => {
  const found = list[n - 1]
  if (!found) throw new Error(`seed data refers to missing entry #${n}`)
  return found
}

// What the app embeds as `user` on a portfolio item. The running app stores
// req.currentUser, which is the whole user document including the password
// hash; we deliberately embed a trimmed copy instead.
const snapshot = u => ({
  _id: u._id,
  name: u.name,
  email: u.email,
  bio: u.bio,
  userType: u.userType,
  sports: u.sports,
  profileImage: u.profileImage
})

const likeOf = u => ({
  userId: String(u._id),
  username: u.name,
  profileImage: u.profileImage
})

const HOUR = 1000 * 60 * 60
const NOW = Date.now()

// Spread the feed backwards from now so the app does not show fifty items
// posted in the same second.
const agedAt = i => new Date(NOW - (i + 1) * 19 * HOUR)

/* ----------------------------------------------------------------- build */

function build() {
  const user = byIndex(data.users)

  // Notifications accumulate on the owner of whatever was liked/commented on.
  const notifications = new Map(data.users.map(u => [String(u._id), []]))
  const notify = (owner, entry) => {
    const bucket = notifications.get(String(owner._id))
    if (bucket) bucket.push(entry)
  }

  const portfolioNotification = (actor, item, type, portfolioType, url) => ({
    notificationType: type,
    username: actor.name,
    profileImage: actor.profileImage,
    userId: String(actor._id),
    portfolioId: String(item._id),
    url,
    portfolioType
  })

  /* users */
  const users = data.users.map(u => ({
    ...u,
    password: data.DEMO_PASSWORD,
    passwordConfirmation: data.DEMO_PASSWORD,
    notifications: [],
    newNotification: false,
    newChat: false,
    studentTrainings: [],
    userChats: [],
    followers: [],
    following: []
  }))
  const userById = new Map(users.map(u => [String(u._id), u]))
  const liveUser = n => userById.get(String(user(n)._id))

  /* portfolio items — images, videos, articles */
  const buildPortfolio = (list, portfolioType, urlFor) =>
    list.map((item, i) => {
      const owner = user(item.owner)
      const doc = {
        _id: item._id,
        url: item.url,
        description: item.description,
        user: snapshot(owner),
        userStuff: owner._id,
        likes: item.likes.map(n => {
          const actor = user(n)
          notify(owner, portfolioNotification(actor, item, 'like', portfolioType, urlFor(item)))
          return likeOf(actor)
        }),
        comments: item.comments.map(c => {
          const actor = user(c.by)
          notify(owner, portfolioNotification(actor, item, 'comment', portfolioType, urlFor(item)))
          return { text: c.text, user: snapshot(actor) }
        }),
        createdAt: agedAt(i),
        updatedAt: agedAt(i)
      }
      return doc
    })

  const images = buildPortfolio(data.images, 'image', it => it.url)
  const videos = buildPortfolio(data.videos, 'video', it => it.url)

  const articles = data.articles.map((a, i) => {
    const owner = user(a.owner)
    return {
      _id: a._id,
      title: a.title,
      text: a.text,
      imageUrl: a.imageUrl,
      titleImageUrl: a.titleImageUrl,
      user: snapshot(owner),
      userStuff: owner._id,
      // the article schema tracks likes without a profile image
      likes: a.likes.map(n => {
        const actor = user(n)
        notify(owner, portfolioNotification(actor, a, 'like', 'article', a.title))
        return { userId: String(actor._id), username: actor.name }
      }),
      comments: a.comments.map(c => {
        const actor = user(c.by)
        notify(owner, portfolioNotification(actor, a, 'comment', 'article', a.title))
        return { text: c.text, user: snapshot(actor) }
      }),
      createdAt: agedAt(i * 3),
      updatedAt: agedAt(i * 3)
    }
  })

  /* trainings, with their bookings written back onto the students */
  const trainings = data.trainings.map(t => {
    const owner = user(t.owner)
    const bookings = t.students.length
    const isFull = bookings >= t.limit

    const doc = {
      _id: t._id,
      name: t.name,
      date: t.date,
      time: t.time,
      description: t.description,
      limit: t.limit,
      bookings,
      isFull,
      sports: t.sports,
      user: snapshot(owner),
      userStuff: owner._id,
      students: t.students.map(n => {
        const student = user(n)
        return {
          userId: String(student._id),
          name: student.name,
          profileImage: student.profileImage
        }
      })
    }

    t.students.forEach(n => {
      const student = user(n)
      notify(owner, {
        notificationType: 'training',
        username: student.name,
        profileImage: student.profileImage,
        userId: String(student._id),
        portfolioId: String(t._id),
        url: t.name,
        portfolioType: 'training',
        isFull
      })
      liveUser(n).studentTrainings.push(doc)
    })

    return doc
  })

  /* chats */
  const chats = data.chats.map(c => {
    const [aIdx, bIdx] = c.between
    const starter = user(aIdx)
    const other = user(bIdx)

    const doc = {
      _id: c._id,
      senderId: String(starter._id),
      senderName: starter.name,
      senderProfileImage: starter.profileImage,
      receiverId: String(other._id),
      receiverName: other.name,
      receiverProfileImage: other.profileImage,
      subChat: c.messages.map(m => {
        const from = user(m.from)
        const to = m.from === aIdx ? other : starter
        return {
          text: m.text,
          senderId: String(from._id),
          senderName: from.name,
          receiverId: String(to._id),
          receiverName: to.name
        }
      })
    }

    liveUser(aIdx).userChats.push(doc)
    liveUser(bIdx).userChats.push(doc)
    liveUser(bIdx).newChat = true

    return doc
  })

  /* follows */
  data.follows.forEach(([followerIdx, followedIdx]) => {
    const follower = user(followerIdx)
    const followed = user(followedIdx)

    const edge = {
      userId: String(follower._id),
      userName: follower.name,
      userProfileImage: follower.profileImage,
      followedUserId: String(followed._id),
      followedUserName: followed.name,
      followedUserProfileImage: followed.profileImage
    }

    liveUser(followerIdx).following.push(edge)
    liveUser(followedIdx).followers.push(edge)

    notify(followed, {
      notificationType: 'follow',
      username: follower.name,
      profileImage: follower.profileImage,
      userId: String(follower._id),
      portfolioId: String(follower._id),
      url: `/profile/${follower._id}`,
      portfolioType: 'user'
    })
  })

  /* attach notifications, newest first and trimmed to a believable inbox */
  users.forEach(u => {
    const bucket = (notifications.get(String(u._id)) || []).slice().reverse()
    u.notifications = bucket.slice(0, 12)
    u.newNotification = u.notifications.length > 0
  })

  return { users, images, videos, articles, trainings, chats }
}

/* ------------------------------------------------------------- validation */

function validate(built) {
  const models = [
    [User, built.users],
    [Image, built.images],
    [Video, built.videos],
    [Article, built.articles],
    [Training, built.trainings],
    [Chat, built.chats]
  ]

  const problems = []
  models.forEach(([Model, docs]) => {
    docs.forEach((doc, i) => {
      const instance = new Model(doc)
      // password hashing happens in a save hook, so validate the raw pair here
      if (Model === User) instance.passwordConfirmation = doc.passwordConfirmation
      const err = instance.validateSync()
      if (err) {
        Object.values(err.errors).forEach(e => {
          problems.push(`${Model.modelName}[${i}] ${e.path}: ${e.message}`)
        })
      }
    })
  })
  return problems
}

/* ------------------------------------------------------------------- run */

async function seed() {
  const built = build()

  const counts = {
    users: built.users.length,
    images: built.images.length,
    videos: built.videos.length,
    articles: built.articles.length,
    trainings: built.trainings.length,
    chats: built.chats.length
  }

  // `unique` validators need a live connection, so they are skipped in a dry
  // run; everything else (required, maxlength, casting) is checked here.
  const problems = validate(built)
  if (problems.length) {
    console.error('✗ seed data failed validation:\n  ' + problems.join('\n  '))
    process.exit(1)
  }

  if (DRY_RUN) {
    console.log('✓ dry run: every document validates against its schema')
    console.table(counts)
    console.log('no database was contacted')
    return
  }

  if (!isLocal(dbURI) && !FORCE) {
    console.error(
      `✗ refusing to seed a non-local database.\n` +
      `  target: ${redact(dbURI)}\n\n` +
      `  Seeding deletes every user, image, video, article, training and chat.\n` +
      `  If that is genuinely what you want, re-run with --force.`
    )
    process.exit(1)
  }

  console.log(`seeding ${redact(dbURI)}${FORCE && !isLocal(dbURI) ? '  (forced)' : ''}`)

  mongoose.set('strictQuery', true)
  await mongoose.connect(dbURI)

  await Promise.all([
    User.deleteMany({}),
    Image.deleteMany({}),
    Video.deleteMany({}),
    Article.deleteMany({}),
    Training.deleteMany({}),
    Chat.deleteMany({})
  ])

  // Saved one at a time so the pre-save hook hashes each password.
  for (const doc of built.users) {
    const u = new User(doc)
    u.passwordConfirmation = doc.passwordConfirmation
    await u.save()
  }

  await Training.insertMany(built.trainings)
  await Chat.insertMany(built.chats)
  await Image.insertMany(built.images)
  await Video.insertMany(built.videos)
  await Article.insertMany(built.articles)

  // insertMany stamps its own timestamps, so restore the staggered dates
  // through the driver, which does not apply Mongoose's timestamp plugin.
  const restoreDates = (Model, docs) =>
    Model.collection.bulkWrite(
      docs.map(d => ({
        updateOne: {
          filter: { _id: d._id },
          update: { $set: { createdAt: d.createdAt, updatedAt: d.updatedAt } }
        }
      }))
    )

  await Promise.all([
    restoreDates(Image, built.images),
    restoreDates(Video, built.videos),
    restoreDates(Article, built.articles)
  ])

  console.log('✓ seeded')
  console.table(counts)
  console.log(`every account signs in with the password: ${data.DEMO_PASSWORD}`)
  console.log(`e.g. ${built.users[0].email} (coach) or ${built.users[7].email} (student)`)
}

seed()
  .catch(err => {
    console.error('✗ seeding failed:', err.message)
    process.exitCode = 1
  })
  .finally(async () => {
    if (mongoose.connection.readyState !== 0) await mongoose.disconnect()
  })
