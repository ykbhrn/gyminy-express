/*
 * Regenerates db/legacy.js from a dump of the pre-revival database:
 *
 *   node db/import-legacy.js path/to/dump.json
 *
 * The dump is the shape written by a full collection export:
 *   { takenAt, database, collections: { users: [...], images: [...], ... } }
 *
 * Normalisations applied, each deliberate:
 *  - http://res.cloudinary.com -> https://  (Render serves over HTTPS, so the
 *    original http:// assets would be blocked as mixed content)
 *  - embedded `user` objects were whole user documents, password hash and all.
 *    They become the same trimmed snapshot the generated seed data uses.
 *  - article.user was a bare ObjectId string, but the frontend reads
 *    article.user.name, so it becomes a snapshot object like every other item.
 *  - __v dropped.
 *  - user password hashes dropped: nobody knows the original plaintext, so the
 *    seed gives these accounts the same demo password as the generated ones.
 */

const fs = require('fs')
const path = require('path')

const BACKUP = process.argv[2]
const OUT = path.join(__dirname, 'legacy.js')

if (!BACKUP) {
  console.error('usage: node db/import-legacy.js <dump.json>')
  process.exit(1)
}

const backup = JSON.parse(fs.readFileSync(BACKUP, 'utf8'))
const col = name => backup.collections[name] || []

/* ------------------------------------------------------------- helpers */

const httpsify = value =>
  typeof value === 'string'
    ? value.replace(/^http:\/\/res\.cloudinary\.com/, 'https://res.cloudinary.com')
    : value

// deep-walk every string so nested profileImage / url fields get upgraded too
function deepHttps(node) {
  if (Array.isArray(node)) return node.map(deepHttps)
  if (node && typeof node === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(node)) out[k] = deepHttps(v)
    return out
  }
  return httpsify(node)
}

const usersById = new Map(col('users').map(u => [String(u._id), u]))

const snapshot = u => {
  if (!u) return undefined
  const src = typeof u === 'string' ? usersById.get(u) : u
  if (!src) return undefined
  return {
    _id: String(src._id),
    name: src.name,
    email: src.email,
    bio: src.bio,
    userType: src.userType,
    sports: src.sports || [],
    profileImage: httpsify(src.profileImage)
  }
}

const strip = doc => {
  const { __v, ...rest } = doc
  return rest
}

const comments = list =>
  (list || []).map(c => ({
    _id: String(c._id),
    text: c.text,
    user: snapshot(c.user),
    createdAt: c.createdAt,
    updatedAt: c.updatedAt
  }))

/* ---------------------------------------------------------------- users */

const users = col('users').map(u => {
  const d = deepHttps(strip(u))
  // password hash intentionally omitted — see header
  const { password, ...rest } = d
  return {
    ...rest,
    _id: String(u._id),
    followers: rest.followers || [],
    following: rest.following || [],
    notifications: rest.notifications || [],
    studentTrainings: rest.studentTrainings || [],
    userChats: rest.userChats || []
  }
})

/* ------------------------------------------------------- portfolio items */

const portfolio = name =>
  col(name).map(d => {
    const s = deepHttps(strip(d))
    return {
      _id: String(d._id),
      url: s.url,
      description: s.description,
      user: snapshot(d.user),
      userStuff: String(d.userStuff),
      likes: s.likes || [],
      comments: comments(d.comments),
      createdAt: s.createdAt,
      updatedAt: s.updatedAt
    }
  })

const articles = col('articles').map(d => {
  const s = deepHttps(strip(d))
  return {
    _id: String(d._id),
    title: s.title,
    text: s.text,
    imageUrl: s.imageUrl,
    titleImageUrl: s.titleImageUrl,
    user: snapshot(d.user),          // was a bare ObjectId string
    userStuff: String(d.userStuff),
    likes: s.likes || [],
    comments: comments(d.comments),
    createdAt: s.createdAt,
    updatedAt: s.updatedAt
  }
})

const trainings = col('trainings').map(d => {
  const s = deepHttps(strip(d))
  return {
    _id: String(d._id),
    name: s.name,
    date: s.date,
    time: s.time,
    description: s.description,
    limit: s.limit,
    bookings: s.bookings,
    isFull: s.isFull,
    sports: s.sports || [],
    students: s.students || [],
    user: snapshot(d.user),
    userStuff: String(d.userStuff)
  }
})

const chats = col('chats').map(d => deepHttps(strip(d)))

/* --------------------------------------------------------------- output */

/* Final sweep: the old app embedded whole user documents in places we do not
 * reshape individually (studentTrainings, userChats), so drop `password`
 * wherever it appears at any depth. */
function stripPasswords(node) {
  if (Array.isArray(node)) return node.map(stripPasswords)
  if (node && typeof node === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(node)) {
      if (k === 'password') continue
      out[k] = stripPasswords(v)
    }
    return out
  }
  return node
}

const banner = `/*
 * Content recovered from the original Gyminy database, as it stood before the
 * 2026 revival (dump taken ${backup.takenAt}).
 *
 * Kept verbatim apart from four normalisations:
 *   - Cloudinary URLs upgraded to https, so they are not blocked as mixed
 *     content when the app is served over HTTPS.
 *   - embedded \`user\` objects were entire user documents including the
 *     password hash; they are now the same trimmed snapshot db/data.js uses.
 *   - \`article.user\` was a bare ObjectId string while the frontend reads
 *     \`article.user.name\`, so these authors rendered as "undefined" in the
 *     article list. It is now a snapshot object like every other item.
 *   - user password hashes are not carried over. The original plaintexts are
 *     unknown, so the seed runner gives these accounts the shared demo
 *     password instead, which makes them usable again.
 *
 * This file is generated. To regenerate it from a fresh dump, see the
 * conversion notes in README.md.
 */

`

const body =
  `module.exports = ${JSON.stringify(stripPasswords({ users, images: portfolio('images'), videos: portfolio('videos'), articles, trainings, chats }), null, 2)}\n`

fs.writeFileSync(OUT, banner + body)

console.log('wrote', OUT)
console.log(JSON.stringify({
  users: users.length,
  images: portfolio('images').length,
  videos: portfolio('videos').length,
  articles: articles.length,
  trainings: trainings.length,
  chats: chats.length
}, null, 2))
