import './App.css';
import React, { Component, Suspense } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import { Route, Routes } from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/preloader/Preloader';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import DialogsContainer from './components/dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() =>
	import('./components/dialogs/DialogsContainer')
);
const ProfileContainer = React.lazy(() =>
	import('./components/profile/ProfileContainer')
);

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />;
		}
		return (
			<div className="App">
				<HeaderContainer />
				<Navbar />

				<div className="App__content">
					<Suspense
						fallback={
							<div>
								<Preloader />
							</div>
						}
					>
						<Routes>
							<Route path="/profile/:userID" element={<ProfileContainer />} />
							<Route path="/profile" element={<ProfileContainer />} />
							<Route exact path="/dialogs" element={<DialogsContainer />} />
							<Route path="/news" element={<News />} />
							<Route path="/music" element={<Music />} />
							<Route path="/users" element={<UsersContainer />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="/login" element={<Login />} />
							<Route path="*" element={<div>404 NOT FOUND</div>} />
						</Routes>
					</Suspense>
				</div>

				<Footer />
			</div>
		);
	}
}
// function withRouter(Component) {
// 	function ComponentWithRouterProp(props) {
// 		let location = useLocation();
// 		let navigate = useNavigate();
// 		let params = useParams();
// 		return <Component {...props} router={{ location, navigate, params }} />;
// 	}

// 	return ComponentWithRouterProp;
// }

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});
export default compose(
	// withRouter,
	connect(mapStateToProps, { initializeApp })
)(App);
