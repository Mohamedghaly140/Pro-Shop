import { ProductActionTypes } from '../actions/product.actions';
import { Product } from '../../models/Product';

interface ProductListAction {
	type: ProductActionTypes.PRODUCT_LIST_REQUEST;
}

interface ProductListSuccessAction {
	type: ProductActionTypes.PRODUCT_LIST_SUCCESS;
	payload: Product[];
}

interface ProductListErrorAction {
	type: ProductActionTypes.PRODUCT_LIST_FAIL;
	payload: string;
}

interface ProductDetailAction {
	type: ProductActionTypes.PRODUCT_DETAILS_REQUEST;
}

interface ProductDetailSuccessAction {
	type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS;
	payload: Product;
}

interface ProductDetailErrorAction {
	type: ProductActionTypes.PRODUCT_DETAILS_FAIL;
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
