import React from 'react';
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {
	let onAddPost = () => {
		props.dispatch(addPostActionCreator());
	};

	let onPostChange = (e) => {
		let text = e.target.value;
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	};

	let postsElements = props.state.posts.map((post) => (
		<Post
			key={post.id}
			message={post.message}
			likesCount={post.likesCount}
			img={post.img}
		/>
	));

	return (
		<div className={classes.postBlock}>
			<h3>My Posts</h3>
			<div>
				<textarea
					placeholder="Write your post"
					onChange={onPostChange}
					value={props.state.newPostText}
				/>
			</div>
			<div>
				<button onClick={onAddPost}> addPost </button>
			</div>

			<div className={classes.posts}>{postsElements}</div>
		</div>
	);
};
export default MyPosts;
