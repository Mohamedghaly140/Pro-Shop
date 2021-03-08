import { Router } from 'express';
import auth from '../middleware/auth.js';

const router = Router();

import {
	getProducts,
	getProductById,
} from '../controllers/productController.js';

router.get('/', getProducts);

router.get('/:id', getProductById);

export default router;
