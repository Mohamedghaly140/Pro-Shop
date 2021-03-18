import { UserActionTypes } from '../actions/userDetails.action';
import { User } from '../../models/User';

interface UserDetailsAction {
	type: UserActionTypes.USER_DETAILS_REQUEST;
}

interface UserDetailsSuccessAction {
	type: UserActionTypes.USER_DETAILS_SUCCESS;
	payload: User;
}

interface UserDetailsErrorAction {
	type: UserActionTypes.USER_DETAILS_FAIL;
	payload: string;
}

export type UserAction =
	| UserDetailsAction
	| UserDetailsSuccessAction
	| UserDetailsErrorAction;
