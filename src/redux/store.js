import { combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
