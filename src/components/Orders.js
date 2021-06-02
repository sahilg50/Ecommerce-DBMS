import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TotalPrice, selectCartItems } from '../redux/cart/cart';
import OrderItem from './OrderItem';

const Orders = () => {
	const totalPrice = useSelector(TotalPrice);
	const cartItems = useSelector(selectCartItems);

	return (
		<OrdersContainer>
			{cartItems.map((cartItem) => (
				<OrderItem cartItem={cartItem} key={cartItem.id} />
			))}
			<TotalContainer>TOTAL: ${totalPrice}</TotalContainer>
		</OrdersContainer>
	);
};

export default Orders;

const OrdersContainer = styled.div`
	width: 100%;
`;

const TotalContainer = styled.div`
	margin-top: 30px;
	font-size: 36px;
	margin-left: 80%;
`;
