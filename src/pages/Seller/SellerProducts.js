import React from 'react';
import styled from 'styled-components';
import HomePageImage from '../HomePageImage.jpg';

const SellerProducts = () => {
	return (
		<SellerProductsContainer>
			<CardContainer>
				<ImageContainer
					style={{ backgroundImage: `url(${HomePageImage})` }}
				></ImageContainer>
				<Container>
					<h3>
						<b>John Doe</b>
					</h3>
					<p>Architect & Engineer</p>

					<button> Add Product </button>
				</Container>
			</CardContainer>
		</SellerProductsContainer>
	);
};

export default SellerProducts;

const SellerProductsContainer = styled.div`
	margin-left: 100px;
`;

const CardContainer = styled.div`
	width: 240px;
	height: 380px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;

	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
