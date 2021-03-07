import { combineReducers } from 'redux';
import productListReducer from './productList.reducer';
import productDetailsReducer from './productDetails.reducer';
import cartReducer from './cart.reducer';

const rootReducer = combineReducers({
	productList: productListReducer,
	productDetail: productDetailsReducer,
	cart: cartReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
