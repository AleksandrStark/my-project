import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '4ac2f20d-f55d-4df8-b058-f695982a7ceb',
	},
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => {
				console.log(response.data);
				return response.data;
			});
	},
	follow(id) {
		return instance.post(`follow/${id}`).then((response) => {
			return response.data;
		});
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`).then((response) => {
			return response.data;
		});
	},
	getProfile(userID) {
		console.warn('Obsolete methode. Please use profileAPI object.');
		return profileAPI.getProfile(userID);
	},
};

export const profileAPI = {
	getProfile(userID) {
		return instance.get(`profile/` + userID).then((response) => {
			return response.data;
		});
	},
	getStatus(userID) {
		return instance.get('profile/status/' + userID);
	},
	updateStatus(status) {
		return instance.put('profile/status', { status: status });
	},
	savePhoto(photoFile) {
		const formDate = new FormData();
		formDate.append('image', photoFile);
		return instance.put('profile/photo', formDate, {
			headers: {
				'Content-Type': 'multipart / form - data',
			},
		});
	},
	saveProfile(profile) {
		return instance.put('profile', profile);
	},
};

export const authAPI = {
	me() {
		return instance.get(`auth/me`).then((response) => {
			return response.data;
		});
	},
	login(email, password, remenberMe = false, captcha = null) {
		return instance
			.post(`auth/login`, { email, password, remenberMe, captcha })
			.then((response) => {
				return response.data;
			});
	},
	logout() {
		return instance.delete(`auth/login`).then((response) => {
			return response.data;
		});
	},
};
export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`).then((response) => {
			return response.data;
		});
	},
};
