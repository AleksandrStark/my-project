import classes from './Header.module.css';

const Header = () => {
	return (
		<div className={classes.header}>
			<img
				className={classes.header__img}
				alt=""
				src="https://avatars.mds.yandex.net/i?id=3fb457831bf970601b30fd1caf661022-4824750-images-thumbs&n=13"
			/>
			Header
		</div>
	);
};
export default Header;
