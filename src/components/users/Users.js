import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				fullName: 'Leonardo',
				followed: true,
				status: 'sword master',
				location: {
					country: 'Russia',
					city: 'Saint Petersburg',
				},
				photoUrl:
					'https://avatars.mds.yandex.net/i?id=fa8bf0b239b278f5aead284a77b16f90-5449757-images-thumbs&n=13',
			},
			{
				id: 2,
				fullName: 'Rafael',
				followed: true,
				status: 'sai master',
				location: {
					country: 'Russia',
					city: 'Saint Petersburg',
				},
				photoUrl:
					'https://avatars.mds.yandex.net/i?id=fa8bf0b239b278f5aead284a77b16f90-5449757-images-thumbs&n=13',
			},
			{
				id: 3,
				fullName: 'Michelangelo',
				followed: true,
				status: 'nunchaku master',
				location: {
					country: 'Russia',
					city: 'Saint Petersburg',
				},
				photoUrl:
					'https://avatars.mds.yandex.net/i?id=fa8bf0b239b278f5aead284a77b16f90-5449757-images-thumbs&n=13',
			},
		]);
	}

	return (
		<div>
			{props.users.map((u) => (
				<div key={u.id}>
					<span>
						<div>
							<img src={u.photoUrl} className={classes.userPhoto} alt="img" />
						</div>
						<div>
							{u.followed ? (
								<button
									onClick={() => {
										props.unfollow(u.id);
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => {
										props.follow(u.id);
									}}
								>
									Follow
								</button>
							)}
						</div>
					</span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</div>
			))}
		</div>
	);
};

export default Users;
