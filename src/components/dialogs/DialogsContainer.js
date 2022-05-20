import {
	sendMessageActionCreator,
	updateNewMessageBodyActionCreator,
} from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		messagesPage: state.messagesPage,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyActionCreator(body));
		},
		sendMessage: () => {
			dispatch(sendMessageActionCreator());
		},
	};
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
