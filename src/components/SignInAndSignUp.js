import React from 'react';
import styled from 'styled-components';
import SignIn from './SignIn';

function SignInAndSignUp() {
	return (
		<SignInSignUp>
			<SignIn />
		</SignInSignUp>
	);
}

export default SignInAndSignUp;

const SignInSignUp = styled.div``;
