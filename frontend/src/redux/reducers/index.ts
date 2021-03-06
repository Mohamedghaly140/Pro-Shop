import { combineReducers } from 'redux';
import productListReducer from './productList.reducer';
import productDetailsReducer from './productDetails.reducer';

const rootReducer = combineReducers({
	productList: productListReducer,
	productDetail: productDetailsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
