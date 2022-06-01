import React from 'react';
import { Navigate } from 'react-router-dom';

import classes from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {
	let state = props.messagesPage;

	let onSendNewMessage = () => {
		props.sendMessage();
	};

	let onTypeMessage = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};

	let dialogsElements = state.dialogs.map((d) => (
		<DialogItem key={d.id} name={d.name} id={d.id} />
	));

	let messagesElements = state.messages.map((m) => (
		<Message key={m.id} id={m.id} message={m.message} />
	));

	if (!props.isAuth) {
		return <Navigate to="/login" />;
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElements}</div>

			<div className={classes.messages}>
				{messagesElements}
				<div>
					<textarea
						placeholder="Enter your message"
						onChange={onTypeMessage}
						value={state.newMessageBody}
					></textarea>
				</div>
				<button onClick={onSendNewMessage}>Send message</button>
			</div>
		</div>
	);
};

export default Dialogs;
