import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActionTypes } from '../actions/user.actions';
import { UserProfileActionTypes } from '../actions/userUpdate.action';
import { UserProfileAction } from '../action-types/userUpdate.actionTypes';
import { UserAction } from '../action-types/user.actionTypes';
import { RootState } from '../reducers';

export const updateUserProfile = (userData: {
	email: string;
	password: string;
	userName: string;
	name: string;
}) => {
	return async (
		dispatch: Dispatch<UserProfileAction | UserAction>,
		getState: () => RootState
	) => {
		dispatch({ type: UserProfileActionTypes.USER_UPDATE_PROFILE_REQUEST });

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
			const { data } = await axios.put(`/api/users/profile`, userData, config);

			dispatch({
				type: UserProfileActionTypes.USER_UPDATE_PROFILE_SUCCESS,
				payload: data,
			});

			dispatch({
				type: UserActionTypes.USER_LOGIN_SUCCESS,
				payload: data,
			});

			localStorage.setItem('userInfo', JSON.stringify(data));
		} catch (error) {
			dispatch({
				type: UserProfileActionTypes.USER_UPDATE_PROFILE_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
};

export const resetUserProfile = () => {
	return (dispatch: Dispatch<UserProfileAction>) => {
		dispatch({ type: UserProfileActionTypes.USER_UPDATE_PROFILE_RESET });
	};
};
