import { connect } from 'react-redux';
import axios from 'axios';
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

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pagesCount}$count=${this.props.pageSize}`,
				{ withCredentials: true }
			)
			.then((response) => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true);
		this.props.setCurrentPage(pageNumber);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
				{ withCredentials: true }
			)
			.then((response) => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(response.data.items);
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
