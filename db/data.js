/*
 * Seed content for Gyminy.
 *
 * Every document gets a fixed _id so the data set is deterministic: re-seeding
 * produces the same ids, which keeps bookmarked profile/portfolio URLs working
 * between runs.
 *
 * Images and avatars are generated SVGs served from frontend/public/seed, so
 * they resolve with no network access and no third-party account. Videos are
 * freely-licensed exercise demonstrations hosted by Wikimedia Commons.
 */

const mongoose = require('mongoose')

// 24-char hex ids, grouped by collection so they are easy to eyeball in Compass
const oid = (group, n) =>
  new mongoose.Types.ObjectId(`64f${group}${String(n).padStart(20, '0')}`)

const USER = n => oid('a', n)
const IMAGE = n => oid('b', n)
const VIDEO = n => oid('c', n)
const ARTICLE = n => oid('d', n)
const TRAINING = n => oid('e', n)
const CHAT = n => oid('f', n)

const ATHLETE = 2
const STUDENT = 1

// Must match the options offered by frontend/src/components/common/SportSelect.js
const SPORTS = {
  aerobic: 'Aerobic',
  yoga: 'Yoga',
  strength: 'Strength and Conditioning',
  combat: 'Combat Sports',
  power: 'Powerlifting',
  weight: 'Weightlifting',
  breathing: 'Breathing Exercises'
}

const avatar = name => `/seed/avatars/${name}.svg`
const photo = name => `/seed/photos/${name}.svg`

const DEMO_PASSWORD = 'gyminy123'

/* ------------------------------------------------------------------ users */

const users = [
  {
    _id: USER(1),
    name: 'Nadia Kovac',
    email: 'nadia@gyminy.dev',
    bio: 'S&C coach, ten years under the bar. I build slow, boring programmes that work. Ex-national junior squad, now far more interested in getting ordinary people strong than chasing a total.',
    userType: ATHLETE,
    sports: [SPORTS.strength, SPORTS.power],
    profileImage: avatar('nadia')
  },
  {
    _id: USER(2),
    name: 'Marcus Obi',
    email: 'marcus@gyminy.dev',
    bio: 'Boxing and conditioning. Southpaw. I coach footwork first and let the hands catch up. Beginners genuinely welcome — most of my room has never hit a bag before.',
    userType: ATHLETE,
    sports: [SPORTS.combat, SPORTS.aerobic],
    profileImage: avatar('marcus')
  },
  {
    _id: USER(3),
    name: 'Imogen Fry',
    email: 'imogen@gyminy.dev',
    bio: 'Vinyasa and breathwork. Twelve years teaching, still learning. Sessions are unhurried and there is no such thing as the back row.',
    userType: ATHLETE,
    sports: [SPORTS.yoga, SPORTS.breathing],
    profileImage: avatar('imogen')
  },
  {
    _id: USER(4),
    name: 'Tomas Brandt',
    email: 'tomas@gyminy.dev',
    bio: 'Weightlifting coach. Snatch, clean and jerk, and the unglamorous positional work that makes both of them possible. I film every set — you will get used to it.',
    userType: ATHLETE,
    sports: [SPORTS.weight, SPORTS.power],
    profileImage: avatar('tomas')
  },
  {
    _id: USER(5),
    name: 'Priya Raman',
    email: 'priya@gyminy.dev',
    bio: 'Desk job, dodgy shoulders, slowly fixing both. Here for yoga and the occasional guilt-driven run.',
    userType: STUDENT,
    sports: [SPORTS.yoga, SPORTS.aerobic],
    profileImage: avatar('priya')
  },
  {
    _id: USER(6),
    name: 'Declan Moore',
    email: 'declan@gyminy.dev',
    bio: 'Signed up for one boxing class in January and never left. Still cannot skip properly.',
    userType: STUDENT,
    sports: [SPORTS.combat],
    profileImage: avatar('declan')
  },
  {
    _id: USER(7),
    name: 'Yuki Tanaka',
    email: 'yuki@gyminy.dev',
    bio: 'Learning to snatch at 34. Progress is measured in millimetres and I am fine with that.',
    userType: STUDENT,
    sports: [SPORTS.weight],
    profileImage: avatar('yuki')
  },
  {
    _id: USER(8),
    name: 'Sofia Alvarez',
    email: 'sofia@gyminy.dev',
    bio: 'Two kids, three mornings a week, no patience for anything that is not a compound lift.',
    userType: STUDENT,
    sports: [SPORTS.strength],
    profileImage: avatar('sofia')
  },
  {
    _id: USER(9),
    name: 'Ben Carter',
    email: 'ben@gyminy.dev',
    bio: 'Marathon in April. Currently discovering that lungs are trainable and my hamstrings are not negotiable.',
    userType: STUDENT,
    sports: [SPORTS.aerobic, SPORTS.breathing],
    profileImage: avatar('ben')
  },
  {
    _id: USER(10),
    name: 'Amara Eze',
    email: 'amara@gyminy.dev',
    bio: 'Powerlifting, third meet coming up. Deadlift good, bench a work in progress, squat a personal insult.',
    userType: STUDENT,
    sports: [SPORTS.power],
    profileImage: avatar('amara')
  }
]

