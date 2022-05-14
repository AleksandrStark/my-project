import classes from './Post.module.css';

const Post = (props) => {
	return (
		<div className={classes.item}>
			<img src={props.img} alt="" /> {props.message}
			<div>
				<span>❤️ {props.likesCount} </span>
			</div>
		</div>
	);
};
export default Post;
