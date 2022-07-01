/* eslint-disable import/extensions */
import express from 'express';
import { getUser } from '../Controllers/UserControlller.js';

const router = express.Router();

router.get('/:id', getUser);

export default router;
