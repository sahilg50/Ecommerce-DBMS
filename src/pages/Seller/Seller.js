import React from 'react';
import styled from 'styled-components';
import SellerForm from './SellerForm';
import SellerProductsPage from './SellerProductsPage';

const Seller = () => {
	return (
		<SellerContainer>
			<SellerForm />
			<SellerProductsPage />
		</SellerContainer>
	);
};

export default Seller;

const SellerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ;
`;
