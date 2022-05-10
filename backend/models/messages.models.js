const Messages = require("../schemas/messages.schema");
const Jobs = require("../schemas/jobs.schema.js");
const User = require("../schemas/users.schema.js");
exports.postMessage = async (MsgObj) => {
  const { users } = MsgObj;
  for (let i = 0; i < users.length; i++) {
    const user = await User.findById(users[i].userId);
    if (!user) return Promise.reject(errors.errMsg_idNotFound);
  }
  const res = await Messages.create({
    users: [
      { userId: users[0].userId, unread: users[0].unread },
      { userId: users[1].userId, unread: users[1].unread },
    ],
    messages: [],
  });
  console.log(res);
  return res;
};

exports.putMessage = async (ids, body) => {
  const { message_id, content_id } = ids;

  const message = await Messages.findById(message_id);

  for (let i = 0; i < message.messages.length; i++) {
    if (message.messages[i]._id.equals(content_id)) {
      message.messages[i].content = body.content;
    }
  }

  message.save();
  return message;
};

exports.deleteMessage = async (ids) => {
  const { message_id, content_id } = ids;
  const message = await Messages.findById(message_id);
  console.log(message, "first");

  if (!message) return Promise.reject(errors.errMsg_idNotFound);
  for (let i = 0; i < message.messages.length; i++) {
    if (message.messages[i]._id.equals(content_id)) {
      message.messages[i].splice(i, 1);
    }
  }
  console.log(message, "last");
  message.save();
  return message;
};
exports.getMessage = async ({ message_id }) => {
  const message = await Messages.findById(message_id);
  if (!message) return Promise.reject(errors.errMsg_idNotFound);

  return message.populate({
    path: "users.userId",
    select: "username fullName",
  });
};

exports.postContent = async (message_id, body) => {
  const message = await Messages.findById(message_id);

  const content = {
    userId: body.userId,
    content_type: body.content_type,
    content: body.content,
    unread: true,
  };
  message.messages.push(content);
  let unread = 0;
  for (let i = 0; i < message.messages.length; i++) {
    if (
      message.messages[i].userId.equals(body.userId) &&
      message.messages[i].unread === true
    ) {
      unread++;
    }
  }
  for (let i = 0; i < message.users.length; i++) {
    if (message.users[i].userId.equals(body.userId)) {
      message.users[i].unread = unread;
    }
  }
  console.log(message);
  message.save();

  return message.populate({
    path: "users.userId",
    select: "username fullName",
  });
};

exports.getUserContent = async (ids) => {
  console.log(ids);
  const { message_id, user_id } = ids;
  const message = await Messages.findById(message_id);
  for (let i = 0; i < message.messages.length; i++) {
    if (message.messages[i].userId.equals(user_id)) {
      message.messages[i].unread = false;
    }
  }
  for (let i = 0; i < message.users.length; i++) {
    if (message.users[i].userId.equals(user_id)) {
      message.users[i].unread = 0;
    }
  }

  console.log(message);
  message.save();
  return message.populate({
    path: "users.userId",
    select: "username fullName",
  });
};
