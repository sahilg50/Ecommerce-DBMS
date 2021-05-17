import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TotalPrice, selectCartItems } from '../redux/cart/cart';
import CheckOutItem from './CheckOutItem';
import StripCheckoutButton from './Stripe';

const CheckOut = () => {
	const totalPrice = useSelector(TotalPrice);
	const cartItems = useSelector(selectCartItems);

	return (
		<CheckOutPage>
			<CheckOutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckOutHeader>
			{cartItems.map((cartItem) => (
				<CheckOutItem cartItem={cartItem} key={cartItem.id} />
			))}
			<Total>TOTAL: ${totalPrice}</Total>
			<StripCheckoutButton price={totalPrice} />
		</CheckOutPage>
	);
};

export default CheckOut;

const CheckOutPage = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
`;

const CheckOutHeader = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}
`;

const Total = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`;
