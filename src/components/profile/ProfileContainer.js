import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
	getUserProfile,
	getStatus,
	updateStatus,
	savePhoto,
} from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	refreshProfile() {
		let userID = this.props.router.params.userID;
		if (!userID) {
			userID = this.props.authorizedUserId;

			if (!userID) {
				this.props.history.push('/login');
			}
		}
		this.props.getUserProfile(userID);
		this.props.getStatus(userID);
	}
	componentDidMount(props) {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.router.params.userID !== prevProps.router.params.userID) {
			this.refreshProfile();
		}
	}

	render() {
		return (
			<div>
				<Profile
					{...this.props}
					isOwner={!this.props.router.params.userID}
					profile={this.props.profile}
					status={this.props.status}
					updateStatus={this.props.updateStatus}
					savePhoto={this.props.savePhoto}
				/>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userID,
	isAuth: state.auth.isAuth,
});

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}

	return ComponentWithRouterProp;
}

export default compose(
	connect(mapStateToProps, {
		getUserProfile,
		getStatus,
		updateStatus,
		savePhoto,
	}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
