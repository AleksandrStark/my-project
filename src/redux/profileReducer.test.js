import profileReducer, {
	addPostActionCreator,
	deletePost,
} from './profileReducer';

let state = {
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
it('length of posts should be incremented', () => {
	//1.Initial data
	let action = addPostActionCreator('hey test');
	//2. Action
	let newState = profileReducer(state, action);
	//3. Expectation
	expect(newState.posts.length).toBe(5);
});
it('message of post should be correct', () => {
	//1.Initial data
	let action = addPostActionCreator('hey test');
	//2. Action
	let newState = profileReducer(state, action);
	//3. Expectation
	expect(newState.posts[4].message).toBe('hey test');
});
it('length of posts should be decremented', () => {
	//1.Initial data
	let action = deletePost(1);
	//2. Action
	let newState = profileReducer(state, action);
	//3. Expectation
	expect(newState.posts.length).toBe(3);
});
it('length of posts shuold not be decremented if id is incorrect', () => {
	//1.Initial data
	let action = deletePost(100);
	//2. Action
	let newState = profileReducer(state, action);
	//3. Expectation
	expect(newState.posts.length).toBe(4);
});
