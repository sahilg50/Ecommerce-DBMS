import React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, ToggleHiddenState } from '../redux/cart/cart';
import { useHistory } from 'react-router-dom';

const CartDropDown = () => {
	const history = useHistory();
	const Items = useSelector(selectCartItems);
	const dispatch = useDispatch();

	return (
		<CartDropdownContainer>
			<CartItemsContainer>
				{Items.length ? (
					Items.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<EmptyMessageContainer>Your cart is empty!</EmptyMessageContainer>
				)}
				<CartDropdownButton
					onClick={() => {
						history.push('/checkout');
						dispatch(ToggleHiddenState());
					}}
				>
					CHECK OUT
				</CartDropdownButton>
			</CartItemsContainer>
		</CartDropdownContainer>
	);
};

export default CartDropDown;

const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
`;

const CartDropdownButton = styled(CustomButton)`
	margin-top: auto;
`;

const EmptyMessageContainer = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

const CartItemsContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;
