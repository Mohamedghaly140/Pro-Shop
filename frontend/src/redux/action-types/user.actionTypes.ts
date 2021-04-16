import { UserActionTypes, UserListActionTypes } from '../actions/user.actions';
import { User } from '../../models/User';

interface UserLoginAction {
	type: UserActionTypes.USER_AUTH_REQUEST;
}

interface UserLoginSuccessAction {
	type: UserActionTypes.USER_LOGIN_SUCCESS;
	payload: User;
}

interface UserRegisterSuccessAction {
	type: UserActionTypes.USER_REGISTER_SUCCESS;
	payload: User;
}

interface UserLoginErrorAction {
	type: UserActionTypes.USER_AUTH_FAIL;
	payload: string;
}

interface UserLogoutAction {
	type: UserActionTypes.USER_LOGOT;
}

export type UserAction =
	| UserRegisterSuccessAction
	| UserLoginAction
	| UserLoginSuccessAction
	| UserLoginErrorAction
	| UserLogoutAction;

// User List Actions
interface UserListRequestAction {
	type: UserListActionTypes.USER_LIST_REQUEST;
}

interface UserListSuccessAction {
	type: UserListActionTypes.USER_LIST_SUCCESS;
	payload: User[];
}

interface UserListErrorAction {
	type: UserListActionTypes.USER_LIST_FAIL;
	payload: string;
}

export type UsersListAction =
	| UserListRequestAction
	| UserListSuccessAction
	| UserListErrorAction;
