import React from 'react';

import styled from 'styled-components';
import CollectionItem from './CollectionItem';
import { useHistory } from 'react-router-dom';

const CollectionPreview = ({ title, items }) => {
	const history = useHistory();
	return (
		<CollectionPreviewContainer>
			<TitleContainer onClick={() => history.push(`/shop/${title}`)}>
				{title.toUpperCase()}
			</TitleContainer>
			<PreviewContainer>
				{items
					.filter((item, idx) => idx < 5)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;

const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;
const TitleContainer = styled.h1`
	font-size: 28px;
	margin-bottom: 25px;
	cursor: pointer;
	&:hover {
		color: grey;
	}
`;
const PreviewContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
