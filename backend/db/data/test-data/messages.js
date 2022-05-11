module.exports = [
  {
    _id: "000000000001",
    users: [
      { userId: "000123400001", unread: 1 },
      { userId: "000000098002", unread: 1 },
    ],
    messages: [
      {
        userId: "000000000001",
        content_type: "text",
        content: "Hi",
        date: new Date(2022, 4, 1, 11, 12, 0),
        unread: false,
        _id: "030000000087",
      },
      {
        userId: "000000000002",
        content_type: "text",
        content: "Hi",
        date: new Date(2022, 4, 1, 11, 12, 5),
        unread: false,
        _id: "300000000087",
      },
      {
        userId: "000000000001",
        content_type: "text",
        content: "I can do the job for you",
        date: new Date(2022, 4, 1, 11, 12, 10),
        unread: false,
        _id: "100000000087",
      },
      {
        userId: "000000000002",
        content_type: "text",
        content: "Excellent, thanks",
        date: new Date(2022, 4, 1, 11, 12, 15),
        unread: true,
        _id: "000000012087",
      },
    ],
  },
  {
    _id: "000000000002",
    users: [
      { userId: "000000000001", unread: 1 },
      { userId: "000000000003", unread: 1 },
    ],
    messages: [
      {
        userId: "000000000003",
        content_type: "text",
        content: "Good morning",
        date: new Date(2022, 4, 1, 17, 15, 30),
        unread: true,
        _id: "000000002387",
      },
      {
        userId: "000000000001",
        content_type: "text",
        content: "Hey",
        date: new Date(2022, 4, 1, 17, 15, 35),
        unread: true,
        _id: "000000004587",
      },
      {
        userId: "000000000003",
        content_type: "text",
        content: "Are you free today?",
        date: new Date(2022, 4, 1, 17, 15, 40),
        unread: true,
        _id: "000000000987",
      },
    ],
  },
  {
    _id: "000000000003",
    users: [
      { userId: "000123400001", unread: 1 },
      { userId: "000000000003", unread: 1 },
    ],
    messages: [
      {
        userId: "000000000002",
        content_type: "text",
        content: "Are you there?",
        date: new Date(2022, 4, 2, 9, 9, 10),
        unread: true,
        _id: "000000100087",
      },
      {
        userId: "000000000003",
        content_type: "text",
        content: "Yes",
        date: new Date(2022, 4, 2, 9, 9, 15),
        unread: true,
        _id: "000000002087",
      },
      {
        userId: "000000000003",
        content_type: "text",
        content: "Can you help me?",
        date: new Date(2022, 4, 2, 9, 9, 20),
        unread: true,
        _id: "000000000387",
      },
    ],
  },
  {
    _id: "000000000004",
    users: [
      { userId: "000000000001", unread: 2 },
      { userId: "000000000004", unread: 1 },
    ],
    messages: [
      {
        userId: "000000000004",
        content_type: "text",
        content: "I can lend you a tool for the job",
        date: new Date(2022, 4, 2, 12, 19, 0),
        _id: "000000000097",
        unread: false,
      },
      {
        userId: "000000000001",
        content_type: "text",
        content: "Thanks, that is helpful",
        date: new Date(2022, 4, 2, 12, 19, 5),
        _id: "000000000099",
        unread: false,
      },
      {
        userId: "000000000004",
        content_type: "text",
        content: "Are you free this afternoon?",
        date: new Date(2022, 4, 2, 12, 19, 10),
        _id: "000000000087",
        unread: true,
      },
      {
        userId: "000000000001",
        content_type: "text",
        content: "Yes",
        date: new Date(2022, 4, 2, 12, 19, 15),
        _id: "000000000897",
        unread: true,
      },
      {
        userId: "000000000004",
        content_type: "text",
        content: "Ok, I will drop it round",
        date: new Date(2022, 4, 2, 12, 19, 20),
        _id: "000000000017",
        unread: true,
      },
    ],
  },
];
