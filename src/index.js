import state, { subscribe } from './redux/myStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {
	addPost,
	updateNewPostText,
	sendNewMessage,
	updateNewMessageBody,
} from './redux/myStore';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
	root.render(
		<BrowserRouter>
			<App
				state={state}
				addPost={addPost}
				updateNewPostText={updateNewPostText}
				sendNewMessage={sendNewMessage}
				updateNewMessageBody={updateNewMessageBody}
			/>
		</BrowserRouter>
	);
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
