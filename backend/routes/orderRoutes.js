import { Router } from 'express';
import auth from '../middleware/auth.js';

const router = Router();

import { addOrderItems } from '../controllers/orderController';

router.post('/', auth, addOrderItems);

// router.get('/:id', auth, getOrderById);

export default router;
