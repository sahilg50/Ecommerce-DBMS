import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TotalPrice, selectCartItems } from '../redux/cart/cart';
import OrderItem from './OrderItem';
import axios from 'axios';

const Orders = ({ OrderId }) => {
	const totalPrice = useSelector(TotalPrice);
	const cartItems = useSelector(selectCartItems);
	console.log(OrderId);

	const [orderItems, setOrderItems] = useState(null);

	const Fetch_OrderItems = async (OrderId) => {
		try {
			const response = await axios({
				method: 'post',
				url: 'http://localhost:4000/get_orderItems',
				data: {
					orderId: OrderId,
				},
				responseType: 'json',
			});
			console.log(response.data);
			console.log(typeof response.data);
			setOrderItems(response.data);
		} catch (error) {
			console.log('Orders Items Cannot Be Fetched');
		}
	};

	useEffect(() => {
		Fetch_OrderItems(OrderId);
	}, [OrderId]);

	return (
		<OrdersContainer>
			{cartItems.map((cartItem) => {
				return <OrderItem cartItem={cartItem} key={cartItem.id} />;
			})}
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
