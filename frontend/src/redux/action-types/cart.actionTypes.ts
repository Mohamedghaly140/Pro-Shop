import { CartActionTypes } from '../actions/cart.actions';

import { CartItem } from '../../models/CartItem';

interface CarAddItem {
	type: CartActionTypes.ADD_CART_ITEM;
	payload: CartItem;
}

interface CarRemoveItem {
	type: CartActionTypes.REMOVE_CART_ITEM;
	payload: string;
}

export type CartAction = CarAddItem | CarRemoveItem;
