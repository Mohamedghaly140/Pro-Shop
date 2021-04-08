import { OrderActionTypes } from '../actions/order.actions';
import { Order } from '../../models/Order';

interface OrderCreateAction {
	type: OrderActionTypes.OREDER_CREATE_REQUEST;
}

interface OrderCreateSuccessAction {
	type: OrderActionTypes.OREDER_CREATE_SUCCESS;
	payload: Order;
}

interface OrderCreateErrorAction {
	type: OrderActionTypes.OREDER_CREATE_FAIL;
	payload: string;
}

interface OrderDetailsAction {
	type: OrderActionTypes.OREDER_DETAILS_REQUEST;
}

interface OrderDetailsSuccessAction {
	type: OrderActionTypes.OREDER_DETAILS_SUCCESS;
	payload: Order;
}

interface OrderDetailsErrorAction {
	type: OrderActionTypes.OREDER_DETAILS_FAIL;
	payload: string;
}

export type OrderAction =
	| OrderCreateAction
	| OrderCreateSuccessAction
	| OrderCreateErrorAction
	| OrderDetailsAction
	| OrderDetailsSuccessAction
	| OrderDetailsErrorAction;
