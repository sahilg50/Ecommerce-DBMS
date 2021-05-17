import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import CollectionOverview from '../components/collectionOverview';
import CollectionPage from './collectionPage';

const ShopPage = () => {
	return (
		<Shoppage>
			<Route exact path="/shop" component={CollectionOverview} />
			<Route exact path="/shop/:collectionId" component={CollectionPage} />
		</Shoppage>
	);
};

export default ShopPage;

const Shoppage = styled.div``;
