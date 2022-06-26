import React from 'react';
import Paginator from '../common/paginator/Paginator';
import User from './User';

let UsersPres = ({
	currentPage,
	totalUsersCount,
	pageSize,
	onPageChanged,
	users,
	...props
}) => {
	return (
		<div>
			<Paginator
				currentPage={currentPage}
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
				onPageChanged={onPageChanged}
			/>
			<div>
				{users.map((u) => (
					<User
						key={u.id}
						user={u}
						followingInProgress={props.followingInProgress}
						unfollow={props.unfollow}
						follow={props.follow}
					/>
				))}
			</div>
		</div>
	);
};

export default UsersPres;
