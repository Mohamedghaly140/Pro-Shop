import { Router } from 'express';
import auth, { admin } from '../middleware/auth.js';

const router = Router();

import {
	getProducts,
	getProductById,
	deleteProductById,
} from '../controllers/productController.js';

router.get('/', getProducts);

router.get('/:id', getProductById);

router.delete('/:id', auth, admin, deleteProductById);

export default router;
