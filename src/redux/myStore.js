let rerenderEntireTree = () => {
	console.log('state was changed');
};

let state = {
	profilePage: {
		posts: [
			{
				id: 1,
				message: "Hi, it' it's me",
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
		newPostText: 'Write your message',
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
		newMessageBody: 'Write here',
	},

	sidebar: {},
};

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 5,
		img: 'https://avatars.mds.yandex.net/i?id=fa8bf0b239b278f5aead284a77b16f90-5449757-images-thumbs&n=13',
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree();
};

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree();
};

export let sendNewMessage = () => {
	let newMessage = {
		id: 6,
		message: state.messagesPage.newMessageBody,
	};
	state.messagesPage.messages.push(newMessage);
	state.messagesPage.newMessageBody = '';
	rerenderEntireTree();
};

export let updateNewMessageBody = (body) => {
	state.messagesPage.newMessageBody = body;
	rerenderEntireTree();
};

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
};

export default state;
