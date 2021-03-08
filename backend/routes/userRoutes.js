import { Router } from 'express';
import auth from '../middleware/auth.js';

const router = Router();

import {
	login,
	signup,
	getUserProfile,
} from '../controllers/userController.js';

router.post('/login', login);

router.post('/signup', signup);

router.get('/profile', auth, getUserProfile);

export default router;
