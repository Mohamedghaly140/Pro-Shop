import { UserListActionTypes } from '../actions/user.actions';
import { UsersListAction } from '../action-types/user.actionTypes';

import { User } from '../../models/User';

export interface UserListState {
	loading: boolean;
	users: User[];
	error: string | null;
}

const initialState: UserListState = {
	loading: false,
	users: [],
	error: null,
};

const usersListReducer = (
	state: UserListState = initialState,
	action: UsersListAction
): UserListState => {
	switch (action.type) {
		case UserListActionTypes.USER_LIST_REQUEST:
			return { ...state, loading: true };
		case UserListActionTypes.USER_LIST_SUCCESS:
			return { ...state, loading: false, users: action.payload };
		case UserListActionTypes.USER_LIST_FAIL:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

export default usersListReducer;
