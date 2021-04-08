import { OrderActionTypes } from '../actions/order.actions';
import { OrderAction } from '../action-types/order.actionTypes';

import { Order } from '../../models/Order';

export interface OrderCreateState {
	loading: boolean;
	success: boolean;
	order: Order | null;
	error: string | null;
}

export interface OrderDetailState {
	loading: boolean;
	order: Order | null;
	error: string | null;
}

const initialState: OrderCreateState = {
	loading: false,
	success: false,
	order: null,
	error: null,
};

const orderCreateReducer = (
	state: OrderCreateState = initialState,
	action: OrderAction
): OrderCreateState => {
	switch (action.type) {
		case OrderActionTypes.OREDER_CREATE_REQUEST:
		case OrderActionTypes.OREDER_DETAILS_REQUEST:
			return { ...state, loading: true, success: false, order: null };
		case OrderActionTypes.OREDER_CREATE_SUCCESS:
			return { ...state, loading: false, success: true, order: action.payload };
		case OrderActionTypes.OREDER_DETAILS_SUCCESS:
			return { ...state, loading: false, order: action.payload };
		case OrderActionTypes.OREDER_CREATE_FAIL:
		case OrderActionTypes.OREDER_DETAILS_FAIL:
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

export const orderDetailReducer = (
	state: OrderDetailState = { loading: false, order: null, error: null },
	action: OrderAction
): OrderDetailState => {
	switch (action.type) {
		case OrderActionTypes.OREDER_DETAILS_REQUEST:
			return { ...state, loading: true, order: null };
		case OrderActionTypes.OREDER_DETAILS_SUCCESS:
			return { ...state, loading: false, order: action.payload };
		case OrderActionTypes.OREDER_DETAILS_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default orderCreateReducer;
