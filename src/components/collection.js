import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCollectionData } from '../redux/shop/shop.reducer';
import CollectionItem from './CollectionItem';

const CollectionPage = ({ match }) => {
	const collectionUrlParams = match.params.collectionId;

	const collections = useSelector(selectCollectionData);

	const filteredcollections = collections[collectionUrlParams];

	console.log(filteredcollections);

	const { title, items } = filteredcollections;
	return (
		<Collection>
			<Title>{title}</Title>
			<Items>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</Items>
		</Collection>
	);
};

export default CollectionPage;

const Collection = styled.div`
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	font-size: 38px;
	margin: 0 auto 30px;
`;

const Items = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
`;
