import { connect } from 'react-redux';
import {
	followAC,
	setCurrentPageAC,
	setUsersAC,
	unfollowAC,
} from '../../redux/usersReducer';
import UsersClass from './UsersClass';

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

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;
