import { UserActionTypes } from '../actions/user.actions';
import { User } from '../../models/User';

interface UserLoginAction {
	type: UserActionTypes.USER_LOGIN_REQUEST;
}

interface UserLoginSuccessAction {
	type: UserActionTypes.USER_LOGIN_SUCCESS;
	payload: User;
}

interface UserLoginErrorAction {
	type: UserActionTypes.USER_LOGIN_FAIL;
	payload: string;
}

interface UserLogoutAction {
	type: UserActionTypes.USER_LOGOT;
}

export type UserAction =
	| UserLoginAction
	| UserLoginSuccessAction
	| UserLoginErrorAction
	| UserLogoutAction;
