import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';

import { Route, Routes } from 'react-router-dom';

function App(props) {
	return (
		<div className="App">
			<Header />
			<Navbar />

			<div className="App__content">
				<Routes>
					<Route
						path="/profile"
						element={
							<Profile
								state={props.state.profilePage}
								addPost={props.addPost}
								updateNewPostText={props.updateNewPostText}
							/>
						}
					/>
					<Route
						exact
						path="/dialogs"
						element={
							<Dialogs
								state={props.state.messagesPage}
								sendNewMessage={props.sendNewMessage}
								updateNewMessageBody={props.updateNewMessageBody}
							/>
						}
					/>
					<Route path="/news" element={<News />} />
					<Route path="/music" element={<Music />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</div>

			<Footer />
		</div>
	);
}

export default App;
