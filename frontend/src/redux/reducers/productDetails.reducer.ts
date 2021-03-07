import { ProductActionTypes } from '../actions/product.actions';
import { ProductDetailsAction } from '../action-types/products.actionTypes';

import { Product } from '../../models/Product';

export interface ProductDetailState {
	loading: boolean;
	product: Product | null;
	error: string | null;
}

const initialState: ProductDetailState = {
	loading: false,
	product: null,
	error: null,
};

const productDetailsReducer = (
	state: ProductDetailState = initialState,
	action: ProductDetailsAction
): ProductDetailState => {
	switch (action.type) {
		case ProductActionTypes.PRODUCT_DETAILS_REQUEST:
			return { ...state, loading: true };
		case ProductActionTypes.PRODUCT_DETAILS_SUCCESS:
			return { ...state, loading: false, product: action.payload };
		case ProductActionTypes.PRODUCT_DETAILS_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default productDetailsReducer;
