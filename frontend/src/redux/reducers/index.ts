import { combineReducers } from 'redux';
import productListReducer from './productList.reducer';
import productDetailsReducer from './productDetails.reducer';
import userUpdateProfileReducer from './userUpdateProfile.reducer';
import userDetailsReducer from './userDetails.reducer';
import cartReducer from './cart.reducer';
import userAuthReducer from './user.reducer';
import orderReducer, { orderDetailReducer } from './order.reducer';

const rootReducer = combineReducers({
	productDetail: productDetailsReducer,
	userUpdate: userUpdateProfileReducer,
	productList: productListReducer,
	userDetails: userDetailsReducer,
	userAuth: userAuthReducer,
	order: orderReducer,
	cart: cartReducer,
	orderDetail: orderDetailReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
