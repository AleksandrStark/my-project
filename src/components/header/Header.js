import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<div className={classes.header}>
			<img
				className={classes.header__img}
				alt=""
				src="https://avatars.mds.yandex.net/i?id=3fb457831bf970601b30fd1caf661022-4824750-images-thumbs&n=13"
			/>
			<div className={classes.loginBlock}>
				{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</div>
	);
};
export default Header;
