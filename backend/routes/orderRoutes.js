import { Router } from 'express';
import auth from '../middleware/auth.js';

const router = Router();

import {
	addOrderItems,
	getOrderById,
	updateOrderToPay,
} from '../controllers/orderController.js';

router.post('/', auth, addOrderItems);

router.get('/:id', auth, getOrderById);

router.get('/:id/pay', auth, updateOrderToPay);

export default router;
