import React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cart/cart';

function CollectionItem({ item }) {
	const { productName, productPrice, productImage } = item;

	const name = productName;
	const price = productPrice;
	const imageUrl = productImage;

	const dispatch = useDispatch();

	const addToCart = (item) => {
		dispatch(AddItem({ Item: item }));

		console.log(item);
	};

	return (
		<CollectionItemContainer>
			<BackgroundImage className="image" imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}$</PriceContainer>
			</CollectionFooterContainer>

			<CollectionFooterContainer>
				<AddButton onClick={() => addToCart(item)} inverted>
					ADD TO CART
				</AddButton>
			</CollectionFooterContainer>
		</CollectionItemContainer>
	);
}
export default CollectionItem;

const CollectionItemContainer = styled.div`
	width: 18vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	border: 1px solid black;
	border-radius: 8px;
	overflow: hidden;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	&:hover {
		.image {
		}
		button {
			opacity: 0.85;
			display: flex;
			align-items: center;
		}
		box-shadow: rgb(0 0 0 / 60%) 0px 26px 30px -10px,
			rgb(0 0 0 / 40%) 0px 16px 10px -10px;
	}
`;

const AddButton = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;
	left: 10%;
`;
const BackgroundImage = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	flex-direction: row;
	font-size: 20px;
	justify-content: space-evenly;
	font-weight: bold;
`;

const NameContainer = styled.span``;
const PriceContainer = styled.span``;
