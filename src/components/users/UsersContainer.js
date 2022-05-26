import { connect } from 'react-redux';
import React from 'react';
import UsersPres from './UsersPres';
import {
	follow,
	setCurrentPage,
	setUsers,
	unfollow,
	setTotalUsersCount,
	toggleIsFetching,
} from '../../redux/usersReducer';
import Preloader from '../common/preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		usersAPI
			.getUsers(this.props.currentPage, this.props.pageSize)
			.then((data) => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data.items);
				this.props.setTotalUsersCount(data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
		});
	};

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<UsersPres
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	};
};

// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		follow: (userID) => dispatch(followAC(userID)),
// 		unfollow: (userID) => dispatch(unfollowAC(userID)),
// 		setUsers: (users) => dispatch(setUsersAC(users)),
// 		setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setUsersTotalCountAC(totalCount));
// 		},
// 		toggleIsFetching: (totalCount) => {
// 			dispatch(toggleIsFetchingAC(totalCount));
// 		},
// 	};
// };

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
})(UsersContainer);
