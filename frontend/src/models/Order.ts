import { CartItem } from './CartItem';

interface OrderItem {
	name: string;
	qty: number;
	image: string;
	price: string;
	product: string;
}

export interface ShippingAddress {
	address: string;
	city: string;
	postalCode: string;
	country: string;
}

export interface PaymentResult {
	id: string;
	status: string;
	update_time: string;
	email_address: string;
}

export interface Order {
	_id: string;
	user: string;
	orderItems: CartItem[];
	shippingAddress: ShippingAddress;
	paymentMethod: string;
	paymentResult: PaymentResult;
	taxPrice: number;
	shippingPrice: number;
	totalPrice: number;
	itemsPrice: number;
	isPaid: boolean;
	isDelivered: boolean;
	paidAt: Date;
	deliveredAt: Date;
}
