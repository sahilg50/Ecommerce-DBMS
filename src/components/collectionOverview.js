import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCollectionForPreview } from '../redux/shop/shop.reducer';
import CollectionPreview from './CollectionPreview';

function CollectionOverview() {
	const collections = useSelector(selectCollectionForPreview);

	return (
		<CollectionsOverviewContainer>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</CollectionsOverviewContainer>
	);
}

export default CollectionOverview;

const CollectionsOverviewContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
