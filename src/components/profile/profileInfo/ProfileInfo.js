import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div className={classes.avatar}>
				<img
					src="https://avatars.mds.yandex.net/i?id=92dbbfcc726cf6283e67e12e8e4d6f2f-5910641-images-thumbs&n=13"
					alt=""
				/>
			</div>
			<div className={classes.description}> some description</div>
		</div>
	);
};
export default ProfileInfo;
