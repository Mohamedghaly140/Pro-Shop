import { ActionTypes } from '../actions/actions';
import { Product } from '../../models/Product';

interface ProductListAction {
	type: ActionTypes.PRODUCT_LIST_REQUEST;
}

interface ProductListSuccessAction {
	type: ActionTypes.PRODUCT_LIST_SUCCESS;
	payload: Product[];
}

interface ProductListErrorAction {
	type: ActionTypes.PRODUCT_LIST_FAIL;
	payload: string;
}

interface ProductDetailAction {
	type: ActionTypes.PRODUCT_DETAILS_REQUEST;
}

interface ProductDetailSuccessAction {
	type: ActionTypes.PRODUCT_DETAILS_SUCCESS;
	payload: Product;
}

interface ProductDetailErrorAction {
	type: ActionTypes.PRODUCT_DETAILS_FAIL;
	payload: string;
}

export type ProductsListAction =
	| ProductListAction
	| ProductListSuccessAction
	| ProductListErrorAction;

export type ProductDetailsAction =
	| ProductDetailAction
	| ProductDetailSuccessAction
	| ProductDetailErrorAction;
