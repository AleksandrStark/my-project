import React from 'react';
import {
	sendMessageActionCreator,
	updateNewMessageBodyActionCreator,
} from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import storeContext from '../../storeContext';

const DialogsContainer = () => {
	return (
		<storeContext.Consumer>
			{(store) => {
				let state = store.getState().messagesPage;

				let onSendNewMessage = () => {
					store.dispatch(sendMessageActionCreator());
				};

				let onTypeMessage = (body) => {
					let action = updateNewMessageBodyActionCreator(body);
					store.dispatch(action);
				};
				return (
					<Dialogs
						updateNewMessageBody={onTypeMessage}
						sendMessage={onSendNewMessage}
						messagesPage={state}
					/>
				);
			}}
		</storeContext.Consumer>
	);
};

export default DialogsContainer;
