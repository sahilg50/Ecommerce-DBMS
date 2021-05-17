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
		<CollectionItemContainer>
			<BackgroundImage className="image" imageUrl={imageUrl} />

			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
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
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	&:hover {
		.image {
			opacity: 0.8;
		}
		button {
			opacity: 0.85;
			display: flex;
		}
	}
`;

const AddButton = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;
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
	justify-content: space-between;
	font-size: 18px;
`;
const NameContainer = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;
const PriceContainer = styled.span`
	width: 10%;
	text-align: right;
`;
