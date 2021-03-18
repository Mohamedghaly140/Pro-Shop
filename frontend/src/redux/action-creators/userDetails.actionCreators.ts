import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActionTypes } from '../actions/userDetails.action';
import { UserAction } from '../action-types/userDetails.actionTypes';
import { RootState } from '../reducers';

export const getUserProfile = (id: string) => {
	return async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
		dispatch({ type: UserActionTypes.USER_DETAILS_REQUEST });

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
			const { data } = await axios.get(`/api/users/${id}`, config);

			dispatch({
				type: UserActionTypes.USER_DETAILS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: UserActionTypes.USER_DETAILS_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		}
	};
};
