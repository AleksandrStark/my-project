import { connect } from 'react-redux';
import React from 'react';
import UsersPres from './UsersPres';
import {
	follow,
	setCurrentPage,
	unfollow,
	setTotalUsersCount,
	toggleFollowingProgress,
	getUsers,
} from '../../redux/usersReducer';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
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
					followingInProgress={this.props.followingInProgress}
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
		followingInProgress: state.usersPage.followingInProgress,
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

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		setTotalUsersCount,
		toggleFollowingProgress,
		getUsers,
	})
)(UsersContainer);
