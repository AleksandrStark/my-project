import Preloader from '../../common/preloader/Preloader';
import classes from './ProfileInfo.module.css';
import ProfileStatusHooks from './ProfileStatusHooks';
import userPhoto from '../../../images/user.png';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({
	profile,
	isOwner,
	savePhoto,
	status,
	updateStatus,
	saveProfile,
}) => {
	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader />;
	}
	const onMainPhotoSelected = (e) => {
		console.log(e);
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	};
	const onSubmit = (formData) => {
		saveProfile(formData).then(() => {
			setEditMode(false);
		});
	};
	return (
		<div>
			<img
				src={profile.photos.large || userPhoto}
				alt="ava"
				className={classes.mainPhoto}
			/>
			{isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

			{editMode ? (
				<ProfileDataForm
					initialValues={profile}
					profile={profile}
					onSubmit={onSubmit}
				/>
			) : (
				<ProfileData
					profile={profile}
					isOwner={isOwner}
					activateEditMode={() => {
						setEditMode(true);
					}}
				/>
			)}

			<ProfileStatusHooks status={status} updateStatus={updateStatus} />
		</div>
	);
};

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
	return (
		<>
			{isOwner && (
				<div>
					<button onClick={activateEditMode}>Edit</button>
				</div>
			)}
			<div>
				<b>Full name: </b> {profile.fullName}{' '}
			</div>
			<div>
				<b>Looking for a job: </b>
				{profile.lookingForAJob ? 'yes' : 'no'}
			</div>
			{profile.lookingForAJob && (
				<div>
					<b>My profession skills </b> : {profile.lookingForAJobDescription}
				</div>
			)}
			<div>
				<b>About me: </b>
				{profile.aboutMe}
			</div>
			<div>
				<b>Contacts: </b>
				{Object.keys(profile.contacts).map((key) => {
					return (
						<Contacts
							key={key.toString()}
							contactTitle={key}
							contactValue={profile.contacts[key]}
						/>
					);
				})}
			</div>
		</>
	);
};

const Contacts = ({ contactTitle, contactValue }) => {
	return (
		<div className={classes.contacts}>
			<b>{contactTitle}</b> : {contactValue}
		</div>
	);
};
export default ProfileInfo;
