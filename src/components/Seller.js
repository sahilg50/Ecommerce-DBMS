import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-select';
import axios from 'axios';

//Product Id function to be made

const Seller = () => {
	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const [price, setPrice] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [categoryId, setCategoryId] = useState('');
	const [categories, setCategories] = useState([]);
	const [selectedOption, setSelectedOption] = useState([]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const itemDetails = {
			productId: id,
			productName: name,
			productPrice: price,
			productImage: imageUrl,
			categoryId: categoryId,
		};

		try {
			fetch(`http://localhost:4000/item`, {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(itemDetails),
			})
				.then((response) => response.json())
				.then((data) => console.log(data));
		} catch (error) {
			console.log('Cannot make a post request to the sever');
		}
	};

	const Fetch_Categories = async () => {
		try {
			const response = await axios({
				method: 'get',
				url: 'http://localhost:4000/total_categories',

				responseType: 'json',
			});
			console.log(response.data);
			setCategories(response.data);
		} catch (error) {
			console.log('User fetch error');
		}
	};

	useEffect(() => {
		Fetch_Categories();
	}, []);

	const All_Categories = [];
	const All_categories_id = [];
	const options = [];
	Object.keys(categories).map(function (key) {
		All_Categories.push(categories[key].categoryName);
		All_categories_id.push(categories[key].category_id);
		options.push({
			value: categories[key].categoryName,
			label: categories[key].categoryName,
		});
		return null;
	});

	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		setCategoryId(
			All_categories_id[All_Categories.indexOf(selectedOption.value)]
		);
	};

	return (
		<SellerContainer>
			<Title>SELLER INFO</Title>
			<span>Add a new product</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="Enter Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					label="Product Name"
					required
				/>
				<FormInput
					type="text"
					name="Enter Id"
					value={id}
					onChange={(e) => setId(e.target.value)}
					label="Product Id"
					required
				/>
				<FormInput
					type="text"
					name="Enter Price"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					label="Price"
					required
				/>
				<FormInput
					type="url"
					name="ImgURL"
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
					label="Product Image Url"
					required
				/>

				<CustomButton type="submit">ADD PRODUCT</CustomButton>
			</form>{' '}
			<Select
				defaultValue={selectedOption}
				value={selectedOption}
				onChange={handleChange}
				options={options}
			/>
		</SellerContainer>
	);
};

export default Seller;

const SellerContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
	overflow-x: hidden;
	margin-top: 50px;
`;

const Title = styled.h2`
	margin: 10px 0;
`;
