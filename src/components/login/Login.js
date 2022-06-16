import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/formControls/FormsControls';
import { login } from '../../redux/authReducer';
import { Navigate } from 'react-router';
import classes from '../common/formControls/FormsControls.module.css';

let LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					placeholder={'email'}
					name={'email'}
					component={Input}
					validate={[required]}
				/>
			</div>
			<div>
				<Field
					placeholder={'password'}
					name={'password'}
					component={Input}
					type={'password'}
					validate={[required]}
				/>
			</div>
			<div>
				<Field type={'checkbox'} name={'rememberMe'} component={Input} />
				Remember me
			</div>
			{props.error && (
				<div className={classes.formSummaryError}>{props.error}</div>
			)}
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
