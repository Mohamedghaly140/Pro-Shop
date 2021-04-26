import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find();
	res.json(products.map(p => p.toObject({ getters: true })));
});

// @desc    Fetch single product
// @route   GET /api/product/:id
// @access  Public
export const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});

// @desc    Delete product
// @route   DELETE /api/product/:id
// @access  Private/Admin
export const deleteProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		await product.remove();
		res.json({ message: 'Product Deleted Succesfuly', product });
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});
