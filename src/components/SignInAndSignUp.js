import React from 'react';
import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';

function SignInAndSignUp() {
	return (
		<SignInSignUp>
			<SignIn />
			<SignUp />
		</SignInSignUp>
	);
}

export default SignInAndSignUp;

const SignInSignUp = styled.div`
	width: 850px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;
`;
