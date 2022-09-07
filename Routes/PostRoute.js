import express from 'express';
import {
  createPost,
  deletePost,
  getPost,
  getTimelinePosts,
  likeUnlikePost,
  updatePost
} from '../Controllers/PostController.js';
import upload from '../utils/multer.js';
const router = express.Router();

router.post('/', upload.single('image'), createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/:id/like', likeUnlikePost);
router.get('/:id/timeline', getTimelinePosts);

export default router;
