import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import { selectSections } from '../redux/directory/directory.reducer';
import MenuItem from './MenuItem';
import axios from 'axios';

const Directory = () => {
	// const sections = useSelector(selectSections);
	const [categories, setCategories] = useState([]);
	const [men_women, setMen_women] = useState([]);

	const Fetch_Categories = async () => {
		try {
			const response = await axios.get(`http://localhost:4000/category`);
			console.log(response.data);
			setCategories(response.data);
		} catch (error) {
			console.log('Directory request error');
		}
	};

	const Fetch_Men_Women = async () => {
		try {
			const response = await axios.get(`http://localhost:4000/men_women`);
			console.log(response.data);
			setMen_women(response.data);
		} catch (error) {
			console.log('Directory request error');
		}
	};

	useEffect(() => {
		Fetch_Categories();
		Fetch_Men_Women();
	}, []);

	return (
		<DirectoryMenuContainer>
			{categories.map(({ category_id, imageUrl, categoryName }) => (
				<MenuItem
					key={category_id}
					title={categoryName}
					imageUrl={imageUrl}
					size={''}
					linkUrl={`shop/${categoryName}`}
				/>
			))}
			{men_women.map(({ genderId, genderUrl, gender }) => (
				<MenuItem
					key={genderId}
					title={gender}
					imageUrl={genderUrl}
					size={'true'}
					linkUrl={`shop/${gender}`}
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
