import ChatModel from '../Models/chatModel.js';
import catchAsync from '../utils/catchAsync';

export const createChat = catchAsync(async (req, res) => {
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId]
  });

  const result = await newChat.save();
  res.status(200).json(result);
});

export const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] }
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};
