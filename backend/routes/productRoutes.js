import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

const router = Router();

// @desc    Fetch all products
// @route   Get /api/products
// @access  Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find();

		res.json(products);
	})
);

// @desc    Fetch single product
// @route   Get /api/product/:id
// @access  Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);

		if (product) {
			res.json(product);
		} else {
			res.status(404);
			throw new Error('Product not found');
		}
	})
);

export default router;
