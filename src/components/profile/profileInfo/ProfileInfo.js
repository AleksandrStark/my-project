import Preloader from '../../common/preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../images/user.png';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />;
	}
	const onMainPhotoSelected = (e) => {
		console.log(e);
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0]);
		}
	};
	return (
		<div>
			<div className={classes.avatar}>
				<img
					src="https://i.pinimg.com/originals/2d/e8/82/2de882cd4f3992ada3d609e3a183f7a4.jpg"
					alt=""
				/>
			</div>
			<img
				src={props.profile.photos.small || userPhoto}
				alt="ava"
				className={classes.mainPhoto}
			/>
			{props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
			<div className={classes.description}> {props.profile.fullName} </div>
			<ProfileStatusHooks
				status={props.status}
				updateStatus={props.updateStatus}
			/>
			<div className={classes.description}> {props.profile.aboutMe} </div>
			<div className={classes.description}>
				{' '}
				{props.profile.contacts.instagram}{' '}
			</div>
		</div>
	);
};
export default ProfileInfo;
