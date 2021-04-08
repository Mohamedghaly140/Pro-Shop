import { Router } from 'express';
import auth from '../middleware/auth.js';

const router = Router();

import { addOrderItems, getOrderById } from '../controllers/orderController.js';

router.post('/', auth, addOrderItems);

router.get('/:id', auth, getOrderById);

export default router;
