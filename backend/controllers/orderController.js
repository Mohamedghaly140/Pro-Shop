import asyncHandler from 'express-async-handler';
import Order from '../models/Order.js';

// @desc    Fetch all products
// @route   POST /api/orders
// @access  Private
export const addOrderItems = asyncHandler(async (req, res) => {
	const {
		orderItems,
		shippingAddress,
		paymentMethod,
		itemsPrice,
		taxPrice,
		shippingPrice,
		totalPrice,
		userId,
	} = req.body;

	if (userId !== req.userData.userId) {
		res.status(400);
		throw new Error(
			'No authorization, Place Order Failed, Please try again later'
		);
	}

	if (orderItems && orderItems.length === 0) {
		res.status(400);
		throw new Error('No order items');
	} else {
		const order = new Order({
			orderItems,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			taxPrice,
			shippingPrice,
			totalPrice,
			user: userId,
		});

		let createdOrder;

		try {
			createdOrder = await order.save();
		} catch (error) {
			res.status(500);
			throw new Error('Something went wrong, please try again later');
		}

		res.status(201).json({
			message: 'Order placed successfuly',
			order: createdOrder,
		});
	}
});
