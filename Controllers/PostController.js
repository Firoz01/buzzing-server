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
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json('post updated successfully!');
    } else {
      res.status(401).json("You can't update in this post");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json('post delete successfully') ;
    } else {
      res.status(401).json("You can't delete in this post");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
