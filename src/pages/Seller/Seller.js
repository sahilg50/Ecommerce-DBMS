import React from 'react';
import styled from 'styled-components';
import SellerForm from './SellerForm';
import { withRouter } from 'react-router-dom';

const Seller = ({ history }) => {
	return (
		<SellerContainer>
			<SellerForm />
		</SellerContainer>
	);
};

export default withRouter(Seller);

const SellerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
