import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import UsersClass from './UsersClass';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userID) => dispatch(followAC(userID)),
		unfollow: (userID) => dispatch(unfollowAC(userID)),
		setUsers: (users) => dispatch(setUsersAC(users)),
	};
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;
