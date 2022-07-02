import express from 'express';
import {
  createPost,
  deletePost,
  getPost,
  likeUnlikePost,
  updatePost
} from '../Controllers/PostController.js';
const router = express.Router();

router.post('/create', createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/:id/like', likeUnlikePost);

export default router;
