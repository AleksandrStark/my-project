import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { createField, Input } from '../common/formControls/FormsControls';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router';
import classes from '../common/formControls/FormsControls.module.css';

let LoginForm = ({ handleSubmit, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField('email', 'email', [required], Input)}
			{createField('password', 'password', [required], Input, {
				type: 'password',
			})}
			{createField(
				null,
				'rememberMe',
				[],
				Input,
				{
					type: 'checkbox',
				},
				'remember me'
			)}

			{error && <div className={classes.formSummaryError}>{error}</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};
const LoginReduxForm = reduxForm({
	form: 'login',
})(LoginForm);

let Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe);
	};

	if (props.isAuth) {
		return <Navigate to={'/profile'} />;
	}
	return (
		<div>
			<h1>login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	};
};

export default connect(mapStateToProps, { login })(Login);
