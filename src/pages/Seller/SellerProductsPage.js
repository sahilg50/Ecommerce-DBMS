import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SellerProducts from './SellerProducts';

const SellerProductsPage = () => {
	const [products, setProducts] = useState([]);

	const Fetch_Seller_Products = async () => {
		try {
			const response = await axios({
				method: 'get',
				url: 'http://localhost:4000/',

				responseType: 'json',
			});
			console.log(response.data);
		} catch (error) {
			console.log('Seller Products cannot be fetched');
		}
	};

	useEffect(() => {
		Fetch_Seller_Products();
	}, []);

	return (
		<SellerProductsPageContainer>
			<h1>PREVIOUS PRODUCTS</h1>
			<Content>
				<SellerProducts />
			</Content>
		</SellerProductsPageContainer>
	);
};

export default SellerProductsPage;

const SellerProductsPageContainer = styled.div`
	margin-top: 60px;
`;

const Content = styled.div`
	display: grid;
	grid-gap: 25px;
	gap: 25px;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	margin-bottom: 60px;
`;
