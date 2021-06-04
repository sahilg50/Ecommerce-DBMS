import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cart/cart';

const CollectionItem = ({ item }) => {
	const { name, price, imageUrl } = item;

	const dispatch = useDispatch();

	const addToCart = (item) => {
		dispatch(AddItem({ Item: item }));
	};
	var sectionStyle = {
		backgroundSize: 'cover',
		backgroundImage: `url(${imageUrl})`,
	};
	return (
		<SellerProductsContainer>
			<CardContainer>
				<ImageContainer style={sectionStyle}></ImageContainer>
				<Container>
					<h3>
						<b>{name}</b>
					</h3>
					<p>&#8377;{price}</p>

					<button onClick={() => addToCart(item)}> Add to Cart </button>
				</Container>
			</CardContainer>
		</SellerProductsContainer>
	);
};
export default CollectionItem;

const SellerProductsContainer = styled.div``;

const CardContainer = styled.div`
	width: 240px;
	height: 380px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		transform: scale(1.04);
	}
`;

const Container = styled.div`
	margin-top: -17px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 2px 16px;
	p {
		margin-top: -20px;
	}
	button {
		margin-top: -10px;
		padding: 6px;
		padding-right: 8px;
		padding-left: 8px;
		border-radius: 1px;
		background-color: black;
		color: white;
		border: none;
		font-size: medium;
		&:hover {
			background-color: #fdb302;
			color: black;
		}
	}
`;

const ImageContainer = styled.div`
	height: 75%;
`;
