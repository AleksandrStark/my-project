import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {
	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = (e) => {
		let text = e.target.value;
		props.updateNewPostText(text);
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
				<textarea onChange={onPostChange} value={props.state.newPostText} />
			</div>
			<div>
				<button onClick={onAddPost}> addPost </button>
			</div>

			<div className={classes.posts}>{postsElements}</div>
		</div>
	);
};
export default MyPosts;
