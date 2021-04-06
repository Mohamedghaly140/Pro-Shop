import axios from 'axios';
import { Dispatch } from 'redux';
import { OrderActionTypes } from '../actions/order.actions';
import { OrderAction } from '../action-types/order.actionTypes';
import { Order, ShippingAddress } from '../../models/Order';
import { RootState } from '../reducers';
import { CartItem } from '../../models/CartItem';

export const createOrder = (orderData: {
	orderItems: CartItem[];
	shippingAddress: ShippingAddress;
	paymentMethod: string;
	taxPrice: number;
	shippingPrice: number;
	totalPrice: number;
	itemsPrice: number;
}) => {
	return async (dispatch: Dispatch<OrderAction>, getState: () => RootState) => {
		dispatch({ type: OrderActionTypes.OREDER_CREATE_REQUEST });

		const {
			userAuth: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo?.token}`,
			},
		};

		try {
			const { data } = await axios.post<Order>(
				'/api/orders',
				{ userId: userInfo?.userId, ...orderData },
				config
			);

			dispatch({
				type: OrderActionTypes.OREDER_CREATE_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: OrderActionTypes.OREDER_CREATE_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
};
