const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

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
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 5,
				img: 'https://avatars.mds.yandex.net/i?id=fa8bf0b239b278f5aead284a77b16f90-5449757-images-thumbs&n=13',
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let newMessage = {
				id: 6,
				message: this._state.messagesPage.newMessageBody,
			};
			this._state.messagesPage.messages.push(newMessage);
			this._state.messagesPage.newMessageBody = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.messagesPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		}
	},
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyActionCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
});

export default store;
