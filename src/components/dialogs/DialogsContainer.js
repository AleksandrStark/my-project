import React from 'react';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import {
	sendMessageActionCreator,
	updateNewMessageBodyActionCreator,
} from '../../redux/dialogReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	let state = props.store.getState().messagesPage;

	let onSendNewMessage = () => {
		props.store.dispatch(sendMessageActionCreator());
	};

	let onTypeMessage = (body) => {
		let action = updateNewMessageBodyActionCreator(body);
		props.store.dispatch(action);
	};

	return (
		<Dialogs
			updateNewMessageBody={onTypeMessage}
			sendMessage={onSendNewMessage}
			messagesPage={state}
		/>
	);
};

export default DialogsContainer;
