import axios from 'axios';
import { Dispatch } from 'redux';
import { ProductActionTypes } from '../actions/product.actions';
import {
	ProductsListAction,
	ProductDetailsAction,
} from '../action-types/products.actionTypes';
import { Product } from '../../models/Product';

export const getAllProducts = () => {
	return async (dispatch: Dispatch<ProductsListAction>) => {
		dispatch({ type: ProductActionTypes.PRODUCT_LIST_REQUEST });

		try {
			const { data } = await axios.get<Product[]>('/api/products');

			dispatch({
				type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: ProductActionTypes.PRODUCT_LIST_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
};

export const getSingleProduct = (id: string) => {
	return async (dispatch: Dispatch<ProductDetailsAction>) => {
		dispatch({ type: ProductActionTypes.PRODUCT_DETAILS_REQUEST });

		try {
			const { data } = await axios.get<Product>(`/api/products/${id}`);

			dispatch({
				type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: ProductActionTypes.PRODUCT_DETAILS_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
};
