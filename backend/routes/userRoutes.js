import { Router } from 'express';
import auth, { admin } from '../middleware/auth.js';

const router = Router();

import {
	login,
	signup,
	getAllUsers,
	getUserProfile,
	updateUserProfile,
} from '../controllers/userController.js';

router.post('/login', login);

router.post('/signup', signup);

router.get('/:id', auth, admin, getAllUsers);

router.get('/profile', auth, getUserProfile);

router.put('/profile', auth, updateUserProfile);

export default router;
