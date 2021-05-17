import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './crown.svg';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { reset, selectCurrentUser } from '../redux/user/user';
import CartIcon from './cart-icon';
import CartDropDown from './cartDropDown';
import { selectHiddenState } from '../redux/cart/cart';

function Header() {
	const currentUser = useSelector(selectCurrentUser);
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
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/shop">CONTACT</OptionLink>
				{
					currentUser ? (
						<OptionLink as="div" onClick={handleSignOut}>
							SIGN OUT
						</OptionLink>
					) : null
					// <OptionLink to="/signin">SIGN IN</OptionLink>
				}
				<CartIcon />
			</OptionsContainer>
			{useSelector(selectHiddenState) ? <CartDropDown /> : null}
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

const LogoContainer = styled(Link)`
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

const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;
