import { connect } from 'react-redux';
import axios from 'axios';
import React from 'react';
import UsersPres from './UsersPres';
import {
	followAC,
	setCurrentPageAC,
	setUsersAC,
	unfollowAC,
} from '../../redux/usersReducer';

class UsersContainer extends React.Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pagesCount}$count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.setUsers(response.data.items);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
			)
			.then((response) => {
				this.props.setUsers(response.data.items);
			});
	};

	render() {
		return (
			<UsersPres
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
			/>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userID) => dispatch(followAC(userID)),
		unfollow: (userID) => dispatch(unfollowAC(userID)),
		setUsers: (users) => dispatch(setUsersAC(users)),
		setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
