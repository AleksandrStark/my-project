import React from 'react';
import { Navigate } from 'react-router-dom';

import classes from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
	let state = props.messagesPage;

	let dialogsElements = state.dialogs.map((d) => (
		<DialogItem key={d.id} name={d.name} id={d.id} />
	));

	let messagesElements = state.messages.map((m) => (
		<Message key={m.id} id={m.id} message={m.message} />
	));

	let addNewMessage = (value) => {
		props.sendMessage(value.newMessageBody);
	};

	if (!props.isAuth) {
		return <Navigate to="/login" />;
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElements}</div>

			<div className={classes.messages}>
				{messagesElements}
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
		</div>
	);
};

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component="textarea"
				name="newMessageBody"
				placeholder="Enter your message"
			/>

			<button>Send message</button>
		</form>
	);
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
	AddMessageForm
);

export default Dialogs;
