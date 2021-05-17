import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../firebase';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setEmail('');
			setPassword('');
			console.log('success');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
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
				<ButtonsBarContainer>
					<CustomButton type="submit"> Sign in </CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						{' '}
						Sign in with Google{' '}
					</CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;

const SignInContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;
`;

const SignInTitle = styled.h2`
	margin: 10px 0;
`;

const ButtonsBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