/* -------------------------------------------------------------- trainings */

// `date` is a YYYY-MM-DD string and `time` an HH:MM string, matching the
// native date/time inputs in frontend/src/components/common/AddTraining.js
const trainings = [
  {
    _id: TRAINING(1),
    owner: 1,
    name: 'Barbell Basics: Week 1',
    date: '2026-09-01',
    time: '18:30',
    description: 'Squat, hinge, press. Four weeks, same three lifts, loaded a little more each week. No experience needed and no one is going anywhere near a max.',
    limit: 8,
    sports: [SPORTS.strength],
    students: [8, 10]
  },
  {
    _id: TRAINING(2),
    owner: 1,
    name: 'Strength Club — Saturday',
    date: '2026-09-05',
    time: '09:00',
    description: 'Open session. Bring your programme, I float between platforms and fix what needs fixing.',
    limit: 12,
    sports: [SPORTS.strength, SPORTS.power],
    students: [8]
  },
  {
    _id: TRAINING(3),
    owner: 2,
    name: 'Boxing Fundamentals',
    date: '2026-08-27',
    time: '19:00',
    description: 'Stance, guard, jab. An hour on the pads and bags. Wraps provided, gloves available to borrow.',
    limit: 10,
    sports: [SPORTS.combat],
    students: [6, 9]
  },
  {
    _id: TRAINING(4),
    owner: 2,
    name: 'Conditioning Circuit',
    date: '2026-09-03',
    time: '07:00',
    description: 'Forty minutes, eight stations, short rests. Scaleable throughout — go at whatever pace keeps your form honest.',
    limit: 4,
    sports: [SPORTS.aerobic, SPORTS.combat],
    students: [6, 9, 5, 10]
  },
  {
    _id: TRAINING(5),
    owner: 3,
    name: 'Sunrise Vinyasa',
    date: '2026-08-25',
    time: '06:45',
    description: 'A slow flow to open the morning. Mats provided. Coffee afterwards for anyone who wants it.',
    limit: 15,
    sports: [SPORTS.yoga],
    students: [5, 9]
  },
  {
    _id: TRAINING(6),
    owner: 3,
    name: 'Breathwork for Recovery',
    date: '2026-09-08',
    time: '20:00',
    description: 'Forty-five quiet minutes of nasal breathing, extended exhales and down-regulation. Useful the evening after a hard session.',
    limit: 20,
    sports: [SPORTS.breathing],
    students: [5, 9, 10]
  },
  {
    _id: TRAINING(7),
    owner: 4,
    name: 'Snatch Technique Lab',
    date: '2026-09-12',
    time: '18:00',
    description: 'Empty bar and technique primers for most of the hour. We film from the side and go through it together at the end.',
    limit: 6,
    sports: [SPORTS.weight],
    students: [7, 10]
  }
]

/* ----------------------------------------------------------------- images */

