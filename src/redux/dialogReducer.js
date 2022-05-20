const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
	dialogs: [
		{ id: 1, name: 'Leo' },
		{ id: 2, name: 'Raf' },
		{ id: 3, name: 'Mic' },
		{ id: 4, name: 'Splinter' },
		{ id: 5, name: 'April' },
	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: "What's up?" },
		{ id: 3, message: 'Wanna catch up for pizza?' },
		{ id: 4, message: 'You should train harder' },
		{ id: 5, message: "Who'll buy me a drink" },
	],
	newMessageBody: '',
};
const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body,
			};

		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, { id: 6, message: body }],
			};

		default:
			return state;
	}
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyActionCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
});

export default dialogReducer;
