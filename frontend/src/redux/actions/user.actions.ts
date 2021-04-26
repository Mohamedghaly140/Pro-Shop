export enum UserActionTypes {
	USER_AUTH_REQUEST = 'USER_AUTH_REQUEST',
	USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
	USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS',
	USER_AUTH_FAIL = 'USER_AUTH_FAIL',
	USER_LOGOT = 'USER_LOGOT',
}

export enum UserListActionTypes {
	USER_LIST_REQUEST = 'USER_LIST_REQUEST',
	USER_LIST_SUCCESS = 'USER_LIST_SUCCESS',
	USER_LIST_FAIL = 'USER_LIST_FAIL',
}

export enum UserDeleteActionTypes {
	USER_DELETE_REQUEST = 'USER_DELETE_REQUEST',
	USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS',
	USER_DELETE_FAIL = 'USER_DELETE_FAIL',
}

export enum UserUpdateActionTypes {
	USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST',
	USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
	USER_UPDATE_FAIL = 'USER_UPDATE_FAIL',
	USER_UPDATE_RESET = 'USER_UPDATE_RESET',
}
