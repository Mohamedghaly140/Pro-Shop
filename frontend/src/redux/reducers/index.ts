import { combineReducers } from 'redux';
import productListReducer from './productList.reducer';
import productDetailsReducer from './productDetails.reducer';
import userUpdateProfileReducer from './userUpdateProfile.reducer';
import userDetailsReducer from './userDetails.reducer';
import cartReducer from './cart.reducer';
import userAuthReducer from './user.reducer';

const rootReducer = combineReducers({
	productDetail: productDetailsReducer,
	productList: productListReducer,
	userAuth: userAuthReducer,
	userDetails: userDetailsReducer,
	userUpdate: userUpdateProfileReducer,
	cart: cartReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
