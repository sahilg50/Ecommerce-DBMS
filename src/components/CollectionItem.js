import React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cart/cart';

function CollectionItem({ item }) {
	const { name, price, imageUrl } = item;

	const dispatch = useDispatch();

	const addToCart = (item) => {
		dispatch(AddItem({ Item: item }));

		console.log(item);
	};

	return (
		<Collectionitem>
			<Image src={imageUrl} />

			<CollectionFooter>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</CollectionFooter>
			<CustomButtonDiv>
				<CustomButton onClick={() => addToCart(item)} inverted>
					ADD TO CART
				</CustomButton>
			</CustomButtonDiv>
		</Collectionitem>
	);
}

export default CollectionItem;

const Collectionitem = styled.div`
	width: 22%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
`;

const CollectionFooter = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;
const Price = styled.span`
	width: 10%;
`;

const CustomButtonDiv = styled.div`
	width: 80;
	opacity: 0.8;
	position: absolute;
	top: 255px;
`;
