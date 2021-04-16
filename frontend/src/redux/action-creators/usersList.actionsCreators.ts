import axios from 'axios';
import { Dispatch } from 'redux';
import { RootState } from '../reducers';
import { UserListActionTypes } from '../actions/user.actions';
import { UsersListAction } from '../action-types/user.actionTypes';
import { User } from '../../models/User';

export const getAllUsers = (userId: string) => {
	return async (
		dispatch: Dispatch<UsersListAction>,
		getState: () => RootState
	) => {
		dispatch({ type: UserListActionTypes.USER_LIST_REQUEST });

		const {
			userAuth: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo?.token}`,
			},
		};

		try {
			const { data } = await axios.get<{ message: string; users: User[] }>(
				`/api/users/admin/${userId}`,
				config
			);

			dispatch({
				type: UserListActionTypes.USER_LIST_SUCCESS,
				payload: data.users,
			});
		} catch (error) {
			dispatch({
				type: UserListActionTypes.USER_LIST_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
};
