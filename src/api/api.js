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
			.get(`users?page=${currentPage}$count=${pageSize}`)
			.then((response) => {
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
		return instance.get(`profile/` + userID).then((response) => {
			return response.data;
		});
	},
};

export const authAPI = {
	me() {
		return instance.get(`auth/me`).then((response) => {
			return response.data;
		});
	},
};
