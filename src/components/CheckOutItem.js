import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ClearCartItem } from '../redux/cart/cart';
import { AddItem, RemoveItem } from '../redux/cart/cart';

const CheckOutItem = ({ cartItem }) => {
	const { id, name, imageUrl, price, quantity } = cartItem;
	const dispatch = useDispatch();

	const handleClearItem = () => {
		dispatch(
			ClearCartItem({
				ID: id,
			})
		);
	};

	const removeItem = () => {
		dispatch(
			RemoveItem({
				Item: cartItem,
			})
		);
	};

	const addItem = () => {
		dispatch(
			AddItem({
				Item: cartItem,
			})
		);
	};

	return (
		<CheckoutItem>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow onClick={removeItem}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={addItem}>&#10095;</Arrow>
			</Quantity>
			<Price>{price}</Price>
			<RemoveButton onClick={handleClearItem}>&#10005;</RemoveButton>
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
	display: flex;
	flex-direction: row;
	width: 23%;
`;
const Price = styled.span`
	width: 23%;
`;
const RemoveButton = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;

const Arrow = styled.div`
	cursor: pointer;
`;

const Value = styled.div`
	margin: 0px 10px;
`;
