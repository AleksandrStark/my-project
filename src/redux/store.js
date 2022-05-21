import { combineReducers, createStore } from 'redux';
import dialogReducer from './dialogReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: dialogReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
