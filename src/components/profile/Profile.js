import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<div>
				<MyPosts state={props.state} />
			</div>
			<div> New Post </div>
			Content
		</div>
	);
};
export default Profile;
