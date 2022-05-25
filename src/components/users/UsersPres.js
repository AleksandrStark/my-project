import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../images/user.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

let UsersPres = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<div>
			<div>
				{pages.map((p) => {
					return (
						<span
							key={p.id}
							onClick={(e) => {
								props.onPageChanged(p);
							}}
							className={
								props.currentPage === p ? classes.selectedPage : undefined
							}
						>
							{p}
						</span>
					);
				})}
			</div>
			{props.users.map((u) => (
				<div key={u.id}>
					<span>
						<div>
							<NavLink to={'/profile/' + u.id}>
								<img
									src={u.photos.small != null ? u.photos.small : userPhoto}
									className={classes.userPhoto}
									alt="img"
								/>
							</NavLink>
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										axios
											.delete(
												`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
												{
													withCredentials: true,
													headers: {
														'API-KEY': '4ac2f20d-f55d-4df8-b058-f695982a7ceb',
													},
												}
											)
											.then((response) => {
												if (response.data.resultCode === 0) {
													props.unfollow(u.id);
												}
											});
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										axios
											.post(
												`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
												{},
												{
													withCredentials: true,
													headers: {
														'API-KEY': '4ac2f20d-f55d-4df8-b058-f695982a7ceb',
													},
												}
											)
											.then((response) => {
												if (response.data.resultCode === 0) {
													props.follow(u.id);
												}
											});
									}}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						<div>{u.name}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{'u.location.country'}</div>
						<div>{'u.location.city'}</div>
					</span>
				</div>
			))}
		</div>
	);
};

export default UsersPres;
