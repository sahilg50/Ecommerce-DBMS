import React from 'react';
import styled from 'styled-components';
import Orders from '../components/Orders';

const OrderPage = () => {
	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Total Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Total Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Date Ordered</span>
				</HeaderBlockContainer>
			</CheckoutHeaderContainer>
			<Orders />
		</CheckoutPageContainer>
	);
};

export default OrderPage;

const CheckoutPageContainer = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
	button {
		margin-left: auto;
		margin-top: 50px;
	}
	overflow-x: hidden;
`;

const CheckoutHeaderContainer = styled.div`
	margin-top: 72px;
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

const HeaderBlockContainer = styled.div`
	text-transform: capitalize;
	width: 23%;
	&:last-child {
		width: 8%;
	}
`;
