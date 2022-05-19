import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<div>
				<MyPostsContainer store={props.store} />
			</div>
			<div> New Post </div>
			Content
		</div>
	);
};
export default Profile;
