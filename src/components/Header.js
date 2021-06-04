import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './zany.png';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser, selectCurrentUser } from '../redux/user/user';
import CartIcon from './cart-icon';
import CartDropDown from './cartDropDown';
import { selectHiddenState } from '../redux/cart/cart';
import { withRouter } from 'react-router-dom';
import { ResetCart } from '../redux/cart/cart';
import { selectCurrentMerchant } from '../redux/merchant/merchant.reducer';

const Header = ({ match }) => {
	const url = document.URL;
	console.log(typeof url);

	const merchant = useSelector(selectCurrentMerchant);
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

	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<img src={Logo} alt="" />
			</LogoContainer>

			<OptionsContainer>
				{/* FOR LOGGED IN USER */}
				{currentUser ? <OptionLink to="/">HOME</OptionLink> : null}
				{currentUser ? <OptionLink to="/shop">SHOP</OptionLink> : null}
				{currentUser ? <OptionLink to="/orders">MY ORDERS</OptionLink> : null}
				{currentUser ? (
					<OptionLink as="div" onClick={() => handleSignOut}>
						SIGN OUT
					</OptionLink>
				) : null}
				{currentUser ? <CartIcon /> : null}

				{/* FOR LOGGED OUT USER */}
				{url === 'http://localhost:3000/signin' ? (
					<OptionLink as="div" onClick={() => alert('Please SIGN IN FIRST!')}>
						SHOP
					</OptionLink>
				) : null}
				{url === 'http://localhost:3000/signin' ? (
					<OptionLink to="/seller_login">I'M SELLER</OptionLink>
				) : null}

				{/* FOR LOGGED OUT SELLER AND LOGGED OUT USER */}
				{url === 'http://localhost:3000/seller_login' ? (
					<OptionLink to="/signin">I'M USER</OptionLink>
				) : null}

				{/* FOR LOGGED IN SELLER AND LOGGED OUT USER */}
				{url === 'http://localhost:3000/seller_homepage' ? (
					<div>
						<OptionLink to="/seller_homepage/my_products">
							MY PRODUCTS
						</OptionLink>

						<OptionLink to="/signin">LOGOUT</OptionLink>
					</div>
				) : null}
			</OptionsContainer>
			{useSelector(selectHiddenState) ? <CartDropDown /> : null}
		</HeaderContainer>
	);
};

export default withRouter(Header);

const HeaderContainer = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	background-color: #bfbebc;
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
	font-size: larger;
	font-weight: 600;
`;

const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
	color: white;
	border-radius: 2px;

	margin-right: 10px;
	&:hover {
		background-color: rgba(253, 179, 2, 0.6);

		color: black;
	}
`;
