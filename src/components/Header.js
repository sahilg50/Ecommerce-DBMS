import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './crown.svg';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { reset, setCurrentUser } from '../redux/user/user';
import CartIcon from './cart-icon';
import CartDropDown from './cartDropDown';

function Header() {
	const currentUser = useSelector(setCurrentUser).payload.user.currentUser;
	console.log(currentUser === null);

	const dispatch = useDispatch();

	const handleSignOut = () => {
		auth
			.signOut()
			.then(() => {
				dispatch(reset());
			})
			.catch((error) => alert(error.message));
	};

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
						<div onClick={handleSignOut}>SIGN OUT</div>
					</Option>
				) : (
					<Option>
						<Link to="/signin">SIGN IN</Link>
					</Option>
				)}
				<CartIcon />
			</OptionsContainer>
			<CartDropDown />
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
	cursor: pointer;
`;
