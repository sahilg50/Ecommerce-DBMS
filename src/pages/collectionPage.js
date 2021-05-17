import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCollectionData } from '../redux/shop/shop.reducer';
import CollectionItem from '../components/CollectionItem';

const CollectionPage = ({ match }) => {
	const collectionUrlParams = match.params.collectionId;

	const collections = useSelector(selectCollectionData);

	const filteredcollections = collections[collectionUrlParams];

	console.log(filteredcollections);

	const { title, items } = filteredcollections;
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

export default CollectionPage;

const CollectionPageContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const CollectionTitle = styled.h2`
	font-size: 38px;
	margin: 0 auto 30px;
`;

const CollectionItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
	& > div {
		margin-bottom: 30px;
	}
`;
