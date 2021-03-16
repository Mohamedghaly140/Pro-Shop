import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// State Interfaces
import { ProductDetailState } from './reducers/productDetails.reducer';
import { ProductListState } from './reducers/productList.reducer';
import { CartState } from './reducers/cart.reducer';
import { UserState } from './reducers/user.reducer';

interface State {
	productList: ProductListState;
	productDetail: ProductDetailState;
	cart: CartState;
	userAuth: UserState;
}

const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems')!)
	: [];

const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo')!)
	: null;

const initialState: State = {
	productList: {
		products: [],
		loading: false,
		error: null,
	},
	productDetail: {
		product: null,
		loading: false,
		error: null,
	},
	cart: {
		cartItems: cartItemsFromStorage,
	},
	userAuth: {
		userInfo: userInfoFromStorage,
		loading: false,
		error: null,
	},
};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
