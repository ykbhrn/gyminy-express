/*
 * Content recovered from the original Gyminy database, as it stood before the
 * 2026 revival (dump taken 2026-08-21T21:35:42.718Z).
 *
 * Kept verbatim apart from four normalisations:
 *   - Cloudinary URLs upgraded to https, so they are not blocked as mixed
 *     content when the app is served over HTTPS.
 *   - embedded `user` objects were entire user documents including the
 *     password hash; they are now the same trimmed snapshot db/data.js uses.
 *   - `article.user` was a bare ObjectId string while the frontend reads
 *     `article.user.name`, so these authors rendered as "undefined" in the
 *     article list. It is now a snapshot object like every other item.
 *   - user password hashes are not carried over. The original plaintexts are
 *     unknown, so the seed runner gives these accounts the shared demo
 *     password instead, which makes them usable again.
 *
 * This file is generated. To regenerate it from a fresh dump, see the
 * conversion notes in README.md.
 */

module.exports = {
  "users": [
    {
      "_id": "6521d6c543465b099178c637",
      "sports": [
        "Strength and Conditioning",
        "Yoga"
      ],
      "newNotification": true,
      "newChat": false,
      "studentTrainings": [],
      "userChats": [],
      "followers": [
        {
          "userName": "jessi7",
          "userId": "6521f19812f4ae0ecb3565c4",
          "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "followedUserId": "6521d6c543465b099178c637",
          "followedUserName": "bryan234",
          "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
        },
        {
          "userName": "mike222",
          "userId": "6521fa3812f4ae0ecb356960",
          "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "followedUserId": "6521d6c543465b099178c637",
          "followedUserName": "bryan234",
          "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
        }
      ],
      "following": [
        {
          "userName": "bryan234",
          "userId": "6521d6c543465b099178c637",
          "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "followedUserId": "6521f19812f4ae0ecb3565c4",
          "followedUserName": "jessi7",
          "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
        }
      ],
      "name": "bryan234",
      "email": "bryan234@email.com",
      "userType": 2,
      "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
      "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
      "notifications": [
        {
          "_id": "6521dff043465b099178c7a7",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "like",
          "portfolioId": "6521d75b43465b099178c69d",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716635/gyminy/images/tpeszfowo33asninzdv8.png",
          "portfolioType": "image"
        },
        {
          "_id": "6521e11443465b099178c7fb",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "comment",
          "portfolioId": "6521d70043465b099178c66b",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
          "portfolioType": "image"
        },
        {
          "_id": "6521e11e43465b099178c80b",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "comment",
          "portfolioId": "6521d70043465b099178c66b",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
          "portfolioType": "image"
        },
        {
          "_id": "6521ea5f43465b099178c91f",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "like",
          "portfolioId": "6521d70043465b099178c66b",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
          "portfolioType": "image"
        },
        {
          "_id": "6521ed521248dc0db7df93c9",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "like",
          "portfolioId": "6521ed481248dc0db7df93ae",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
          "portfolioType": "image"
        },
        {
          "_id": "6521f1a612f4ae0ecb3565ea",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "notificationType": "like",
          "portfolioId": "6521ed481248dc0db7df93ae",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
          "portfolioType": "image"
        },
        {
          "_id": "6521f1aa12f4ae0ecb356603",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "notificationType": "follow",
          "portfolioId": "6521f19812f4ae0ecb3565c4",
          "url": "/profile/6521f19812f4ae0ecb3565c4",
          "portfolioType": "user"
        },
        {
          "_id": "6521f21412f4ae0ecb35666e",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "notificationType": "like",
          "portfolioId": "6521ede41248dc0db7df93d5",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521f21712f4ae0ecb356679",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "notificationType": "like",
          "portfolioId": "6521efc91248dc0db7df9456",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722863/gyminy/videos/qezhtrkxlztohtp6zs9i.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521f44712f4ae0ecb356740",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "notificationType": "comment",
          "portfolioId": "6521ede41248dc0db7df93d5",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521f46a12f4ae0ecb356752",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "notificationType": "comment",
          "portfolioId": "6521ed481248dc0db7df93ae",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
          "portfolioType": "image"
        },
        {
          "_id": "6521f4eb12f4ae0ecb35677b",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "notificationType": "comment",
          "portfolioId": "6521d70043465b099178c66b",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
          "portfolioType": "image"
        },
        {
          "_id": "6521f4ef12f4ae0ecb35678b",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "notificationType": "like",
          "portfolioId": "6521d70043465b099178c66b",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
          "portfolioType": "image"
        },
        {
          "_id": "6521f94e12f4ae0ecb3568f1",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "comment",
          "portfolioId": "6521ed481248dc0db7df93ae",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
          "portfolioType": "image"
        },
        {
          "_id": "6521fa8b12f4ae0ecb3569fc",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "like",
          "portfolioId": "6521d75b43465b099178c69d",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716635/gyminy/images/tpeszfowo33asninzdv8.png",
          "portfolioType": "image"
        },
        {
          "_id": "6521fa9812f4ae0ecb356a15",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "follow",
          "portfolioId": "6521fa3812f4ae0ecb356960",
          "url": "/profile/6521fa3812f4ae0ecb356960",
          "portfolioType": "user"
        },
        {
          "_id": "6521faa712f4ae0ecb356a29",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "comment",
          "portfolioId": "6521ede41248dc0db7df93d5",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521faa812f4ae0ecb356a36",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "like",
          "portfolioId": "6521ede41248dc0db7df93d5",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521fabd12f4ae0ecb356a47",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "comment",
          "portfolioId": "6521d70043465b099178c66b",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
          "portfolioType": "image"
        },
        {
          "_id": "6521fac012f4ae0ecb356a57",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "like",
          "portfolioId": "6521d70043465b099178c66b",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
          "portfolioType": "image"
        },
        {
          "_id": "6521fcbd12f4ae0ecb356b0c",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "training",
          "portfolioId": "6521fb1912f4ae0ecb356a87",
          "url": "Intro to Strength Training",
          "portfolioType": "training",
          "isFull": false
        },
        {
          "_id": "6521fce212f4ae0ecb356b43",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "training",
          "portfolioId": "6521fb5a12f4ae0ecb356a96",
          "url": "Deadlift 101",
          "portfolioType": "training",
          "isFull": false
        }
      ]
    },
    {
      "_id": "6521f19812f4ae0ecb3565c4",
      "sports": [
        "Aerobic",
        "Yoga",
        "Breathing Exercises"
      ],
      "newNotification": true,
      "newChat": false,
      "studentTrainings": [],
      "userChats": [],
      "followers": [
        {
          "userName": "bryan234",
          "userId": "6521d6c543465b099178c637",
          "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "followedUserId": "6521f19812f4ae0ecb3565c4",
          "followedUserName": "jessi7",
          "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
        },
        {
          "userName": "mike222",
          "userId": "6521fa3812f4ae0ecb356960",
          "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "followedUserId": "6521f19812f4ae0ecb3565c4",
          "followedUserName": "jessi7",
          "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
        }
      ],
      "following": [
        {
          "userName": "jessi7",
          "userId": "6521f19812f4ae0ecb3565c4",
          "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "followedUserId": "6521d6c543465b099178c637",
          "followedUserName": "bryan234",
          "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
        }
      ],
      "name": "jessi7",
      "email": "jessi2@mail",
      "userType": 2,
      "bio": "Certified Yoga, Breathing, and Aerobic Instructor. Inspiring mindful movement and heart-pounding workouts, one breath at a time. Join me on a journey to find balance, strength, and serenity through the power of yoga",
      "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
      "notifications": [
        {
          "_id": "6521f41412f4ae0ecb356732",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "notificationType": "like",
          "portfolioId": "6521f3ff12f4ae0ecb35671a",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696723938/gyminy/videos/r6pcbrq9vobizbtmimpa.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521f72b12f4ae0ecb356801",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "notificationType": "like",
          "portfolioId": "6521f72212f4ae0ecb3567e6",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696724742/gyminy/images/hoehnycmu1igfrbmwwp2.jpg",
          "portfolioType": "image"
        },
        {
          "_id": "6521f91012f4ae0ecb356849",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
          "notificationType": "like",
          "portfolioId": "6521f90112f4ae0ecb356831",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696725218/gyminy/videos/ej7w28grbcgzmsdemqcw.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521f93612f4ae0ecb3568a4",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "like",
          "portfolioId": "6521f72212f4ae0ecb3567e6",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696724742/gyminy/images/hoehnycmu1igfrbmwwp2.jpg",
          "portfolioType": "image"
        },
        {
          "_id": "6521f93912f4ae0ecb3568bd",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "follow",
          "portfolioId": "6521d6c543465b099178c637",
          "url": "/profile/6521d6c543465b099178c637",
          "portfolioType": "user"
        },
        {
          "_id": "6521f94412f4ae0ecb3568dc",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "comment",
          "portfolioId": "6521f72212f4ae0ecb3567e6",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696724742/gyminy/images/hoehnycmu1igfrbmwwp2.jpg",
          "portfolioType": "image"
        },
        {
          "_id": "6521f95c12f4ae0ecb356908",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "like",
          "portfolioId": "6521f90112f4ae0ecb356831",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696725218/gyminy/videos/ej7w28grbcgzmsdemqcw.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521f96112f4ae0ecb356914",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "comment",
          "portfolioId": "6521f90112f4ae0ecb356831",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696725218/gyminy/videos/ej7w28grbcgzmsdemqcw.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521f96c12f4ae0ecb356923",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "like",
          "portfolioId": "6521f3ff12f4ae0ecb35671a",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696723938/gyminy/videos/r6pcbrq9vobizbtmimpa.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521f97012f4ae0ecb35692f",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "comment",
          "portfolioId": "6521f3ff12f4ae0ecb35671a",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696723938/gyminy/videos/r6pcbrq9vobizbtmimpa.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521f9ab12f4ae0ecb356951",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
          "notificationType": "comment",
          "portfolioId": "6521f90112f4ae0ecb356831",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696725218/gyminy/videos/ej7w28grbcgzmsdemqcw.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521fa4612f4ae0ecb356986",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "like",
          "portfolioId": "6521f72212f4ae0ecb3567e6",
          "url": "https://res.cloudinary.com/gyminy/image/upload/v1696724742/gyminy/images/hoehnycmu1igfrbmwwp2.jpg",
          "portfolioType": "image"
        },
        {
          "_id": "6521fa4812f4ae0ecb35699f",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "follow",
          "portfolioId": "6521fa3812f4ae0ecb356960",
          "url": "/profile/6521fa3812f4ae0ecb356960",
          "portfolioType": "user"
        },
        {
          "_id": "6521fa4e12f4ae0ecb3569b3",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "like",
          "portfolioId": "6521f3ff12f4ae0ecb35671a",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696723938/gyminy/videos/r6pcbrq9vobizbtmimpa.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521fa5a12f4ae0ecb3569bf",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "comment",
          "portfolioId": "6521f3ff12f4ae0ecb35671a",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696723938/gyminy/videos/r6pcbrq9vobizbtmimpa.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521fa7412f4ae0ecb3569ce",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "like",
          "portfolioId": "6521f90112f4ae0ecb356831",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696725218/gyminy/videos/ej7w28grbcgzmsdemqcw.mp4",
          "portfolioType": "video"
        },
        {
          "_id": "6521fa7912f4ae0ecb3569da",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "notificationType": "comment",
          "portfolioId": "6521f90112f4ae0ecb356831",
          "url": "https://res.cloudinary.com/gyminy/video/upload/v1696725218/gyminy/videos/ej7w28grbcgzmsdemqcw.mp4",
          "portfolioType": "video"
        }
      ]
    },
    {
      "_id": "6521fa3812f4ae0ecb356960",
      "sports": [
        "Aerobic",
        "Yoga",
        "Yoga",
        "Breathing Exercises",
        "Powerlifting"
      ],
      "newNotification": false,
      "newChat": false,
      "studentTrainings": [
        {
          "bookings": 1,
          "limit": 4,
          "isFull": false,
          "students": [
            {
              "userId": "6521fa3812f4ae0ecb356960",
              "name": "mike222",
              "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
            }
          ],
          "sports": [
            "Strength and Conditioning"
          ],
          "_id": "6521fb1912f4ae0ecb356a87",
          "name": "Intro to Strength Training",
          "date": "2023-10-31",
          "time": "10:00",
          "description": "Unlock your inner strength and transform your body through the power of strength training",
          "user": {
            "sports": [
              "Strength and Conditioning",
              "Yoga"
            ],
            "newNotification": true,
            "newChat": false,
            "studentTrainings": [],
            "userChats": [],
            "followers": [
              {
                "userName": "jessi7",
                "userId": "6521f19812f4ae0ecb3565c4",
                "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "followedUserId": "6521d6c543465b099178c637",
                "followedUserName": "bryan234",
                "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
              },
              {
                "userName": "mike222",
                "userId": "6521fa3812f4ae0ecb356960",
                "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "followedUserId": "6521d6c543465b099178c637",
                "followedUserName": "bryan234",
                "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
              }
            ],
            "following": [
              {
                "userName": "bryan234",
                "userId": "6521d6c543465b099178c637",
                "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "followedUserId": "6521f19812f4ae0ecb3565c4",
                "followedUserName": "jessi7",
                "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
              }
            ],
            "_id": "6521d6c543465b099178c637",
            "name": "bryan234",
            "email": "bryan234@email.com",
            "userType": 2,
            "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
            "notifications": [
              {
                "_id": "6521dff043465b099178c7a7",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "like",
                "portfolioId": "6521d75b43465b099178c69d",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716635/gyminy/images/tpeszfowo33asninzdv8.png",
                "portfolioType": "image"
              },
              {
                "_id": "6521e11443465b099178c7fb",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "comment",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521e11e43465b099178c80b",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "comment",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521ea5f43465b099178c91f",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "like",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521ed521248dc0db7df93c9",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "like",
                "portfolioId": "6521ed481248dc0db7df93ae",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
                "portfolioType": "image"
              },
              {
                "_id": "6521f1a612f4ae0ecb3565ea",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "like",
                "portfolioId": "6521ed481248dc0db7df93ae",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
                "portfolioType": "image"
              },
              {
                "_id": "6521f1aa12f4ae0ecb356603",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "follow",
                "portfolioId": "6521f19812f4ae0ecb3565c4",
                "url": "/profile/6521f19812f4ae0ecb3565c4",
                "portfolioType": "user"
              },
              {
                "_id": "6521f21412f4ae0ecb35666e",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "like",
                "portfolioId": "6521ede41248dc0db7df93d5",
                "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
                "portfolioType": "video"
              },
              {
                "_id": "6521f21712f4ae0ecb356679",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "like",
                "portfolioId": "6521efc91248dc0db7df9456",
                "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722863/gyminy/videos/qezhtrkxlztohtp6zs9i.mp4",
                "portfolioType": "video"
              },
              {
                "_id": "6521f44712f4ae0ecb356740",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "comment",
                "portfolioId": "6521ede41248dc0db7df93d5",
                "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
                "portfolioType": "video"
              },
              {
                "_id": "6521f46a12f4ae0ecb356752",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "comment",
                "portfolioId": "6521ed481248dc0db7df93ae",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
                "portfolioType": "image"
              },
              {
                "_id": "6521f4eb12f4ae0ecb35677b",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "comment",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521f4ef12f4ae0ecb35678b",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "like",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521f94e12f4ae0ecb3568f1",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "comment",
                "portfolioId": "6521ed481248dc0db7df93ae",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
                "portfolioType": "image"
              },
              {
                "_id": "6521fa8b12f4ae0ecb3569fc",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "like",
                "portfolioId": "6521d75b43465b099178c69d",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716635/gyminy/images/tpeszfowo33asninzdv8.png",
                "portfolioType": "image"
              },
              {
                "_id": "6521fa9812f4ae0ecb356a15",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "follow",
                "portfolioId": "6521fa3812f4ae0ecb356960",
                "url": "/profile/6521fa3812f4ae0ecb356960",
                "portfolioType": "user"
              },
              {
                "_id": "6521faa712f4ae0ecb356a29",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "comment",
                "portfolioId": "6521ede41248dc0db7df93d5",
                "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
                "portfolioType": "video"
              },
              {
                "_id": "6521faa812f4ae0ecb356a36",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "like",
                "portfolioId": "6521ede41248dc0db7df93d5",
                "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
                "portfolioType": "video"
              },
              {
                "_id": "6521fabd12f4ae0ecb356a47",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "comment",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521fac012f4ae0ecb356a57",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "like",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              }
            ],
            "__v": 21
          },
          "userStuff": "6521d6c543465b099178c637",
          "__v": 0
        },
        {
          "bookings": 1,
          "limit": 4,
          "isFull": false,
          "students": [
            {
              "userId": "6521fa3812f4ae0ecb356960",
              "name": "mike222",
              "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
            }
          ],
          "sports": [
            "Powerlifting"
          ],
          "_id": "6521fb5a12f4ae0ecb356a96",
          "name": "Deadlift 101",
          "date": "2023-11-03",
          "time": "07:44",
          "description": "Proper Form Of Lifting",
          "user": {
            "sports": [
              "Strength and Conditioning",
              "Yoga"
            ],
            "newNotification": true,
            "newChat": false,
            "studentTrainings": [],
            "userChats": [],
            "followers": [
              {
                "userName": "jessi7",
                "userId": "6521f19812f4ae0ecb3565c4",
                "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "followedUserId": "6521d6c543465b099178c637",
                "followedUserName": "bryan234",
                "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
              },
              {
                "userName": "mike222",
                "userId": "6521fa3812f4ae0ecb356960",
                "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "followedUserId": "6521d6c543465b099178c637",
                "followedUserName": "bryan234",
                "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
              }
            ],
            "following": [
              {
                "userName": "bryan234",
                "userId": "6521d6c543465b099178c637",
                "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "followedUserId": "6521f19812f4ae0ecb3565c4",
                "followedUserName": "jessi7",
                "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
              }
            ],
            "_id": "6521d6c543465b099178c637",
            "name": "bryan234",
            "email": "bryan234@email.com",
            "userType": 2,
            "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
            "notifications": [
              {
                "_id": "6521dff043465b099178c7a7",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "like",
                "portfolioId": "6521d75b43465b099178c69d",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716635/gyminy/images/tpeszfowo33asninzdv8.png",
                "portfolioType": "image"
              },
              {
                "_id": "6521e11443465b099178c7fb",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "comment",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521e11e43465b099178c80b",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "comment",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521ea5f43465b099178c91f",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "like",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521ed521248dc0db7df93c9",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "like",
                "portfolioId": "6521ed481248dc0db7df93ae",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
                "portfolioType": "image"
              },
              {
                "_id": "6521f1a612f4ae0ecb3565ea",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "like",
                "portfolioId": "6521ed481248dc0db7df93ae",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
                "portfolioType": "image"
              },
              {
                "_id": "6521f1aa12f4ae0ecb356603",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "follow",
                "portfolioId": "6521f19812f4ae0ecb3565c4",
                "url": "/profile/6521f19812f4ae0ecb3565c4",
                "portfolioType": "user"
              },
              {
                "_id": "6521f21412f4ae0ecb35666e",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "like",
                "portfolioId": "6521ede41248dc0db7df93d5",
                "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
                "portfolioType": "video"
              },
              {
                "_id": "6521f21712f4ae0ecb356679",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "like",
                "portfolioId": "6521efc91248dc0db7df9456",
                "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722863/gyminy/videos/qezhtrkxlztohtp6zs9i.mp4",
                "portfolioType": "video"
              },
              {
                "_id": "6521f44712f4ae0ecb356740",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "comment",
                "portfolioId": "6521ede41248dc0db7df93d5",
                "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
                "portfolioType": "video"
              },
              {
                "_id": "6521f46a12f4ae0ecb356752",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "comment",
                "portfolioId": "6521ed481248dc0db7df93ae",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
                "portfolioType": "image"
              },
              {
                "_id": "6521f4eb12f4ae0ecb35677b",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "comment",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521f4ef12f4ae0ecb35678b",
                "userId": "6521f19812f4ae0ecb3565c4",
                "username": "jessi7",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg",
                "notificationType": "like",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521f94e12f4ae0ecb3568f1",
                "userId": "6521d6c543465b099178c637",
                "username": "bryan234",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp",
                "notificationType": "comment",
                "portfolioId": "6521ed481248dc0db7df93ae",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
                "portfolioType": "image"
              },
              {
                "_id": "6521fa8b12f4ae0ecb3569fc",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "like",
                "portfolioId": "6521d75b43465b099178c69d",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716635/gyminy/images/tpeszfowo33asninzdv8.png",
                "portfolioType": "image"
              },
              {
                "_id": "6521fa9812f4ae0ecb356a15",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "follow",
                "portfolioId": "6521fa3812f4ae0ecb356960",
                "url": "/profile/6521fa3812f4ae0ecb356960",
                "portfolioType": "user"
              },
              {
                "_id": "6521faa712f4ae0ecb356a29",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "comment",
                "portfolioId": "6521ede41248dc0db7df93d5",
                "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
                "portfolioType": "video"
              },
              {
                "_id": "6521faa812f4ae0ecb356a36",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "like",
                "portfolioId": "6521ede41248dc0db7df93d5",
                "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
                "portfolioType": "video"
              },
              {
                "_id": "6521fabd12f4ae0ecb356a47",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "comment",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              },
              {
                "_id": "6521fac012f4ae0ecb356a57",
                "userId": "6521fa3812f4ae0ecb356960",
                "username": "mike222",
                "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
                "notificationType": "like",
                "portfolioId": "6521d70043465b099178c66b",
                "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
                "portfolioType": "image"
              }
            ],
            "__v": 21
          },
          "userStuff": "6521d6c543465b099178c637",
          "__v": 0
        }
      ],
      "userChats": [],
      "followers": [],
      "following": [
        {
          "userName": "mike222",
          "userId": "6521fa3812f4ae0ecb356960",
          "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "followedUserId": "6521f19812f4ae0ecb3565c4",
          "followedUserName": "jessi7",
          "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
        },
        {
          "userName": "mike222",
          "userId": "6521fa3812f4ae0ecb356960",
          "userProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
          "followedUserId": "6521d6c543465b099178c637",
          "followedUserName": "bryan234",
          "followedUserProfileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
        }
      ],
      "name": "mike222",
      "email": "mike2@email",
      "userType": 1,
      "bio": "Looking forward towards active lifestyle",
      "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg",
      "notifications": []
    }
  ],
  "images": [
    {
      "_id": "6521d70043465b099178c66b",
      "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716511/gyminy/images/jcwqm00z1xfrhvjtqnu2.webp",
      "description": "\"Pushing my limits one rep at a time! 💪🔥 #StrengthTraining #PushYourself #\n\n",
      "user": {
        "_id": "6521d6c543465b099178c637",
        "name": "bryan234",
        "email": "bryan234@email.com",
        "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
        "userType": 2,
        "sports": [
          "Strength and Conditioning",
          "Yoga"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
      },
      "userStuff": "6521d6c543465b099178c637",
      "likes": [
        {
          "_id": "6521ea5f43465b099178c91e",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
        },
        {
          "_id": "6521f4ef12f4ae0ecb35678a",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
        },
        {
          "_id": "6521fac012f4ae0ecb356a56",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
        }
      ],
      "comments": [
        {
          "_id": "6521f4eb12f4ae0ecb35677c",
          "text": "You're absolutely nailing your strength workouts. Keep up the great work",
          "user": {
            "_id": "6521f19812f4ae0ecb3565c4",
            "name": "jessi7",
            "email": "jessi2@mail",
            "bio": "Certified Yoga, Breathing, and Aerobic Instructor. Inspiring mindful movement and heart-pounding workouts, one breath at a time. Join me on a journey to find balance, strength, and serenity through the power of yoga",
            "userType": 2,
            "sports": [
              "Aerobic",
              "Yoga",
              "Breathing Exercises"
            ],
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
          },
          "createdAt": "2023-10-08T00:16:43.700Z",
          "updatedAt": "2023-10-08T00:16:43.700Z"
        },
        {
          "_id": "6521fabd12f4ae0ecb356a48",
          "text": "Keep going",
          "user": {
            "_id": "6521fa3812f4ae0ecb356960",
            "name": "mike222",
            "email": "mike2@email",
            "bio": "Looking forward towards active lifestyle",
            "userType": 1,
            "sports": [
              "Aerobic",
              "Yoga",
              "Yoga",
              "Breathing Exercises",
              "Powerlifting"
            ],
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
          },
          "createdAt": "2023-10-08T00:41:33.378Z",
          "updatedAt": "2023-10-08T00:41:33.378Z"
        }
      ],
      "createdAt": "2023-10-07T22:09:04.572Z",
      "updatedAt": "2023-10-08T00:41:36.001Z"
    },
    {
      "_id": "6521d75b43465b099178c69d",
      "url": "https://res.cloudinary.com/gyminy/image/upload/v1696716635/gyminy/images/tpeszfowo33asninzdv8.png",
      "description": "\"Post-workout bliss! 🙌 Finding tranquility in the calm after the storm. 🧘‍♂️🌿 #RecoveryTime #YogaLife #",
      "user": {
        "_id": "6521d6c543465b099178c637",
        "name": "bryan234",
        "email": "bryan234@email.com",
        "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
        "userType": 2,
        "sports": [
          "Strength and Conditioning",
          "Yoga"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
      },
      "userStuff": "6521d6c543465b099178c637",
      "likes": [
        {
          "_id": "6521dff043465b099178c7a6",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
        },
        {
          "_id": "6521fa8b12f4ae0ecb3569fb",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
        }
      ],
      "comments": [],
      "createdAt": "2023-10-07T22:10:35.844Z",
      "updatedAt": "2023-10-08T00:40:43.322Z"
    },
    {
      "_id": "6521ed481248dc0db7df93ae",
      "url": "https://res.cloudinary.com/gyminy/image/upload/v1696722224/gyminy/images/hh720tyetlhb8kcbdl5f.jpg",
      "description": "\"Finding inner peace one breath at a time. 🧘‍♀️✨ #YogaJourney #Mindfulness #\n\n",
      "user": {
        "_id": "6521d6c543465b099178c637",
        "name": "bryan234",
        "email": "bryan234@email.com",
        "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
        "userType": 2,
        "sports": [
          "Strength and Conditioning",
          "Yoga"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
      },
      "userStuff": "6521d6c543465b099178c637",
      "likes": [
        {
          "_id": "6521ed521248dc0db7df93c8",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
        },
        {
          "_id": "6521f1a612f4ae0ecb3565e9",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
        }
      ],
      "comments": [
        {
          "_id": "6521f46a12f4ae0ecb356753",
          "text": "\"Finding serenity in every pose! 🧘‍♀️✨ Your practice is an inspiration. 🙏",
          "user": {
            "_id": "6521f19812f4ae0ecb3565c4",
            "name": "jessi7",
            "email": "jessi2@mail",
            "bio": "Certified Yoga, Breathing, and Aerobic Instructor. Inspiring mindful movement and heart-pounding workouts, one breath at a time. Join me on a journey to find balance, strength, and serenity through the power of yoga",
            "userType": 2,
            "sports": [
              "Aerobic",
              "Yoga",
              "Breathing Exercises"
            ],
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
          },
          "createdAt": "2023-10-08T00:14:34.510Z",
          "updatedAt": "2023-10-08T00:14:34.510Z"
        },
        {
          "_id": "6521f94e12f4ae0ecb3568f2",
          "text": "thanks",
          "user": {
            "_id": "6521d6c543465b099178c637",
            "name": "bryan234",
            "email": "bryan234@email.com",
            "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
            "userType": 2,
            "sports": [
              "Strength and Conditioning",
              "Yoga"
            ],
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
          },
          "createdAt": "2023-10-08T00:35:26.243Z",
          "updatedAt": "2023-10-08T00:35:26.243Z"
        }
      ],
      "createdAt": "2023-10-07T23:44:08.794Z",
      "updatedAt": "2023-10-08T00:35:26.243Z"
    },
    {
      "_id": "6521f72212f4ae0ecb3567e6",
      "url": "https://res.cloudinary.com/gyminy/image/upload/v1696724742/gyminy/images/hoehnycmu1igfrbmwwp2.jpg",
      "description": "Sweat, smile, repeat. Making every workout count! 💦🏋️‍♀️",
      "user": {
        "_id": "6521f19812f4ae0ecb3565c4",
        "name": "jessi7",
        "email": "jessi2@mail",
        "bio": "Certified Yoga, Breathing, and Aerobic Instructor. Inspiring mindful movement and heart-pounding workouts, one breath at a time. Join me on a journey to find balance, strength, and serenity through the power of yoga",
        "userType": 2,
        "sports": [
          "Aerobic",
          "Yoga",
          "Breathing Exercises"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
      },
      "userStuff": "6521f19812f4ae0ecb3565c4",
      "likes": [
        {
          "_id": "6521f72b12f4ae0ecb356800",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
        },
        {
          "_id": "6521f93612f4ae0ecb3568a3",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
        },
        {
          "_id": "6521fa4612f4ae0ecb356985",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
        }
      ],
      "comments": [
        {
          "_id": "6521f94412f4ae0ecb3568dd",
          "text": "Keep going",
          "user": {
            "_id": "6521d6c543465b099178c637",
            "name": "bryan234",
            "email": "bryan234@email.com",
            "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
            "userType": 2,
            "sports": [
              "Strength and Conditioning",
              "Yoga"
            ],
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
          },
          "createdAt": "2023-10-08T00:35:16.833Z",
          "updatedAt": "2023-10-08T00:35:16.833Z"
        }
      ],
      "createdAt": "2023-10-08T00:26:10.228Z",
      "updatedAt": "2023-10-08T00:39:34.006Z"
    }
  ],
  "videos": [
    {
      "_id": "6521ede41248dc0db7df93d5",
      "url": "https://res.cloudinary.com/gyminy/video/upload/v1696722368/gyminy/videos/helebrucldlgfovgp0lu.mp4",
      "description": "\"Strength is not just about lifting weights; it's about the power within. 💪🔥 #InnerStrength #Motivation\"\n\n\"Embrace your strength, empower your life. 💥 #StrengthGoals #Unstoppable\"\n\n\"Strong mind, strong body, strong life. 🧠💪❤️ #StrengthTraining #MindOverMatter\"\n\n\"In the gym, as in life, find your strength and rise above. 🏋️‍♂️🚀 #StrongerEveryDay #AchieveGreatness\"\n\n\"Sweat, determination, and a dash of grit – the recipe for strength. 💦💪 #WorkHard #",
      "user": {
        "_id": "6521d6c543465b099178c637",
        "name": "bryan234",
        "email": "bryan234@email.com",
        "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
        "userType": 2,
        "sports": [
          "Strength and Conditioning",
          "Yoga"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
      },
      "userStuff": "6521d6c543465b099178c637",
      "likes": [
        {
          "_id": "6521f21412f4ae0ecb35666d",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
        },
        {
          "_id": "6521faa812f4ae0ecb356a35",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
        }
      ],
      "comments": [
        {
          "_id": "6521f44712f4ae0ecb356741",
          "text": "where passion meets performance! 🏆",
          "user": {
            "_id": "6521f19812f4ae0ecb3565c4",
            "name": "jessi7",
            "email": "jessi2@mail",
            "bio": "Certified Yoga, Breathing, and Aerobic Instructor. Inspiring mindful movement and heart-pounding workouts, one breath at a time. Join me on a journey to find balance, strength, and serenity through the power of yoga",
            "userType": 2,
            "sports": [
              "Aerobic",
              "Yoga",
              "Breathing Exercises"
            ],
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
          },
          "createdAt": "2023-10-08T00:13:59.887Z",
          "updatedAt": "2023-10-08T00:13:59.887Z"
        },
        {
          "_id": "6521faa712f4ae0ecb356a2a",
          "text": "haha, maybe one day",
          "user": {
            "_id": "6521fa3812f4ae0ecb356960",
            "name": "mike222",
            "email": "mike2@email",
            "bio": "Looking forward towards active lifestyle",
            "userType": 1,
            "sports": [
              "Aerobic",
              "Yoga",
              "Yoga",
              "Breathing Exercises",
              "Powerlifting"
            ],
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
          },
          "createdAt": "2023-10-08T00:41:11.187Z",
          "updatedAt": "2023-10-08T00:41:11.187Z"
        }
      ],
      "createdAt": "2023-10-07T23:46:44.239Z",
      "updatedAt": "2023-10-08T00:41:12.692Z"
    },
    {
      "_id": "6521f3ff12f4ae0ecb35671a",
      "url": "https://res.cloudinary.com/gyminy/video/upload/v1696723938/gyminy/videos/r6pcbrq9vobizbtmimpa.mp4",
      "description": "Discover the transformative power of correct breathing. Inhale deeply, exhale slowly, and unlock a world of inner strength and focus. Embrace the vitality that conscious breathing brings to your life. 🌬",
      "user": {
        "_id": "6521f19812f4ae0ecb3565c4",
        "name": "jessi7",
        "email": "jessi2@mail",
        "bio": "Certified Yoga, Breathing, and Aerobic Instructor. Inspiring mindful movement and heart-pounding workouts, one breath at a time. Join me on a journey to find balance, strength, and serenity through the power of yoga",
        "userType": 2,
        "sports": [
          "Aerobic",
          "Yoga",
          "Breathing Exercises"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
      },
      "userStuff": "6521f19812f4ae0ecb3565c4",
      "likes": [
        {
          "_id": "6521f41412f4ae0ecb356731",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
        },
        {
          "_id": "6521f96c12f4ae0ecb356922",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
        },
        {
          "_id": "6521fa4e12f4ae0ecb3569b2",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
        }
      ],
      "comments": [
        {
          "_id": "6521f97012f4ae0ecb356930",
          "text": "Agree",
          "user": {
            "_id": "6521d6c543465b099178c637",
            "name": "bryan234",
            "email": "bryan234@email.com",
            "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
            "userType": 2,
            "sports": [
              "Strength and Conditioning",
              "Yoga"
            ],
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
          },
          "createdAt": "2023-10-08T00:36:00.754Z",
          "updatedAt": "2023-10-08T00:36:00.754Z"
        },
        {
          "_id": "6521fa5a12f4ae0ecb3569c0",
          "text": "Oh wow, amazing",
          "user": {
            "_id": "6521fa3812f4ae0ecb356960",
            "name": "mike222",
            "email": "mike2@email",
            "bio": "Looking forward towards active lifestyle",
            "userType": 1,
            "sports": [
              "Aerobic",
              "Yoga",
              "Yoga",
              "Breathing Exercises",
              "Powerlifting"
            ],
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
          },
          "createdAt": "2023-10-08T00:39:54.637Z",
          "updatedAt": "2023-10-08T00:39:54.637Z"
        }
      ],
      "createdAt": "2023-10-08T00:12:47.534Z",
      "updatedAt": "2023-10-08T00:39:54.637Z"
    },
    {
      "_id": "6521f90112f4ae0ecb356831",
      "url": "https://res.cloudinary.com/gyminy/video/upload/v1696725218/gyminy/videos/ej7w28grbcgzmsdemqcw.mp4",
      "description": "Running: the ultimate therapy for mind and body",
      "user": {
        "_id": "6521f19812f4ae0ecb3565c4",
        "name": "jessi7",
        "email": "jessi2@mail",
        "bio": "Certified Yoga, Breathing, and Aerobic Instructor. Inspiring mindful movement and heart-pounding workouts, one breath at a time. Join me on a journey to find balance, strength, and serenity through the power of yoga",
        "userType": 2,
        "sports": [
          "Aerobic",
          "Yoga",
          "Breathing Exercises"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
      },
      "userStuff": "6521f19812f4ae0ecb3565c4",
      "likes": [
        {
          "_id": "6521f91012f4ae0ecb356848",
          "userId": "6521f19812f4ae0ecb3565c4",
          "username": "jessi7",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
        },
        {
          "_id": "6521f95c12f4ae0ecb356907",
          "userId": "6521d6c543465b099178c637",
          "username": "bryan234",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
        },
        {
          "_id": "6521fa7412f4ae0ecb3569cd",
          "userId": "6521fa3812f4ae0ecb356960",
          "username": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
        }
      ],
      "comments": [
        {
          "_id": "6521f9ab12f4ae0ecb356952",
          "text": "cool video",
          "user": {
            "_id": "6521d6c543465b099178c637",
            "name": "bryan234",
            "email": "bryan234@email.com",
            "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
            "userType": 2,
            "sports": [
              "Strength and Conditioning",
              "Yoga"
            ],
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
          },
          "createdAt": "2023-10-08T00:36:59.874Z",
          "updatedAt": "2023-10-08T00:36:59.874Z"
        },
        {
          "_id": "6521fa7912f4ae0ecb3569db",
          "text": "inspirational",
          "user": {
            "_id": "6521fa3812f4ae0ecb356960",
            "name": "mike222",
            "email": "mike2@email",
            "bio": "Looking forward towards active lifestyle",
            "userType": 1,
            "sports": [
              "Aerobic",
              "Yoga",
              "Yoga",
              "Breathing Exercises",
              "Powerlifting"
            ],
            "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
          },
          "createdAt": "2023-10-08T00:40:25.116Z",
          "updatedAt": "2023-10-08T00:40:25.116Z"
        }
      ],
      "createdAt": "2023-10-08T00:34:09.570Z",
      "updatedAt": "2023-10-08T00:40:25.117Z"
    }
  ],
  "articles": [
    {
      "_id": "6521ec761248dc0db7df9359",
      "title": "Unleashing the Power Within: The Science of Strength Training",
      "text": "Strength training, often associated with bodybuilders and athletes, is a fitness regimen that offers a myriad of benefits for people of all fitness levels. Beyond sculpting impressive muscles, it can enhance your overall health, improve athletic performance, and even boost your confidence. In this article, we'll delve into the science behind strength training and explore why it's a valuable addition to any fitness routine.\n\nThe Basics of Strength Training\n\nStrength training, also known as resistance training, involves the use of resistance (weights, resistance bands, or body weight) to stimulate muscle contractions. These contractions lead to an increase in muscle strength, size, and endurance. Here's how it works:\n\nMuscle Fiber Activation: During strength training, your muscles experience microscopic damage at the cellular level. This damage triggers a natural healing response, and your body repairs and strengthens the affected muscle fibers.\n\nNeuromuscular Adaptations: Strength training enhances the communication between your muscles and your nervous system. Over time, this improved connection leads to better muscle control and coordination.\n\nHormonal Changes: Strength training can elevate the production of hormones like testosterone and growth hormone, which play a crucial role in muscle growth and repair.\n\nBenefits of Strength Training\n\nIncreased Muscle Mass: One of the most obvious benefits is muscle growth. More muscle means a higher resting metabolic rate, which can help with weight management.\n\nImproved Strength: As the name suggests, strength training makes you stronger. This not only aids in daily activities but also reduces the risk of injury.\n\nEnhanced Bone Health: Strength training places stress on your bones, which encourages bone density growth and reduces the risk of osteoporosis.\n\nFat Loss: Muscle tissue burns more calories at rest than fat tissue. Strength training can help you lose body fat and maintain a healthy weight.\n\nBetter Mental Health: Exercise, including strength training, releases endorphins, which can improve your mood and reduce stress and anxiety.\n\nEnhanced Sports Performance: Athletes can benefit from strength training by improving power, speed, and agility.\n\nInjury Prevention: A stronger body is less susceptible to injuries, as it can better withstand the demands of physical activity.\n\nGetting Started\n\nBefore embarking on a strength training program, consider the following tips:\n\nConsult a Professional: If you're new to strength training, it's wise to consult with a fitness trainer or coach to design a safe and effective program.\n\nProper Form: Correct form is crucial to avoid injuries. Focus on technique before adding heavier weights.\n\nProgressive Overload: Gradually increase the resistance to keep challenging your muscles and stimulating growth.\n\nRest and Recovery: Allow your muscles time to recover. Aim for at least 48 hours between working the same muscle group.\n\nBalanced Diet: Nutrition plays a vital role in muscle recovery and growth. Ensure you're consuming enough protein and other nutrients.\n\nIn conclusion, strength training is not just about building bulging muscles; it's a holistic approach to improving your physical and mental well-being. Whether you're an athlete looking to enhance performance or someone seeking a healthier lifestyle, incorporating strength training into your fitness routine can yield significant benefits. So, grab those weights, get started, and unleash the power within",
      "imageUrl": "https://res.cloudinary.com/gyminy/image/upload/v1696721995/gyminy/images/jvnisbraa6j1pvoge8ez.jpg",
      "titleImageUrl": "https://res.cloudinary.com/gyminy/image/upload/v1696722002/gyminy/images/qvxfjq6oae432pm1usu3.webp",
      "user": {
        "_id": "6521d6c543465b099178c637",
        "name": "bryan234",
        "email": "bryan234@email.com",
        "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
        "userType": 2,
        "sports": [
          "Strength and Conditioning",
          "Yoga"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
      },
      "userStuff": "6521d6c543465b099178c637",
      "likes": [],
      "comments": [],
      "createdAt": "2023-10-07T23:40:38.701Z",
      "updatedAt": "2023-10-07T23:40:38.701Z"
    },
    {
      "_id": "6521ecfd1248dc0db7df9388",
      "title": "The Transformative Power of Yoga: Cultivating Mind, Body, and Soul",
      "text": "Yoga, an ancient practice that originated in India, has gained immense popularity worldwide for its holistic approach to health and wellness. Beyond its physical postures, yoga encompasses mindfulness, breathing exercises, and meditation. In this article, we'll explore the transformative power of yoga and how it can benefit your mind, body, and soul.\n\nPhysical Well-being\n\nYoga's physical benefits are often the most apparent. Regular practice can lead to:\n\nImproved Flexibility: Yoga's various poses and stretches gradually increase your flexibility, making everyday movements easier and reducing the risk of injury.\n\nEnhanced Strength: Many yoga poses require you to support your body weight, which helps build and tone muscles.\n\nBetter Posture: Yoga emphasizes alignment and body awareness, leading to improved posture and reduced strain on the spine.\n\nPain Relief: Yoga can alleviate chronic pain conditions like back pain, arthritis, and migraines.\n\nBalance and Coordination: The practice of balancing poses enhances coordination and spatial awareness.\n\nMental Well-being\n\nYoga is often associated with mental tranquility and emotional balance. It can:\n\nReduce Stress: Mindful breathing and relaxation techniques in yoga help lower stress levels and promote calmness.\n\nEnhance Focus: Regular meditation practice in yoga can sharpen your concentration and mental clarity.\n\nBoost Mood: The release of endorphins during yoga sessions can elevate your mood and reduce symptoms of anxiety and depression.\n\nStress Management: Yoga equips you with tools to better manage stressful situations, both on and off the mat.\n\nSpiritual Well-being\n\nWhile yoga is not inherently a religious practice, it can have a profound impact on your spiritual journey by:\n\nInner Exploration: Yoga encourages self-reflection, allowing you to explore your inner world and develop a deeper understanding of yourself.\n\nConnection: Many practitioners report feeling a greater sense of connection with themselves, others, and the universe as a whole.\n\nMindfulness: The practice of being present in the moment can foster a sense of spirituality, regardless of your religious beliefs.\n\nPurpose: Yoga often leads individuals to discover a sense of purpose and a desire to lead a more meaningful life.\n\nGetting Started\n\nIf you're new to yoga, consider these steps to begin your journey:\n\nFind a Class: Look for a local yoga studio or online classes to get started. There are various styles, so choose one that aligns with your goals and preferences.\n\nInvest in a Mat: A good-quality yoga mat provides comfort and stability during your practice.\n\nPractice Regularly: Consistency is key. Start with a few minutes each day and gradually increase the duration as you become more comfortable.\n\nListen to Your Body: Pay attention to your body's signals. Yoga is not about pushing yourself to the limit but finding balance and harmony within.\n\nExplore Different Styles: Don't be afraid to explore different yoga styles and instructors to find what resonates with you.\n\nIn conclusion, yoga is a powerful practice that can transform your life physically, mentally, and spiritually. Whether you're seeking physical fitness, stress relief, or a deeper connection with yourself, yoga offers a path to holistic well-being. Embrace this ancient art, and discover the profound changes it can bring to your mind, body, and soul",
      "imageUrl": "https://res.cloudinary.com/gyminy/image/upload/v1696722139/gyminy/images/tqlwvrntbo2ccyjq2dxs.webp",
      "titleImageUrl": "https://res.cloudinary.com/gyminy/image/upload/v1696722145/gyminy/images/faky2gt7zkl7opxflzts.jpg",
      "user": {
        "_id": "6521d6c543465b099178c637",
        "name": "bryan234",
        "email": "bryan234@email.com",
        "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
        "userType": 2,
        "sports": [
          "Strength and Conditioning",
          "Yoga"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
      },
      "userStuff": "6521d6c543465b099178c637",
      "likes": [],
      "comments": [],
      "createdAt": "2023-10-07T23:42:53.058Z",
      "updatedAt": "2023-10-07T23:42:53.058Z"
    },
    {
      "_id": "6521f5ab12f4ae0ecb3567a9",
      "title": "Unlocking the Power of Breath: The Art and Science of Breathing Exercises",
      "text": "Unlocking the Power of Breath: The Art and Science of Breathing Exercises\n\nIn the hustle and bustle of our fast-paced lives, we often take our breath for granted. It's automatic, involuntary, and requires no conscious effort, which can lead us to overlook its incredible potential. However, when harnessed consciously through breathing exercises, the simple act of breathing can become a powerful tool for improving our physical and mental well-being. In this article, we will delve into the art and science of breathing exercises and explore their numerous benefits.\n\nThe Science Behind Breathing\n\nBreathing is an essential function that delivers oxygen to our cells and removes waste products like carbon dioxide. However, the way we breathe can influence our health in profound ways. Here's a brief overview of the science behind it:\n\nThe Respiratory System: Our lungs play a central role in the respiratory system. They contain millions of tiny air sacs called alveoli, where oxygen is absorbed into the bloodstream, and carbon dioxide is released.\n\nThe Autonomic Nervous System: Breathing is controlled by the autonomic nervous system, which has two branches: the sympathetic (fight or flight) and the parasympathetic (rest and digest). Deep, slow breathing activates the parasympathetic system, promoting relaxation and reducing stress.\n\nGas Exchange: Breathing exercises optimize the exchange of gases in the lungs. Deep inhalations bring in more oxygen, while slow exhalations help expel more carbon dioxide.\n\nBenefits of Breathing Exercises\n\nStress Reduction: Slow, deep breathing can reduce the production of stress hormones like cortisol, leading to a calmer mind and reduced anxiety.\n\nImproved Lung Function: Regular breathing exercises can enhance lung capacity and efficiency, improving overall respiratory health.\n\nEnhanced Focus: Conscious breathing increases oxygen supply to the brain, improving concentration and cognitive function.\n\nBetter Sleep: Deep breathing can calm the nervous system, making it easier to fall asleep and enjoy more restful sleep.\n\nPain Management: Breathing techniques can help alleviate pain by reducing muscle tension and promoting relaxation.\n\nEmotional Regulation: Breathing exercises can assist in managing emotions, allowing you to respond to challenging situations more calmly.\n\nCommon Breathing Exercises\n\nDiaphragmatic Breathing: Also known as belly breathing, this exercise involves inhaling deeply through the nose, allowing the abdomen to rise, and exhaling slowly through the mouth.\n\nBox Breathing: Inhale for a count of four, hold for a count of four, exhale for a count of four, and hold for a count of four. Repeat.\n\nAlternate Nostril Breathing: Close one nostril with your thumb and inhale through the other. Close the first nostril with your ring finger and exhale through the opposite nostril. Repeat.\n\n4-7-8 Breathing: Inhale for a count of four, hold for a count of seven, and exhale for a count of eight.\n\nIncorporating Breathing Exercises into Your Routine\n\nTo experience the benefits of breathing exercises, consider the following:\n\nConsistency: Practice regularly, ideally daily, to build the habit.\n\nMindfulness: Combine breathing exercises with mindfulness techniques to stay present and fully engaged in the process.\n\nGuided Sessions: Many apps and online resources offer guided breathing exercises and meditation sessions to help you get started.\n\nIn conclusion, the power of breath is accessible to us all, and harnessing it through breathing exercises can be transformative for both physical and mental health. Whether you seek stress relief, enhanced focus, or better sleep, conscious breathing can be a simple yet effective tool to unlock your full potential and promote overall well-being. Start today, and breathe your way to a healthier, happier life",
      "imageUrl": "https://res.cloudinary.com/gyminy/image/upload/v1696724322/gyminy/images/hvqffcra37soonmupdlm.webp",
      "titleImageUrl": "https://res.cloudinary.com/gyminy/image/upload/v1696724393/gyminy/images/xxshdabf5jrqi9hcnlev.webp",
      "user": {
        "_id": "6521f19812f4ae0ecb3565c4",
        "name": "jessi7",
        "email": "jessi2@mail",
        "bio": "Certified Yoga, Breathing, and Aerobic Instructor. Inspiring mindful movement and heart-pounding workouts, one breath at a time. Join me on a journey to find balance, strength, and serenity through the power of yoga",
        "userType": 2,
        "sports": [
          "Aerobic",
          "Yoga",
          "Breathing Exercises"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
      },
      "userStuff": "6521f19812f4ae0ecb3565c4",
      "likes": [],
      "comments": [],
      "createdAt": "2023-10-08T00:19:55.904Z",
      "updatedAt": "2023-10-08T00:19:55.904Z"
    },
    {
      "_id": "6521f6d912f4ae0ecb3567c8",
      "title": "The Journey to Fat Loss: Understanding the Basics and Effective Strategies",
      "text": "In a world where health and fitness are highly valued, fat loss is a topic that often takes center stage. While many people embark on this journey for aesthetic reasons, the benefits of fat loss go far beyond appearance. In this article, we'll explore the fundamentals of fat loss, its significance for overall health, and effective strategies to achieve your goals.\n\nUnderstanding Body Fat\n\nBody fat, also known as adipose tissue, is an essential component of our physiology. It serves several critical functions, including insulation, energy storage, and the production of hormones. However, excessive body fat can lead to health issues such as heart disease, type 2 diabetes, and joint problems.\n\nThe Importance of Fat Loss\n\nFat loss, especially when combined with a healthy lifestyle, offers numerous benefits:\n\nImproved Health: Reducing excess body fat can lower the risk of chronic diseases and improve overall health markers.\n\nEnhanced Mobility: Carrying less weight can reduce strain on joints and improve mobility and flexibility.\n\nIncreased Energy: Shedding excess fat often results in increased energy levels and better daily functioning.\n\nEnhanced Self-Esteem: Achieving fat loss goals can boost self-confidence and mental well-being.\n\nEffective Fat Loss Strategies\n\nBalanced Diet: Nutrition plays a central role in fat loss. Focus on whole, nutrient-dense foods, and maintain a calorie deficit (burning more calories than you consume).\n\nRegular Exercise: Incorporate both cardiovascular exercise (such as running or cycling) and strength training into your routine to boost metabolism and preserve muscle mass.\n\nPortion Control: Be mindful of portion sizes to avoid overeating, and listen to your body's hunger cues.\n\nHydration: Drink plenty of water to support metabolism and reduce cravings.\n\nAdequate Sleep: Quality sleep is essential for weight management, as it influences hormones that regulate appetite.\n\nStress Management: High stress levels can lead to overeating. Practice stress reduction techniques like meditation or yoga.\n\nConsistency: Sustainable fat loss takes time. Be patient and stay consistent with your healthy habits.\n\nMyths and Realities of Fat Loss\n\nThere are many misconceptions about fat loss. Here are some key points to remember:\n\nSpot Reduction: You can't target fat loss from specific areas of your body. Fat is lost proportionally from all over.\n\nFad Diets: Extreme diets and quick fixes often lead to short-term results and are unsustainable in the long run.\n\nSustainable Changes: Effective fat loss is about making sustainable lifestyle changes, not quick fixes or deprivation.\n\nIndividual Variation: What works for one person may not work for another. It's important to find a fat loss approach that fits your unique needs and preferences.\n\nThe Journey to a Healthier You\n\nFat loss is not just about shedding pounds; it's about embracing a healthier, more vibrant lifestyle. Remember that progress may not always be linear, and setbacks are a natural part of the journey. Seek support from professionals or a supportive community if needed, and celebrate your achievements along the way. With determination, consistency, and a balanced approach, you can achieve your fat loss goals and enjoy the many benefits of a healthier, happier life",
      "imageUrl": "https://res.cloudinary.com/gyminy/image/upload/v1696724669/gyminy/images/wdru2mna7fzsaxuzvbc0.webp",
      "titleImageUrl": "https://res.cloudinary.com/gyminy/image/upload/v1696724677/gyminy/images/rdwcuwlbnjtistjmvake.jpg",
      "user": {
        "_id": "6521f19812f4ae0ecb3565c4",
        "name": "jessi7",
        "email": "jessi2@mail",
        "bio": "Certified Yoga, Breathing, and Aerobic Instructor. Inspiring mindful movement and heart-pounding workouts, one breath at a time. Join me on a journey to find balance, strength, and serenity through the power of yoga",
        "userType": 2,
        "sports": [
          "Aerobic",
          "Yoga",
          "Breathing Exercises"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
      },
      "userStuff": "6521f19812f4ae0ecb3565c4",
      "likes": [],
      "comments": [],
      "createdAt": "2023-10-08T00:24:57.316Z",
      "updatedAt": "2023-10-08T00:24:57.316Z"
    }
  ],
  "trainings": [
    {
      "_id": "6521fb1912f4ae0ecb356a87",
      "name": "Intro to Strength Training",
      "date": "2023-10-31",
      "time": "10:00",
      "description": "Unlock your inner strength and transform your body through the power of strength training",
      "limit": 4,
      "bookings": 1,
      "isFull": false,
      "sports": [
        "Strength and Conditioning"
      ],
      "students": [
        {
          "userId": "6521fa3812f4ae0ecb356960",
          "name": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
        }
      ],
      "user": {
        "_id": "6521d6c543465b099178c637",
        "name": "bryan234",
        "email": "bryan234@email.com",
        "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
        "userType": 2,
        "sports": [
          "Strength and Conditioning",
          "Yoga"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
      },
      "userStuff": "6521d6c543465b099178c637"
    },
    {
      "_id": "6521fb5a12f4ae0ecb356a96",
      "name": "Deadlift 101",
      "date": "2023-11-03",
      "time": "07:44",
      "description": "Proper Form Of Lifting",
      "limit": 4,
      "bookings": 1,
      "isFull": false,
      "sports": [
        "Powerlifting"
      ],
      "students": [
        {
          "userId": "6521fa3812f4ae0ecb356960",
          "name": "mike222",
          "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696725559/gyminy/profile-picture/trfxinvfyrycrkpmtydo.jpg"
        }
      ],
      "user": {
        "_id": "6521d6c543465b099178c637",
        "name": "bryan234",
        "email": "bryan234@email.com",
        "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
        "userType": 2,
        "sports": [
          "Strength and Conditioning",
          "Yoga"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
      },
      "userStuff": "6521d6c543465b099178c637"
    },
    {
      "_id": "6521fbd212f4ae0ecb356aa5",
      "name": "Weightlifting for advanced",
      "date": "2023-10-29",
      "time": "11:00",
      "description": "Elevate your fitness game with advanced weightlifting techniques, pushing your strength and physique to new heights",
      "limit": 2,
      "bookings": 0,
      "isFull": false,
      "sports": [
        "Strength and Conditioning",
        "Combat Sports",
        "Weightlifting"
      ],
      "students": [],
      "user": {
        "_id": "6521d6c543465b099178c637",
        "name": "bryan234",
        "email": "bryan234@email.com",
        "bio": "\"🏋️‍♂️💪 Passionate about Strength & Conditioning and Yoga 🧘‍♂️ | Athlete on a journey to unlock peak performance 🚀 | Balancing mind, body, and soul 🌟 | Join me in the pursuit of excellence! 💯 #StrengthAndYoga #PeakPerformance #",
        "userType": 2,
        "sports": [
          "Strength and Conditioning",
          "Yoga"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696716485/gyminy/profile-picture/nnyufja3uro3xljn53m5.webp"
      },
      "userStuff": "6521d6c543465b099178c637"
    },
    {
      "_id": "6521fc4012f4ae0ecb356ac8",
      "name": "How To Breath Properly",
      "date": "2023-11-26",
      "time": "09:00",
      "description": "Control your stress with correct breathing",
      "limit": 1,
      "bookings": 0,
      "isFull": false,
      "sports": [
        "Breathing Exercises"
      ],
      "students": [],
      "user": {
        "_id": "6521f19812f4ae0ecb3565c4",
        "name": "jessi7",
        "email": "jessi2@mail",
        "bio": "Certified Yoga, Breathing, and Aerobic Instructor. Inspiring mindful movement and heart-pounding workouts, one breath at a time. Join me on a journey to find balance, strength, and serenity through the power of yoga",
        "userType": 2,
        "sports": [
          "Aerobic",
          "Yoga",
          "Breathing Exercises"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
      },
      "userStuff": "6521f19812f4ae0ecb3565c4"
    },
    {
      "_id": "6521fc8e12f4ae0ecb356ad9",
      "name": "Zen Bliss Yoga Session",
      "date": "2023-12-09",
      "time": "06:00",
      "description": "Find inner peace and balance in our Zen Bliss Yoga Session. Join us for a journey of mindfulness and relaxation",
      "limit": 1,
      "bookings": 0,
      "isFull": false,
      "sports": [
        "Yoga"
      ],
      "students": [],
      "user": {
        "_id": "6521f19812f4ae0ecb3565c4",
        "name": "jessi7",
        "email": "jessi2@mail",
        "bio": "Certified Yoga, Breathing, and Aerobic Instructor. Inspiring mindful movement and heart-pounding workouts, one breath at a time. Join me on a journey to find balance, strength, and serenity through the power of yoga",
        "userType": 2,
        "sports": [
          "Aerobic",
          "Yoga",
          "Breathing Exercises"
        ],
        "profileImage": "https://res.cloudinary.com/gyminy/image/upload/v1696723350/gyminy/profile-picture/ligzkdjgshob08xxtgux.jpg"
      },
      "userStuff": "6521f19812f4ae0ecb3565c4"
    }
  ],
  "chats": []
}
