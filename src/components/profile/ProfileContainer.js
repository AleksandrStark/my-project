import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount(props) {
		let userID = this.props.router.params.userID;
		if (!userID) {
			userID = 2;
		}
		this.props.getUserProfile(userID);
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
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
	connect(mapStateToProps, { getUserProfile }),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
