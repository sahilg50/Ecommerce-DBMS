import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import './sellerform.styles.css';

const SellerProducts = ({ item }) => {
	const { id, name, price, imageUrl } = item;

	var sectionStyle = {
		backgroundSize: 'cover',
		backgroundImage: `url(${imageUrl})`,
	};

	const handleDelete = async (id) => {
		try {
			const response = await axios({
				method: 'post',
				url: 'http://localhost:4000/seller_removes_product',
				data: { id: id },
				responseType: 'json',
			});
			console.log(response.data);
		} catch (error) {
			console.log('Product cannot be deleted!');
		}
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

					<button onClick={handleDelete(id)}> Delete Product </button>
				</Container>
			</CardContainer>
		</SellerProductsContainer>
	);
};

export default SellerProducts;

const SellerProductsContainer = styled.div``;

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
