import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';

let initialState = {
	userID: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null, // if null, captcha is not required
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
};

export const setAuthUserData = (userID, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: { userID, email, login, isAuth },
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch) => {
	const data = await authAPI.me();
	if (data.resultCode === 0) {
		let { id, email, login } = data.data;
		dispatch(setAuthUserData(id, email, login, true));
	}
};

export const login =
	(email, password, rememberMe, captcha) => async (dispatch) => {
		const data = await authAPI.login(email, password, rememberMe, captcha);
		if (data.resultCode === 0) {
			// success, get user data
			dispatch(getAuthUserData());
		} else {
			if (data.resultCode === 10) {
				dispatch(getCaptchaUrl());
			}
			let message = data.messages.length > 0 ? data.messages[0] : 'some error';
			dispatch(stopSubmit('login', { _error: message }));
		}
	};
export const getCaptchaUrl = () => async (dispatch) => {
	const data = await securityAPI.getCaptchaUrl();
	const captchaUrl = data.url;
	dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
	const data = await authAPI.logout();
	if (data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
};

export default authReducer;
