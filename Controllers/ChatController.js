import ChatModel from '../Models/chatModel.js';
import catchAsync from '../utils/catchAsync';

export const createChat = catchAsync(async (req, res) => {
  const newChat = new ChatModel({
    members: [req.body.senderId, req.body.receiverId]
  });

  const result = await newChat.save();
  res.status(200).json(result);
});
