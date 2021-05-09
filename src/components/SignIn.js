import React, { useState } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import './sign-in.styles.scss';
import { signInWithGoogle } from '../firebase';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		setEmail('');
		setPassword('');
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					handleChange={(e) => setEmail(e.target.value)}
					value={email}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					handleChange={(e) => setPassword(e.target.value)}
					value={password}
					label="password"
					required
				/>
				<div className="buttons">
					<CustomButton type="submit"> Sign in </CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						{' '}
						Sign in with Google{' '}
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
