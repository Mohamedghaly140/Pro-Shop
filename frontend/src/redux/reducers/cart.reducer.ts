import { CartActionTypes } from '../actions/cart.actions';
import { CartAction } from '../action-types/cart.actionTypes';

import { CartItem } from '../../models/CartItem';
import { ShippingAddress } from '../../models/ShippingAddress';

export interface CartState {
	cartItems: CartItem[];
	shippingAddress: ShippingAddress;
}

const initialState: CartState = {
	cartItems: [],
	shippingAddress: {
		postalCode: '',
		address: '',
		country: '',
		city: '',
	},
};

const cartReducer = (
	state: CartState = initialState,
	action: CartAction
): CartState => {
	switch (action.type) {
		case CartActionTypes.ADD_CART_ITEM:
			const carItem: CartItem = action.payload;

			const existCarItem = state.cartItems.find(
				item => item.product === carItem.product
			);

			if (existCarItem) {
				return {
					...state,
					cartItems: state.cartItems.map(item =>
						item.product === existCarItem.product ? carItem : item
					),
				};
			} else {
				return { ...state, cartItems: [...state.cartItems, carItem] };
			}
		case CartActionTypes.REMOVE_CART_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					item => item.product !== action.payload
				),
			};
		case CartActionTypes.CART_SAVE_SHIPPING_ADDRESS:
			return {
				...state,
				shippingAddress: action.payload,
			};
		default:
			return state;
	}
};

export default cartReducer;
