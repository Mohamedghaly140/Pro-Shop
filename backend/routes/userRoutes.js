import { Router } from 'express';
import auth from '../middleware/auth.js';

const router = Router();

import {
	login,
	signup,
	getUserProfile,
	updateUserProfile,
} from '../controllers/userController.js';

router.post('/login', login);

router.post('/signup', signup);

router.get('/profile', auth, getUserProfile);

router.put('/profile', auth, updateUserProfile);

export default router;
