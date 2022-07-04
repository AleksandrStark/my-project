import MyPostsContainer from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				isOwner={props.isOwner}
				savePhoto={props.savePhoto}
				saveProfile={props.saveProfile}
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
