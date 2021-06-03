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
					<h4>
						<b>John Doe</b>
					</h4>
					<p>Architect & Engineer</p>
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
	height: 360px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;

	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;

const Container = styled.div`
	padding: 2px 16px;
`;

const ImageContainer = styled.div`
	height: 75%;
`;
