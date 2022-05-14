import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<div>
				<MyPosts state={props.state} addPost={props.addPost} />
			</div>
			<div> New Post </div>
			Content
		</div>
	);
};
export default Profile;
