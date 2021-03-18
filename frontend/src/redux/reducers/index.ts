import { combineReducers } from 'redux';
import productListReducer from './productList.reducer';
import productDetailsReducer from './productDetails.reducer';
import userDetailsReducer from './userDetails.reducer';
import cartReducer from './cart.reducer';
import userAuthReducer from './user.reducer';

const rootReducer = combineReducers({
	productDetail: productDetailsReducer,
	productList: productListReducer,
	userDetails: userDetailsReducer,
	userAuth: userAuthReducer,
	cart: cartReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
