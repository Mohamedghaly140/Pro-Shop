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

export type OrderAction =
	| OrderCreateAction
	| OrderCreateSuccessAction
	| OrderCreateErrorAction;
