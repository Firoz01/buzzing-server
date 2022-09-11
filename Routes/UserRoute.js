import express from 'express';
import {
  deleteUser,
  following,
  getAlluser,
  getUser,
  unFollowing,
  updateUser
} from '../Controllers/UserControlller.js';

import upload from '../utils/multer.js';

const router = express.Router();
router.get('/', getAlluser);
router.get('/:id', getUser);
router.put(
  '/:id',
  upload.any(),
  updateUser
);
router.delete('/:id', deleteUser);
router.put('/:id/follow', following);
router.put('/:id/unfollow', unFollowing);

export default router;
