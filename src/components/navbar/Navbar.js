import classes from './Navbar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<div className={`${classes.item} ${classes.active}`}>
				<NavLink to="/profile/"> Profile </NavLink>
			</div>

			<div className={classes.item}>
				<NavLink to="/dialogs"> Messages </NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/users"> Users </NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/news"> News </NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/music"> Music </NavLink>
			</div>
			<div className={classes.item}>
				<NavLink to="/settings"> Settings </NavLink>
			</div>
		</div>
	);
};
export default Navbar;
