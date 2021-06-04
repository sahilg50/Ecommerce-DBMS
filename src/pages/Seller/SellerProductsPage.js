import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCurrentMerchant } from '../../redux/merchant/merchant.reducer';
import SellerProducts from './SellerProducts';

const SellerProductsPage = () => {
	const [products, setProducts] = useState([]);

	var userName = useSelector(selectCurrentMerchant).username;

	const Fetch_Seller_Products = async (userName) => {
		try {
			const response = await axios({
				method: 'post',
				// headers: { 'Content-Type': 'application/json' },
				url: 'http://localhost:4000/seller_retrieving_products',
				data: { username: userName },
				responseType: 'json',
			});
			console.log(response.data);
			setProducts(response.data);
		} catch (error) {
			console.log('Seller failed to retrieve products');
		}
	};

	useEffect(() => {
		Fetch_Seller_Products(userName);
	}, [userName]);

	return (
		<SellerProductsPageContainer>
			<h1>PREVIOUS PRODUCTS</h1>
			<Container>
				<Content>
					{products &&
						products.map(
							({ productName, productPrice, productImage, productId }) => {
								const item = {
									name: productName,
									id: productId,
									imageUrl: productImage,
									price: productPrice,
								};

								return (
									<SellerProducts key={item.id} item={item} width={'true'} />
								);
							}
						)}
				</Content>
			</Container>
		</SellerProductsPageContainer>
	);
};

export default SellerProductsPage;

const SellerProductsPageContainer = styled.div`
	margin-top: 60px;
`;

const Container = styled.div`
	padding: 0 30px 30px 30px;

	width: 100vw;
`;

const Content = styled.div`
	display: grid;
	grid-gap: 25px;
	gap: 25px;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	margin-bottom: 60px;
`;
