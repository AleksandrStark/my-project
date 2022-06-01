import {
	sendMessageActionCreator,
	updateNewMessageBodyActionCreator,
} from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
