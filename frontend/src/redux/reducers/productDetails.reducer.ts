import { ActionTypes } from '../actions/actions';
import { ProductDetailsAction } from '../action-types/action-types';

import { Product } from '../../models/Product';

interface ProductState {
	loading: boolean;
	product: Product | null;
	error: string | null;
}

const initialState: ProductState = {
	loading: false,
	product: null,
	error: null,
};

const productListReducer = (
	state: ProductState = initialState,
	action: ProductDetailsAction
): ProductState => {
	switch (action.type) {
		case ActionTypes.PRODUCT_DETAILS_REQUEST:
			return { ...state, loading: true };
		case ActionTypes.PRODUCT_DETAILS_SUCCESS:
			return { ...state, loading: false, product: action.payload };
		case ActionTypes.PRODUCT_DETAILS_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default productListReducer;