const images = [
  {
    _id: IMAGE(1),
    owner: 1,
    url: photo('strength-hall'),
    description: 'Week one of Barbell Basics done. Eight people who had never held a barbell in September, all squatting to depth by Thursday.',
    likes: [8, 10, 4, 5],
    comments: [
      { by: 8, text: 'Still sore. Worth it.' },
      { by: 10, text: 'That cue about spreading the floor finally clicked for me on set three.' },
      { by: 4, text: 'Good depth on the whole room. Nicely coached.' }
    ]
  },
  {
    _id: IMAGE(2),
    owner: 4,
    url: photo('weightlifting'),
    description: 'Positional work before anything gets fast. If the third pull is a mess, the problem usually started at the floor.',
    likes: [7, 1, 10],
    comments: [
      { by: 7, text: 'This is the drill that fixed my catch. Two months of it and something finally changed.' },
      { by: 1, text: 'Stealing this for my Saturday lot.' }
    ]
  },
  {
    _id: IMAGE(3),
    owner: 3,
    url: photo('sunrise-yoga'),
    description: 'Quarter past six and the studio is already full. Something about the light in here in late August.',
    likes: [5, 9, 2],
    comments: [
      { by: 5, text: 'Best hour of my week, genuinely.' },
      { by: 9, text: 'The hip sequence at the end is doing more for my running than any of my running.' }
    ]
  },
  {
    _id: IMAGE(4),
    owner: 2,
    url: photo('combat-room'),
    description: 'Fundamentals class. Nobody in this photo had thrown a punch six weeks ago.',
    likes: [6, 9, 1, 10],
    comments: [
      { by: 6, text: 'Six weeks and I can nearly skip. Nearly.' },
      { by: 1, text: 'The footwork drills you posted last month have found their way into my warm-ups.' }
    ]
  },
  {
    _id: IMAGE(5),
    owner: 3,
    url: photo('breathwork'),
    description: 'Tonight: four counts in, eight out, twenty minutes. That is the entire session and it is harder than it sounds.',
    likes: [9, 5, 2],
    comments: [
      { by: 9, text: 'Fell asleep in the last five minutes. Taking that as a good sign.' }
    ]
  },
  {
    _id: IMAGE(6),
    owner: 1,
    url: photo('iron-hour'),
    description: 'Amara three weeks out from her meet. Openers picked, nothing heroic left in the tank until the platform.',
    likes: [10, 4, 8, 7],
    comments: [
      { by: 10, text: 'Terrified. Ready. Both.' },
      { by: 4, text: 'Openers you can triple. Every time.' }
    ]
  },
  {
    _id: IMAGE(7),
    owner: 2,
    url: photo('track-session'),
    description: 'Conditioning morning. Eight stations, forty seconds on, twenty off. The last round is where the technique quietly falls apart.',
    likes: [9, 6, 5],
    comments: [
      { by: 9, text: 'Round six is a personality test.' },
      { by: 5, text: 'Signed up for next week against my better judgement.' }
    ]
  },
  {
    _id: IMAGE(8),
    owner: 4,
    url: photo('kettlebell-floor'),
    description: 'Loaded carries and get-ups on the accessory day. Unglamorous, and the reason nobody here has hurt their back this year.',
    likes: [7, 1, 8],
    comments: [
      { by: 1, text: 'Carries are the most under-rated thing in the building.' },
      { by: 8, text: 'Adding these on Thursdays.' }
    ]
  }
]

/* ----------------------------------------------------------------- videos */

// Freely-licensed exercise demonstrations from Wikimedia Commons (WebM).
const commons = file =>
  `https://upload.wikimedia.org/wikipedia/commons/${file}`

