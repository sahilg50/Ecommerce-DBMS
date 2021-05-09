import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './crown.svg';
import { auth } from '../firebase';

function Header({ currentUser }) {
	return (
		<HeaderContainer>
			<LogoContainer>
				<Link to="/">
					<Logo src="./crown.svg" />
				</Link>
			</LogoContainer>
			<OptionsContainer>
				<Option>
					<Link to="/shop">SHOP</Link>
				</Option>
				<Option>
					<Link to="/shop">CONTACT</Link>
				</Option>
				{currentUser ? (
					<Option>
						<Link onClick={() => auth.signOut()}>SIGN OUT</Link>
					</Option>
				) : (
					<Option>
						<Link to="/signin">SIGN IN</Link>
					</Option>
				)}
			</OptionsContainer>
		</HeaderContainer>
	);
}

export default Header;

const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

const LogoContainer = styled.div`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const Option = styled.div`
	padding: 10px 15px;
`;
