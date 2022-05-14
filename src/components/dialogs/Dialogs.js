import React from 'react';

import classes from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogs.map((d) => (
		<DialogItem name={d.name} id={d.id} />
	));

	let messagesElements = props.state.messages.map((m) => (
		<Message id={m.id} message={m.message} />
	));

	let sendNewMessage = () => {
		alert('message was sent');
	};

	let onTypeMessage = (e) => {
		let text = e.target.value;
		alert(text);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElements}</div>

			<div className={classes.messages}>
				{messagesElements}
				<div>
					<textarea
						onChange={onTypeMessage}
						value={props.newMessage}
					></textarea>
				</div>
				<button onClick={sendNewMessage}>Send message</button>
			</div>
		</div>
	);
};

export default Dialogs;
