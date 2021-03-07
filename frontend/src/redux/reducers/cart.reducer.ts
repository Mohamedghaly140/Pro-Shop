import { CartActionTypes } from '../actions/cart.actions';
import { CartAction } from '../action-types/cart.actionTypes';

import { CartItem } from '../../models/CartItem';

export interface CartState {
	cartItems: CartItem[];
}

const initialState: CartState = {
	cartItems: [],
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

		// case ProductActionTypes.PRODUCT_LIST_SUCCESS:
		// 	return { ...state, loading: false, products: action.payload };
		default:
			return state;
	}
};

export default cartReducer;
