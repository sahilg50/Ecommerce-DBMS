import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Logo from './zany.png';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser, selectCurrentUser } from '../redux/user/user';
import CartIcon from './cart-icon';
import CartDropDown from './cartDropDown';
import { selectHiddenState } from '../redux/cart/cart';
import { ResetCart } from '../redux/cart/cart';

const Header = () => {
	const url = document.URL;
	console.log(url);
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();

	const handleSignOut = () => {
		dispatch(ResetCart());
		auth
			.signOut()
			.then(() => {
				dispatch(resetUser());
			})
			.catch((error) => alert(error.message));
	};

	const handleAlert = () => {
		alert('Please SIGN IN FIRST!');
	};

	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<img src={Logo} alt="" />
			</LogoContainer>

			<OptionsContainer>
				{currentUser ? <OptionLink to="/">HOME</OptionLink> : null}
				{currentUser ? <OptionLink to="/shop">SHOP</OptionLink> : null}
				{currentUser ? <OptionLink to="/shop">CONTACT</OptionLink> : null}
				{currentUser ? <OptionLink to="/orders">MY ORDERS</OptionLink> : null}
				{currentUser ? (
					<OptionLink as="div" onClick={handleSignOut}>
						SIGN OUT
					</OptionLink>
				) : null}

				{currentUser ? <CartIcon /> : null}

				{currentUser ? null : (
					<OptionLink as="div" onClick={handleAlert}>
						SHOP
					</OptionLink>
				)}

				{url === 'http://localhost:3000/merchant' ? (
					<OptionLink to="/signin">USER</OptionLink>
				) : url === 'http://localhost:3000/seller' ? (
					<OptionLink to="/signin">I'M USER</OptionLink>
				) : currentUser ? null : (
					<OptionLink to="/merchant">MERCHANT/ADMIN</OptionLink>
				)}
			</OptionsContainer>
			{useSelector(selectHiddenState) ? <CartDropDown /> : null}
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	/* background-color: #121212; */
	background-color: #232425;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	z-index: 3;
`;

const LogoContainer = styled(Link)`
	margin-left: -15px;
	width: 70px;

	img {
		height: 60px;
		width: 160px;
	}
`;

const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	color: white;
`;

const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	color: white;
	border-radius: 2px;

	margin-right: 10px;
	&:hover {
		/* background-color: #dbd9d9;
		color: black; */
		color: #fdb302;
	}
`;
