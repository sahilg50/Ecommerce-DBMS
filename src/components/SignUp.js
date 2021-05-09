import React, { useState } from 'react';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import './sign-up.styles.scss';

const SignUp = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmpassword, setConfirmpassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		setName('');
		setEmail('');
		setPassword('');
		setConfirmpassword('');
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={name}
					onChange={(e) => setName(e.target.value)}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmpassword}
					onChange={(e) => setConfirmpassword(e.target.value)}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
