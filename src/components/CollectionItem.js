import React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cart/cart';

const CollectionItem = ({ item, width }) => {
	const { name, price, imageUrl } = item;

	const dispatch = useDispatch();

	const addToCart = (item) => {
		dispatch(AddItem({ Item: item }));
	};

	return (
		<CollectionItemContainer width={width}>
			<BackgroundImage className="image" imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>&#8377; {price}</PriceContainer>
			</CollectionFooterContainer>

			<div>
				{/*<InfoButton inverted>More Info</InfoButton>*/}
				<AddButton onClick={() => addToCart(item)} inverted>
					ADD TO CART
				</AddButton>
			</div>
		</CollectionItemContainer>
	);
};
export default CollectionItem;

const CollectionItemContainer = styled.div`
	width: ${(props) => (props.width ? '14%' : '60%')};
	display: flex;
	flex-direction: column;
	height: 300px;
	align-items: center;
	position: relative;
	border: 1px solid #3d3b3b;
	border-radius: 8px;
	overflow: hidden;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	color: white;

	&:hover {
		.image {
			opacity: 0.3;
			transition: opacity 300ms ease-in-out 0s;
		}
		button {
			opacity: 0.85;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		box-shadow: rgb(249 249 249 / 5%) 0px 26px 30px -10px,
			rgb(249 249 249 / 40%) 0px 16px 10px -10px;

		border-color: rgba(249, 249, 249, 0.9);
	}
`;

const AddButton = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 150px;
	display: none;
	left: 10%;
`;
const InfoButton = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 60px;
	display: none;
	left: 10%;
`;

const BackgroundImage = styled.div`
	width: 100%;
	height: 90%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 10%;
	display: flex;
	flex-direction: row;
	font-size: 20px;
	justify-content: space-evenly;
	font-weight: bold;
	background-color: black;
`;

const NameContainer = styled.span``;
const PriceContainer = styled.span``;
