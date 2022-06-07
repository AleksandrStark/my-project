import React from 'react';
import { Field, reduxForm } from 'redux-form';

let LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'login'} name={'login'} component={'input'} />
			</div>
			<div>
				<Field placeholder={'password'} name={'password'} component={'input'} />
			</div>
			<div>
				<Field type={'checkbox'} name={'rememberMe'} component={'input'} />
				Remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	);
};
const LoginReduxForm = reduxForm({
	form: 'login',
})(LoginForm);

let Login = () => {
	const onSubmit = (formData) => {
		console.log(formData);
	};
	return (
		<div>
			<h1>login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default Login;
