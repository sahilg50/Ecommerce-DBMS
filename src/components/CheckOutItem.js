import React from 'react';
import styled from 'styled-components';

const CheckOutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
	return (
		<CheckoutItem>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>{quantity}</Quantity>
			<Price>{price}</Price>
			<RemoveButton>&#10005;</RemoveButton>
		</CheckoutItem>
	);
};

export default CheckOutItem;

const CheckoutItem = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;
const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		width: 100%;
		height: 100%;
	}
`;

const Name = styled.span`
	width: 23%;
`;
const Quantity = styled.span`
	width: 23%;
`;
const Price = styled.span`
	width: 23%;
`;
const RemoveButton = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;
