import express from 'express';
// eslint-disable-next-line import/extensions
import { loginUser, registerUser } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
