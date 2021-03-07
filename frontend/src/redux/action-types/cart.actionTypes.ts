import { CartActionTypes } from '../actions/cart.actions';

import { CartItem } from '../../models/CartItem';

interface CarAddItem {
	type: CartActionTypes.ADD_CART_ITEM;
	payload: CartItem;
}

export type CartAction = CarAddItem;
