import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "user",
    lastName: "test",
    email: "test@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "pimg11.jpg",
    friends: [],
    location: "Brasov, BV",
    occupation: "Student",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Elise",
    lastName: "Boyer",
    email: "eliseboyer@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "pimg3.jpg",
    friends: [],
    location: "Barlad, VS",
    occupation: "Social Worker",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Fynn",
    lastName: "Kent",
    email: "fynnkent@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "pimg4.jpg",
    friends: [],
    location: "Bucharest, B",
    occupation: "Construction Worker",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "pimg6.jpg",
    friends: [],
    location: "Cluj-Napoca, CJ",
    occupation: "High School Teacher",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "pimg5.jpg",
    friends: [],
    location: "Craiova, DJ",
    occupation: "Tech Guru",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Elysia",
    lastName: "Lynn",
    email: "elysialynn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "pimg7.jpg",
    friends: [],
    location: "Bacau, BC",
    occupation: "Journalist",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Maria",
    lastName: "Apostol",
    email: "mariaapostol@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "pimg8.jpg",
    friends: [],
    location: "Piatra Neamt, NT",
    occupation: "Nurse",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Alexandru",
    lastName: "Popescu",
    email: "alexandrupopescu@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "pimg9.jpg",
    friends: [],
    location: "Targoviste, DB",
    occupation: "Writer",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Elise",
    lastName: "Boyer",
    location: "Barlad, VS",
    description: "Today's meal was very tasty!",
    picturePath: "post1.jpg",
    userPicturePath: "pimg3.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "Wow!",
      "It looks amazing!",
      "Please, share the recipe with me!",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "John",
    lastName: "Doe",
    location: "Cluj-Napoca, CJ",
    description:
      "I just took this photo last night. My photography skills are getting better!",
    picturePath: "post2.jpg",
    userPicturePath: "pimg6.jpg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "They sure are!",
      "I'll use your photo as a wallpaper.",
      "Amazing!!",
      "Where was this photo taken?",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    location: "Craiova, DJ",
    description:
      "This is a really long random description. This one is longer than the previous one.",
    picturePath: "post3.jpg",
    userPicturePath: "pimg5.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "Ut enim ad minim veniam!",
      "Quis nostrud exercitation.",
      "Ullamco laboris nisi ut aliquip?",
      "Ex ea commodo consequat.",
      "Something, something.",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Elysia",
    lastName: "Lynn",
    location: "Bacau, BC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    picturePath: "post4.jpg",
    userPicturePath: "pimg7.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "A random comment",
      "Duis aute irure.",
      "Dolor in reprehenderit in voluptate...",
      "Velit esse!",
      "Cillum dolore eu fugiat??",
      "Nulla pariatur.",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Maria",
    lastName: "Apostol",
    location: "Piatra Neamt, NT",
    description:
      "A really short description. It's very short, beautiful, and amazing!",
    picturePath: "post5.jpg",
    userPicturePath: "pimg8.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "Excepteur sint.",
      "Occaecat cupidatat non proident?",
      "Sunt in culpa qui officia!",
      "Deserunt mollit anim id est laborum.",
      "I'm going to take a break...",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Alexandru",
    lastName: "Popescu",
    location: "Targoviste, DB",
    description: "Hi! I hope you had a good day at work!",
    picturePath: "post6.jpg",
    userPicturePath: "pimg9.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "Woooooooooooooow!",
      "It's amazing!!!",
      "Never seen something like this before!",
      "Amazing!",
      "I like typing comments!",
    ],
  },
];
