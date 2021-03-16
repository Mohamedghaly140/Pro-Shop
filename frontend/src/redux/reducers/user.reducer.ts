import { UserActionTypes } from '../actions/user.actions';
import { UserAction } from '../action-types/user.actionTypes';

import { Product } from '../../models/Product';
import { User } from '../../models/User';

export interface UserState {
	loading: boolean;
	userInfo: User | null;
	error: string | null;
}

const initialState: UserState = {
	loading: false,
	userInfo: null,
	error: null,
};

const userReducer = (
	state: UserState = initialState,
	action: UserAction
): UserState => {
	switch (action.type) {
		case UserActionTypes.USER_LOGIN_REQUEST:
			return { ...state, loading: true };
		case UserActionTypes.USER_LOGIN_SUCCESS:
			return { ...state, loading: false, userInfo: action.payload };
		case UserActionTypes.USER_LOGIN_FAIL:
			return { ...state, loading: false, error: action.payload };
		case UserActionTypes.USER_LOGOT:
			return { loading: false, userInfo: null, error: null };
		default:
			return state;
	}
};

export default userReducer;
