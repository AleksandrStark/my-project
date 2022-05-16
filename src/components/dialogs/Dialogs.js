import React from 'react';

import classes from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {
	let onSendNewMessage = () => {
		props.sendNewMessage();
	};

	let onTypeMessage = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};

	let dialogsElements = props.state.dialogs.map((d) => (
		<DialogItem key={d.id} name={d.name} id={d.id} />
	));

	let messagesElements = props.state.messages.map((m) => (
		<Message key={m.id} id={m.id} message={m.message} />
	));

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElements}</div>

			<div className={classes.messages}>
				{messagesElements}
				<div>
					<textarea
						onChange={onTypeMessage}
						value={props.state.newMessageBody}
					></textarea>
				</div>
				<button onClick={onSendNewMessage}>Send message</button>
			</div>
		</div>
	);
};

export default Dialogs;
