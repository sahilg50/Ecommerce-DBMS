import React from 'react';
import styled from 'styled-components';
import SellerForm from './SellerForm';
import SellerProductsPage from './SellerProductsPage';
import { withRouter } from 'react-router-dom';

const Seller = ({ history, match }) => {
	return (
		<SellerContainer>
			<SellerForm />
			{/*<button onClick={() => history.push('/seller/my_products')}>
				VIEW MY PRODUCTS
	</button>*/}
			<SellerProductsPage />
		</SellerContainer>
	);
};

export default withRouter(Seller);

const SellerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ;
`;
