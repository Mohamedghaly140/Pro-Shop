import { Router } from 'express';
import auth, { admin } from '../middleware/auth.js';

const router = Router();

import {
	login,
	signup,
	getAllUsers,
	getUserProfile,
	deleteUserById,
	updateUserProfile,
} from '../controllers/userController.js';

router.post('/login', login);

router.post('/signup', signup);

router.get('/profile', auth, getUserProfile);

router.put('/profile', auth, updateUserProfile);

router.get('/admin/:id', auth, admin, getAllUsers);
router.delete('/admin/:id', auth, admin, deleteUserById);

export default router;
