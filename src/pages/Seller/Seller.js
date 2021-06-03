import React from 'react';
import styled from 'styled-components';
import SellerForm from './SellerForm';
import SellerProducts from './SellerProducts';

const Seller = () => {
	return (
		<SellerContainer>
			<SellerForm />
			<SellerProducts />
		</SellerContainer>
	);
};

export default Seller;

const SellerContainer = styled.div`
	display: flex;
	align-items: center;
`;
