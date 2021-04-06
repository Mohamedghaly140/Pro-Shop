import { OrderActionTypes } from '../actions/order.actions';
import { OrderAction } from '../action-types/order.actionTypes';

import { Order } from '../../models/Order';

export interface OrderState {
	loading: boolean;
	success: boolean;
	order: Order | null;
	error: string | null;
}

const initialState: OrderState = {
	loading: false,
	success: false,
	order: null,
	error: null,
};

const orderReducer = (
	state: OrderState = initialState,
	action: OrderAction
): OrderState => {
	switch (action.type) {
		case OrderActionTypes.OREDER_CREATE_REQUEST:
			return { ...state, loading: true, success: false, order: null };
		case OrderActionTypes.OREDER_CREATE_SUCCESS:
			return { ...state, loading: false, success: true, order: action.payload };
		case OrderActionTypes.OREDER_CREATE_FAIL:
			return {
				...state,
				loading: false,
				success: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default orderReducer;