const videos = [
  {
    _id: VIDEO(1),
    owner: 1,
    url: commons('5/5c/Squat_-_exercise_demonstration_video.webm'),
    description: 'Back squat, side on. Watch the hips and shoulders rise together — the moment they separate you have turned it into a good morning.',
    likes: [8, 10, 4],
    comments: [
      { by: 8, text: 'This is exactly what mine looks like on the heavy sets. Now I know what to fix.' },
      { by: 4, text: 'Good reference clip.' }
    ]
  },
  {
    _id: VIDEO(2),
    owner: 1,
    url: commons('6/62/Deadlift_-_exercise_demonstration_video.webm'),
    description: 'Deadlift set-up. Bar over mid-foot, lats engaged before the pull, slack taken out of the bar. Nothing fast happens until all three are true.',
    likes: [10, 8, 7, 4],
    comments: [
      { by: 10, text: 'The slack-pull cue is the one that fixed my start position.' }
    ]
  },
  {
    _id: VIDEO(3),
    owner: 1,
    url: commons('d/df/Bench_press_-_exercise_demonstration_video.webm'),
    description: 'Bench, touching the same spot every rep. Consistency of bar path matters more than most people think.',
    likes: [10, 8],
    comments: [
      { by: 10, text: 'My arch is nowhere near this. Something to work on.' }
    ]
  },
  {
    _id: VIDEO(4),
    owner: 4,
    url: commons('6/69/Shoulder_press_-_exercise_demonstration_video.webm'),
    description: 'Strict press. Ribs down, glutes on, head through at the top. If your lower back is doing the work, the weight is too heavy.',
    likes: [7, 1, 8],
    comments: [
      { by: 7, text: 'Ribs down was the missing piece for me.' }
    ]
  },
  {
    _id: VIDEO(5),
    owner: 4,
    url: commons('1/15/Pull-ups_-_exercise_demonstration_video.webm'),
    description: 'Full range pull-ups. Dead hang at the bottom, chin properly over at the top. Half reps are a different exercise.',
    likes: [7, 6, 1],
    comments: [
      { by: 6, text: 'Working on the dead hang. The bottom half is brutal.' }
    ]
  },
  {
    _id: VIDEO(6),
    owner: 2,
    url: commons('b/b2/Bent-over_row_-_exercise_demonstration_video.webm'),
    description: 'Bent-over row. Torso angle stays put for the whole set — if it rises as you fatigue, the set is finished.',
    likes: [6, 9, 1],
    comments: []
  },
  {
    _id: VIDEO(7),
    owner: 2,
    url: commons('5/5e/Hanging_crunches_-_exercise_demonstration_video.webm'),
    description: 'Hanging knee raises, slow on the way down. Most people rush the eccentric and wonder why nothing happens.',
    likes: [6, 9],
    comments: [
      { by: 9, text: 'Slowing the negative made these about four times harder.' }
    ]
  }
]

/* --------------------------------------------------------------- articles */

