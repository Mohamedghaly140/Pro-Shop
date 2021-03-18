import { UserActionTypes } from '../actions/userDetails.action';
import { UserAction } from '../action-types/userDetails.actionTypes';

import { User } from '../../models/User';

export interface UserState {
	loading: boolean;
	user: User | null;
	error: string | null;
}

const initialState: UserState = {
	loading: false,
	user: null,
	error: null,
};

const userReducer = (
	state: UserState = initialState,
	action: UserAction
): UserState => {
	switch (action.type) {
		case UserActionTypes.USER_DETAILS_REQUEST:
			return { ...state, loading: true };
		case UserActionTypes.USER_DETAILS_SUCCESS:
			return { ...state, loading: false, user: action.payload };
		case UserActionTypes.USER_DETAILS_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default userReducer;
