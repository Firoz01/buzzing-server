import PostModel from '../Models/postModel.js';

export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json('Your post has been create successfully!');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await PostModel.findById(id);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
