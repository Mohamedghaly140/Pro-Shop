import { combineReducers } from 'redux';
import productListReducer from './productList.reducer';
import productDetailsReducer from './productDetails.reducer';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
	productDetail: productDetailsReducer,
	productList: productListReducer,
	userLogin: userReducer,
	cart: cartReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
