import React, { useState } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import './sign-up.styles.scss';
import { createUserProfileDocument, auth } from '../firebase';
import styled from 'styled-components';

const SignUp = () => {
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmpassword, setConfirmpassword] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmpassword) {
			alert("passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, displayName);
			setDisplayName('');
			setEmail('');
			setPassword('');
			setConfirmpassword('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SignUpContainer>
			<SignUpTitle>I do not have a account</SignUpTitle>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
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
		</SignUpContainer>
	);
};

export default SignUp;

const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
`;

const SignUpTitle = styled.h2`
	margin: 10px 0;
`;
