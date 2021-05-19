import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSections } from '../redux/directory/directory.reducer';
import MenuItem from './MenuItem';
import axios from 'axios';

const Directory = () => {
	const sections = useSelector(selectSections);
	const [categories, setCategories] = useState([]);

	// const Fectch_Categories = fetch(`http://localhost:4000/category`)
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		return data;
	// 	});

	// const Get_categories = async () => {
	// 	const categories = await Fectch_Categories;
	// 	return categories;
	// };

	// var data_2 = Promise.resolve(Get_categories());
	// console.log(data_2);

	const Fectch_Categories = async () => {
		try {
			const response = await axios.get(`http://localhost:4000/category`);
			setCategories(response.data);
		} catch (error) {
			console.log('Directory request error');
		}
	};

	useEffect(() => {
		Fectch_Categories();
	}, []);

	return (
		<DirectoryMenuContainer>
			{categories.slice(0, 3).map(({ category_id, imageUrl, categoryName }) => (
				<MenuItem
					key={category_id}
					title={categoryName}
					imageUrl={imageUrl}
					size={''}
					linkUrl={`shop/${categoryName}`}
				/>
			))}
			{categories.slice(3, 5).map(({ category_id, imageUrl, categoryName }) => (
				<MenuItem
					key={category_id}
					title={categoryName}
					imageUrl={imageUrl}
					size={'true'}
					linkUrl={`shop/${categoryName}`}
				/>
			))}
		</DirectoryMenuContainer>
	);
};

export default Directory;

const DirectoryMenuContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
