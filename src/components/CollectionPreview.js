import React from 'react';
import styled from 'styled-components';
import CollectionItem from './CollectionItem';

const CollectionPreview = ({ title, items }) => {
	return (
		<Collectionpreview>
			<Title>{title.toUpperCase()}</Title>
			<Preview>
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...otherItemProps }) => (
						<CollectionItem key={id} {...otherItemProps} />
					))}
			</Preview>
		</Collectionpreview>
	);
};

export default CollectionPreview;

const Collectionpreview = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;
const Title = styled.h1`
	font-size: 28px;
	margin-bottom: 25px;
`;

const Preview = styled.div`
	display: flex;
	justify-content: space-between;
`;
