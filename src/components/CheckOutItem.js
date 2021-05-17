import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ClearCartItem } from '../redux/cart/cart';
import { AddItem, RemoveItem } from '../redux/cart/cart';

const CheckOutItem = ({ cartItem }) => {
	//Add redux persist || Firebase || mysql to hold the checkout state
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
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt="item" />
			</ImageContainer>
			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<div onClick={removeItem}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={addItem}>&#10095;</div>
			</QuantityContainer>
			<TextContainer>{price}</TextContainer>
			<RemoveButtonContainer onClick={handleClearItem}>
				&#10005;
			</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

export default CheckOutItem;

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
