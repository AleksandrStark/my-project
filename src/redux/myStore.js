import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

let store = {
	_state: {
		profilePage: {
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
		},

		messagesPage: {
			dialogs: [
				{ id: 1, name: 'Leo' },
				{ id: 2, name: 'Raf' },
				{ id: 3, name: 'Mic' },
				{ id: 4, name: 'Splinter' },
				{ id: 5, name: 'April' },
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: "What's up?" },
				{ id: 3, message: 'Wanna catch up for pizza?' },
				{ id: 4, message: 'You should train harder' },
				{ id: 5, message: "Who'll buy me a drink" },
			],
			newMessageBody: '',
		},

		sidebar: {},
	},
	_callSubscriber() {
		console.log('state was changed');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	},
};

export default store;
