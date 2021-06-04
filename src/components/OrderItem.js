import React from 'react';
import styled from 'styled-components';

const OrderItem = ({ cartItem }) => {
	//Add redux persist || Firebase || mysql to hold the checkout state
	const { name, imageUrl, price, quantity, date } = cartItem;
	var newDate = date.slice(0, 10);
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<span>{quantity}</span>
			</QuantityContainer>
			<TextContainer>&#8377;{quantity * price}</TextContainer>
			<RemoveButtonContainer>{newDate}</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

export default OrderItem;

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;
	img {
		width: 100%;
		height: 100%;
	}
`;

export const TextContainer = styled.span`
	width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
	display: flex;
	span {
		margin: 0 10px;
	}
	div {
		cursor: pointer;
	}
`;

export const RemoveButtonContainer = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;
