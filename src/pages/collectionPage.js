import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import { selectCollectionData } from '../redux/shop/shop.reducer';
import CollectionItem from '../components/CollectionItem';
import axios from 'axios';

const CollectionPage = ({ match }) => {
	const collectionUrlParams = match.params.collectionId;
	// console.log(collectionUrlParams);

	const [fetched_Collection, setFetched_Collection] = useState([]);

	const Fetch_Collections = async (collectionUrlParams) => {
		try {
			const response = await axios({
				method: 'post',
				url: 'http://localhost:4000/collections',
				data: {
					collection: collectionUrlParams,
				},
			});
			setFetched_Collection(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		Fetch_Collections(collectionUrlParams);
	}, [collectionUrlParams]);
	// console.log(fetched_Collection);

	// const collections = useSelector(selectCollectionData);
	// const filteredcollections = collections[collectionUrlParams];
	// const { title, items } = filteredcollections;

	return (
		<CollectionPageContainer>
			<CollectionTitle>{collectionUrlParams.toUpperCase()}</CollectionTitle>
			<CollectionItemsContainer>
				{fetched_Collection.map((fetched_item) => {
					const item = {
						name: fetched_item.productName,
						id: fetched_item.productId,
						imageUrl: fetched_item.productImage,
						price: fetched_item.productPrice,
					};

					return <CollectionItem key={item.id} item={item} width={''} />;
				})}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

export default CollectionPage;

const CollectionPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

const CollectionTitle = styled.h2`
	font-size: 38px;
	margin: 0 auto 30px;
	color: whitesmoke;
	font-size: 40px;
	&:hover {
		cursor: pointer;
		color: red;
	}
`;

const CollectionItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	width: 100%;
	grid-gap: 10px;
	& > div {
		margin-bottom: 30px;
	}
`;
