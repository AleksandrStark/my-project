import { stopSubmit } from 'redux-form';
import { profileAPI, usersAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_FOTO_SUCCESS = 'SAVE-FOTO-SUCCESS';
// const SAVE_PROFILE_SUCCESS = 'SAVE-PROFILE-SUCCESS';

let initialState = {
	posts: [
		{
			id: 1,
			message: "Hi, it's me",
			likesCount: 5,
			img: 'https://avatars.mds.yandex.net/i?id=fa8bf0b239b278f5aead284a77b16f90-5449757-images-thumbs&n=13',
		},
		{
			id: 2,
			message: 'How are you',
			likesCount: 2,
			img: 'https://avatars.mds.yandex.net/i?id=2a00000179ebe0fcd4649d636ca4dfcff204-4526725-images-thumbs&n=13',
		},
		{
			id: 3,
			message: "I'm home",
			likesCount: 3,
			img: 'https://avatars.mds.yandex.net/i?id=32c39cea7291d01ff07756a60ba553d9-5667979-images-thumbs&n=13',
		},
		{
			id: 4,
			message: 'Mind your mind',
			likesCount: 5,
			img: 'https://avatars.mds.yandex.net/i?id=c1091b2c2f708a036a775977db057184-5241083-images-thumbs&n=13',
		},
	],
	newPostText: '',
	profile: null,
	status: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.newPostText,
				likesCount: 5,
				img: 'https://avatars.mds.yandex.net/i?id=fa8bf0b239b278f5aead284a77b16f90-5449757-images-thumbs&n=13',
			};
			return {
				...state,
				posts: [...state.posts, newPost],
			};
		}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		case SET_STATUS:
			return {
				...state,
				status: action.status,
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter((p) => p.id !== action.postID),
			};
		case SAVE_FOTO_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos },
			};

		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => ({
	type: ADD_POST,
	newPostText,
});

export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});
export const setStatus = (status) => ({
	type: SET_STATUS,
	status,
});
export const deletePost = (postID) => ({
	type: DELETE_POST,
	postID,
});
export const savePhotoSuccess = (photos) => ({
	type: SAVE_FOTO_SUCCESS,
	photos,
});

export const getUserProfile = (userID) => async (dispatch) => {
	const data = await usersAPI.getProfile(userID);
	dispatch(setUserProfile(data));
};
export const getStatus = (userID) => async (dispatch) => {
	const response = await profileAPI.getStatus(userID);
	dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};
export const savePhoto = (file) => async (dispatch) => {
	const response = await profileAPI.savePhoto(file);
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
};
export const saveProfile = (profile) => async (dispatch, getState) => {
	const userID = getState().auth.userID;
	const response = await profileAPI.saveProfile(profile);
	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(userID));
	} else {
		dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
		return Promise.reject(response.data.messages[0]);
		// dispatch(
		// 	stopSubmit('edit-profile', {
		// 		contacts: { facebook: response.data.messages[0] },
		// 	})
		// );
	}
};
export default profileReducer;
