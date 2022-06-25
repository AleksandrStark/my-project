import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';
import { Field, reduxForm } from 'redux-form';
import {
	required,
	maxLengthCreator,
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/formControls/FormsControls';

const MyPosts = React.memo((props) => {
	let onAddPost = (value) => {
		props.addPost(value.newPostText);
	};

	let postsElements = props.posts.map((post) => (
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
			<AddPostFormRedux onSubmit={onAddPost} />

			<div className={classes.posts}>{postsElements}</div>
		</div>
	);
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={Textarea}
				name="newPostText"
				placeholder="Write your post"
				validate={[required, maxLength10]}
			/>
			<div>
				<button> addPost </button>
			</div>
		</form>
	);
};
const AddPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(
	AddNewPostForm
);

export default MyPosts;
