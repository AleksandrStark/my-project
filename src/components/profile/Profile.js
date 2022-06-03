import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
			/>
			<div>
				<MyPostsContainer />
			</div>
			<div> New Post </div>
			Content
		</div>
	);
};
export default Profile;
