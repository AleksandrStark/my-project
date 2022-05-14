import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/myStore';

// let rerenderEntireTree = (state) => {
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App store={store} />
	</BrowserRouter>
);
// };

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
// 	let state = store.getState();
// 	rerenderEntireTree(state);
// });
