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
// import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	gettingUsers,
	getTotalUsersCount,
} from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
	componentDidMount() {
		let { currentPage, pageSize } = this.props;
		this.props.getUsers(currentPage, pageSize);
	}

	onPageChanged = (pageNumber) => {
		let { pageSize } = this.props;
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, pageSize);
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
		users: gettingUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
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
	// withAuthRedirect,
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		setTotalUsersCount,
		toggleFollowingProgress,
		getUsers,
	})
)(UsersContainer);
