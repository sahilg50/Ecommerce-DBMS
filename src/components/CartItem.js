import React from 'react';
import styled from 'styled-components';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	return (
		<CartItemContainer>
			<Image src={imageUrl} alt="item" />
			<ItemDetailsContainer>
				<Name>{name}</Name>
				<Price>
					{quantity} x ${price}
				</Price>
			</ItemDetailsContainer>
		</CartItemContainer>
	);
};

export default CartItem;

const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	height: 80px;
	margin-bottom: 15px;
`;

const Image = styled.img`
	width: 30%;
`;

const ItemDetailsContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;
`;

const Name = styled.span`
	font-size: 16px;
`;
const Price = styled.span``;
