import { ActionTypes } from '../actions/actions';
import { ProductsListAction } from '../action-types/action-types';

import { Product } from '../../models/Product';

interface ProductState {
	loading: boolean;
	products: Product[];
	error: string | null;
}

const initialState: ProductState = {
	loading: false,
	products: [],
	error: null,
};

const productListReducer = (
	state: ProductState = initialState,
	action: ProductsListAction
): ProductState => {
	switch (action.type) {
		case ActionTypes.PRODUCT_LIST_REQUEST:
			return { ...state, loading: true, products: [] };
		case ActionTypes.PRODUCT_LIST_SUCCESS:
			return { ...state, loading: false, products: action.payload };
		case ActionTypes.PRODUCT_LIST_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default productListReducer;
