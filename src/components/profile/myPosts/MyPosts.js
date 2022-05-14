import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {
	let newPostElement = React.createRef();

	let onAddPost = () => {
		console.log(props);
		let text = newPostElement.current.value;
		props.addPost(text);
	};

	let onPostChange = (e) => {
		let text = e.target.value;
		alert(text);
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
					onChange={onPostChange}
					value={props.state.newPostText}
					ref={newPostElement}
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
