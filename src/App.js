import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';

import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/dialogs/DialogsContainer';

function App(props) {
	return (
		<div className="App">
			<Header />
			<Navbar />

			<div className="App__content">
				<Routes>
					<Route path="/profile" element={<Profile store={props.store} />} />
					<Route
						exact
						path="/dialogs"
						element={<DialogsContainer store={props.store} />}
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
