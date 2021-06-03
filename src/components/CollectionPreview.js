import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CollectionItem from './CollectionItem';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const CollectionPreview = ({ categoryName, history, match }) => {
	const [fetched_Collection, setFetched_Collection] = useState([]);

	const Fetch_Collections = async (categoryName) => {
		try {
			const response = await axios({
				method: 'post',
				url: 'http://localhost:4000/collections',
				data: {
					collection: categoryName,
				},
				responseType: 'json',
			});
			setFetched_Collection(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		Fetch_Collections(categoryName);
	}, [categoryName]);

	if (!fetched_Collection.length) {
		return null;
	} else {
		return (
			<CollectionPreviewContainer>
				<TitleContainer
					onClick={() => history.push(`${match.url}/${categoryName}`)}
				>
					{categoryName.toUpperCase()}
				</TitleContainer>
				<PreviewContainer>
					{fetched_Collection
						.filter((fetched_item, idx) => idx < 5)
						.map((fetched_item) => {
							const item = {
								name: fetched_item.productName,
								id: fetched_item.productId,
								imageUrl: fetched_item.productImage,
								price: fetched_item.productPrice,
							};
							return (
								<CollectionItem key={item.id} item={item} width={'true'} />
							);
						})}
				</PreviewContainer>
			</CollectionPreviewContainer>
		);
	}
};

export default withRouter(CollectionPreview);

const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
	max-height: 500px;
`;
const TitleContainer = styled.h1`
	margin-top: 0;
	font-size: 40px;
	margin-bottom: 20px;
	cursor: pointer;
	color: whitesmoke;
	&:hover {
		color: red;
	}

	width: fit-content;
`;
const PreviewContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
