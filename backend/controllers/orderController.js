import asyncHandler from 'express-async-handler';
import Order from '../models/Order.js';

// @desc    Create new order
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

// @desc    Create new order
// @route   GET /api/orders/:id
// @access  Private
export const getOrderById = asyncHandler(async (req, res) => {
	const orderId = req.params.id;

	let order;
	try {
		order = await Order.findById(orderId).populate(
			'user',
			'name userName email'
		);

		if (!order) {
			res.status(404);
			throw new Error('order not found');
		}
	} catch (error) {
		res.status(500);
		throw new Error('Something went wrong, please try again later');
	}

	res.status(200).json({
		message: 'Order find successfuly',
		order: order,
	});
});
