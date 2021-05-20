import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import { selectCollectionForPreview } from '../redux/shop/shop.reducer';
import CollectionPreview from './CollectionPreview';

const CollectionOverview = () => {
	const [total_categories, setTotal_categories] = useState([]);

	// const collections = useSelector(selectCollectionForPreview);

	const Fetch_Total_Number_of_Categories = async () => {
		try {
			const response = await axios({
				method: 'get',
				url: `http://localhost:4000/total_categories`,
				responseType: 'json',
			});
			setTotal_categories(response.data);
		} catch (error) {
			console.log('total categories request error');
		}
	};

	useEffect(() => {
		Fetch_Total_Number_of_Categories();
	}, []);

	// const total_categoriess = [
	// 	{ category_id: '1', categoryName: 'hats' },
	// 	{ category_id: '2', categoryName: 'jackets' },
	// 	{ category_id: '3', categoryName: 'sneakers' },
	// 	{ category_id: '4', categoryName: 'womens' },
	// 	{ category_id: '5', categoryName: 'mens' },
	// 	{ category_id: '6', categoryName: 'bags' },
	// ];

	return (
		<CollectionsOverviewContainer>
			{total_categories.map(({ category_id, categoryName }) => (
				<CollectionPreview key={category_id} categoryName={categoryName} />
			))}
		</CollectionsOverviewContainer>
	);
};

export default CollectionOverview;

const CollectionsOverviewContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