const articles = [
  {
    _id: ARTICLE(1),
    owner: 1,
    title: 'Progress Is Boring, and That Is the Point',
    titleImageUrl: photo('strength-hall'),
    imageUrl: photo('iron-hour'),
    text: `Every few months someone joins the gym convinced that the reason they have not got stronger is that they have not found the right programme yet. They have read about conjugate, about 5/3/1, about daily undulating periodisation, and they want to know which one is optimal.

The honest answer is that almost any of them will work, and none of them will work if you keep switching. The people in this gym who have added serious weight to their lifts over the last two years did it by turning up three times a week and adding a little when they could. That is the whole secret. It is not marketable, which is why nobody sells it.

What actually derails people is not the programme. It is missing a fortnight and never restarting. It is training so hard on a Monday that Wednesday becomes negotiable. It is picking a weight based on how you want to feel rather than what you did last week.

So here is the unglamorous version. Pick three sessions a week you can honestly commit to for two months. Choose a small number of lifts and repeat them. Write down what you did. Add a little when the last session felt manageable, and repeat the weight when it did not. Sleep, eat enough protein to notice, and stop reading about programmes.

Come back in eight weeks and look at your notebook. That is the part nobody posts about, and it is the only part that has ever worked.`,
    likes: [8, 10, 4, 7, 5],
    comments: [
      { by: 8, text: 'Needed to read this. I have restarted three times this year.' },
      { by: 4, text: 'The bit about picking weights based on how you want to feel is uncomfortably accurate.' },
      { by: 10, text: 'Two months of the same four lifts got me to my first meet. Can confirm.' }
    ]
  },
  {
    _id: ARTICLE(2),
    owner: 3,
    title: 'Breathing Is Not a Warm-Up',
    titleImageUrl: photo('breathwork'),
    imageUrl: photo('sunrise-yoga'),
    text: `People arrive at the breathwork class expecting a gentle preamble to something more important. Forty-five minutes later they are usually surprised at how much work it was.

The mechanics are simple. Breathe through the nose. Make the exhale longer than the inhale. Keep the shoulders out of it. If your upper chest is doing the lifting, you are using accessory muscles to do a job the diaphragm is built for, and you are doing it several thousand times a day.

The interesting part is what changes elsewhere. Lifters who spend a few weeks on this tend to find their bracing improves, because they finally have a full breath to brace with. Runners find their cadence settles. People who sleep badly often notice that first, before anything else.

None of this is mystical and none of it requires you to believe anything. It is a skill, it responds to practice, and it is one of the few things you can train on a rest day without any cost.

Start with four counts in and six out, for five minutes, before bed. When six is comfortable, go to eight. That is the entire beginner programme.`,
    likes: [9, 5, 2, 1],
    comments: [
      { by: 9, text: 'Started the four-and-six thing a fortnight ago and I am sleeping properly for the first time in months.' },
      { by: 5, text: 'The bracing point is the one that convinced me to come.' }
    ]
  },
  {
    _id: ARTICLE(3),
    owner: 2,
    title: 'Your First Month on the Bag',
    titleImageUrl: photo('combat-room'),
    imageUrl: photo('track-session'),
    text: `Almost everyone who walks into a beginners boxing class wants to hit something hard. That instinct is fine, and it is also the reason most people spend their first month reinforcing habits we then spend three months undoing.

For the first four weeks, the bag is not there to be hurt. It is there to give you feedback about whether your feet are underneath you. If you can throw a jab and immediately throw another one without shuffling to reset, your stance was correct. If you cannot, no amount of power matters, because in any real exchange you would already be off balance.

So spend the first month on three things. Stand in a comfortable, repeatable stance. Move without crossing your feet. Throw a jab that returns to your guard rather than dropping to your waist. That is it.

The hands come later, and they come quickly once the base is there. I have watched people go from never having boxed to genuinely sharp combinations inside a year, and in every case the thing that made the difference was the boring month at the start.

Wrap your hands properly, do not spar until you are invited to, and let the bag be a teacher rather than a punchbag.`,
    likes: [6, 9, 1, 10],
    comments: [
      { by: 6, text: 'Can confirm the boring month works. I ignored it and had to redo it.' },
      { by: 1, text: 'Same principle as not maxing in week one. Different room, identical mistake.' }
    ]
  }
]

/* ------------------------------------------------------------------ chats */

const chats = [
  {
    _id: CHAT(1),
    between: [8, 1],
    messages: [
      { from: 8, text: 'Hi Nadia — is there space in Barbell Basics on the 1st? I can only really do evenings.' },
      { from: 1, text: 'There is, I have put you down. 18:30, bring flat shoes if you have them.' },
      { from: 8, text: 'Perfect, thank you. Anything I should do before then?' },
      { from: 1, text: 'Nothing at all. Turn up, we start from the beginning.' }
    ]
  },
  {
    _id: CHAT(2),
    between: [6, 2],
    messages: [
      { from: 6, text: 'That skipping drill from Thursday — how long should I actually be doing it for?' },
      { from: 2, text: 'Three rounds of two minutes is plenty at this stage. Rhythm over speed.' },
      { from: 6, text: 'Rhythm is generous. I am still standing on the rope about once a round.' },
      { from: 2, text: 'That is completely normal at six weeks. It stops happening quite suddenly.' }
    ]
  },
  {
    _id: CHAT(3),
    between: [7, 4],
    messages: [
      { from: 7, text: 'Is there room in the snatch lab on the 12th? I saw it was capped at six.' },
      { from: 4, text: 'Two places left, I have taken one for you. Bring the video from last week and we will look at it together.' },
      { from: 7, text: 'Will do. The catch still feels like it happens to me rather than something I do.' },
      { from: 4, text: 'That is exactly the right description, and exactly what the session is for.' }
    ]
  }
]

/* ---------------------------------------------------------------- follows */

// [follower, followed]
const follows = [
  [5, 3], [9, 3], [5, 1], [8, 1], [10, 1], [7, 4], [10, 4],
  [6, 2], [9, 2], [1, 4], [4, 1], [2, 1], [3, 2], [8, 4], [10, 3]
]

module.exports = {
  users,
  trainings,
  images,
  videos,
  articles,
  chats,
  follows,
  DEMO_PASSWORD,
  SPORTS
}
