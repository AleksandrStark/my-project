import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import storeContext from './storeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
	root.render(
		<BrowserRouter>
			<storeContext.Provider value={store}>
				<App />
			</storeContext.Provider>
		</BrowserRouter>
	);
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});
