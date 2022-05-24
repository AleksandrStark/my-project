import Preloader from '../../common/preloader/Preloader';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<div>
			<div className={classes.avatar}>
				<img
					src="https://avatars.mds.yandex.net/i?id=92dbbfcc726cf6283e67e12e8e4d6f2f-5910641-images-thumbs&n=13"
					alt=""
				/>
			</div>
			<img src={props.profile.photos.small} alt="ava" />
			<div className={classes.description}> {props.profile.fullName} </div>
			<div className={classes.description}> {props.profile.aboutMe} </div>
			<div className={classes.description}>
				{' '}
				{props.profile.contacts.instagram}{' '}
			</div>
		</div>
	);
};
export default ProfileInfo;
