import React from 'react';
import styled from 'styled-components';
import SignIn from './SignIn';
import SignUp from './SignUp';

function SignInAndSignUpPage() {
	return (
		<SignInAndSignUpContainer>
			<SignIn />
			<SignUp />
		</SignInAndSignUpContainer>
	);
}

export default SignInAndSignUpPage;

const SignInAndSignUpContainer = styled.div`
	width: 850px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;
`;
