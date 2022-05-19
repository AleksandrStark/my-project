const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 5,
				img: 'https://avatars.mds.yandex.net/i?id=fa8bf0b239b278f5aead284a77b16f90-5449757-images-thumbs&n=13',
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
});

export default profileReducer;
