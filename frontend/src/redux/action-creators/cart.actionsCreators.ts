import axios from 'axios';
import { Dispatch } from 'redux';
import { CartAction } from '../action-types/cart.actionTypes';
import { CartActionTypes } from '../actions/cart.actions';
import { RootState } from '../reducers';

import { CartItem } from '../../models/CartItem';
import { Product } from '../../models/Product';

export const addToCart = (id: string, qty: number) => {
	return async (dispatch: Dispatch<CartAction>, getState: () => RootState) => {
		const { data } = await axios.get<Product>(`/api/products/${id}`);

		const cartItem: CartItem = {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty,
		};

		dispatch({
			type: CartActionTypes.ADD_CART_ITEM,
			payload: cartItem,
		});

		localStorage.setItem(
			'cartItems',
			JSON.stringify(getState().cart.cartItems)
		);
	};
};

export const removeFromCart = (id: string) => {
	return async (dispatch: Dispatch<CartAction>, getState: () => RootState) => {
		dispatch({
			type: CartActionTypes.REMOVE_CART_ITEM,
			payload: id,
		});

		localStorage.setItem(
			'cartItems',
			JSON.stringify(getState().cart.cartItems)
		);
	};
};
