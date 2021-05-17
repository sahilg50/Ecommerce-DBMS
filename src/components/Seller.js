import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
import CustomButton from './CustomButton';

//Product Id function to be made

const SignUp = () => {
	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const [price, setPrice] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [categoryId, setCategoryId] = useState('');

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
				<FormInput
					type="text"
					name="Ener CategoryId"
					value={categoryId}
					onChange={(e) => setCategoryId(e.target.value)}
					label="Category Id"
					required
				/>
				<CustomButton type="submit">ADD PRODUCT</CustomButton>
			</form>
		</SellerContainer>
	);
};

export default SignUp;

const SellerContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
	overflow-x: hidden;
`;

const Title = styled.h2`
	margin: 10px 0;
`;
