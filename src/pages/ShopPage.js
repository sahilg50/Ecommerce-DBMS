import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import CollectionOverview from '../components/collectionOverview';
import CollectionPage from './collectionPage';
import { withRouter } from 'react-router-dom';

const ShopPage = ({ match }) => {
	// WithRouter is used to make the component a higher order component.
	//It gives acess to path url isExact etc.

	// console.log(match);
	return (
		<Shoppage>
			<Route exact path="/shop" component={CollectionOverview} />
			<Route exact path="/shop/:collectionId" component={CollectionPage} />
		</Shoppage>
	);
};

export default withRouter(ShopPage);

const Shoppage = styled.div`
	padding: 80px 30px 10px 30px;
	background-color: lightgray;
`;
