import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';

import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';

function App(props) {
	return (
		<div className="App">
			<HeaderContainer />
			<Navbar />

			<div className="App__content">
				<Routes>
					<Route path="/profile/:userID" element={<ProfileContainer />} />
					<Route path="/profile" element={<ProfileContainer />} />
					<Route exact path="/dialogs" element={<DialogsContainer />} />
					<Route path="/news" element={<News />} />
					<Route path="/music" element={<Music />} />
					<Route path="/users" element={<UsersContainer />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
