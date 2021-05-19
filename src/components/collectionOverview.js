import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCollectionForPreview } from '../redux/shop/shop.reducer';
import CollectionPreview from './CollectionPreview';

const CollectionOverview = () => {
	const [total_categories, setTotal_categories] = useState({});

	const collections = useSelector(selectCollectionForPreview);
	const Fetch_Total_Number_of_Categories = async () => {
		try {
			const response = await axios.get(
				`http://localhost:4000/total_categories`
			);
			setTotal_categories(response.data);
		} catch (error) {
			console.log('Directory request error');
		}
	};

	useEffect(() => {
		Fetch_Total_Number_of_Categories();
	}, []);

	return (
		<CollectionsOverviewContainer>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</CollectionsOverviewContainer>
	);
};

export default CollectionOverview;

const CollectionsOverviewContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
