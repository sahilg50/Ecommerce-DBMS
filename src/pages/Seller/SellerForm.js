import React, { useEffect, useState } from 'react';
import './sellerform.styles.css';
import styled from 'styled-components';
import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import 'react-dropdown/style.css';
import Select from 'react-select';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentMerchant } from '../../redux/merchant/merchant.reducer';

//Product Id function to be made

const SellerForm = () => {
	var userName = useSelector(selectCurrentMerchant).username;

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [categories, setCategories] = useState([]);
	const [brandNames, setBrandNames] = useState([]);
	const [ColorNames, setColorNames] = useState([]);
	const [Gender, setGender] = useState([]);

	const [selectedCategory, setSelectedCategory] = useState('Select Category');
	const [selectedBrand, setSelectedBrand] = useState('Select Brand');
	const [selectedColor, setSelectedColor] = useState('Select Color');
	const [selectedGender, setSelectedGender] = useState('Gender');

	const [categoryId, setCategoryId] = useState('');
	const [brandId, setBrandId] = useState('');
	const [colorId, setColorId] = useState('');
	const [genderId, setGenderId] = useState('');
	const [SellerName, setSellerName] = useState('');

	const Fetch_Seller_Name = async (userName) => {
		try {
			const response = await axios({
				method: 'post',
				url: 'http://localhost:4000/seller_name',
				data: { name: userName },
				responseType: 'json',
			});
			setSellerName(response.data[0].sellerName);
		} catch (error) {
			console.log('Seller Name cannot be fetched error!');
		}
	};

	Fetch_Seller_Name(userName);

	const Seller_Adding_Product = async (Details) => {
		try {
			const response = await axios({
				method: 'post',
				// headers: { 'Content-Type': 'application/json' },
				url: 'http://localhost:4000/seller_adding_product',
				data: Details,
				responseType: 'json',
			});
			console.log(response.data);
		} catch (error) {
			console.log('Seller failed to add product');
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const Details = {
			itemDetails: {
				productName: name,
				productPrice: price,
				productImage: imageUrl,
				categoryId: categoryId,
				brandid: brandId,
				colorid: colorId,
				genderid: genderId,
			},
			sellerusername: userName,
		};

		Seller_Adding_Product(Details);
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

	const All_Categories = [];
	const All_categories_id = [];
	const Categoryoptions = [];
	Object.keys(categories).map(function (key) {
		All_Categories.push(categories[key].categoryName);
		All_categories_id.push(categories[key].category_id);
		Categoryoptions.push({
			value: categories[key].categoryName,
			label: categories[key].categoryName,
		});
		return null;
	});

	const Fetch_Brands = async () => {
		try {
			const response = await axios({
				method: 'get',
				url: 'http://localhost:4000/brands',
				responseType: 'json',
			});
			console.log(response.data);
			setBrandNames(response.data);
		} catch (error) {
			console.log('Seller Cannot Retrieve Brands');
		}
	};

	const All_Brands = [];
	const All_Brands_id = [];
	const Brandoptions = [];
	Object.keys(brandNames).map(function (key) {
		All_Brands.push(brandNames[key].brandname);
		All_Brands_id.push(brandNames[key].brandid);
		Brandoptions.push({
			value: brandNames[key].brandname,
			label: brandNames[key].brandname,
		});
		return null;
	});

	const Fetch_Colors = async () => {
		try {
			const response = await axios({
				method: 'get',
				url: 'http://localhost:4000/colors',
				responseType: 'json',
			});
			console.log(response.data);
			setColorNames(response.data);
		} catch (error) {
			console.log('Seller Cannot Retrieve Colors');
		}
	};

	const All_Colors = [];
	const All_Colors_id = [];
	const Coloroptions = [];
	Object.keys(ColorNames).map(function (key) {
		All_Colors.push(ColorNames[key].colorName);
		All_Colors_id.push(ColorNames[key].colorid);
		Coloroptions.push({
			value: ColorNames[key].colorName,
			label: ColorNames[key].colorName,
		});
		return null;
	});

	const Fetch_Genders = async () => {
		try {
			const response = await axios({
				method: 'get',
				url: 'http://localhost:4000/gender',
				responseType: 'json',
			});
			console.log(response.data);
			setGender(response.data);
		} catch (error) {
			console.log('Seller Cannot Retrieve Gender');
		}
	};

	const All_Gender = [];
	const All_Gender_id = [];
	const Genderoptions = [];
	Object.keys(Gender).map(function (key) {
		All_Gender.push(Gender[key].gender);
		All_Gender_id.push(Gender[key].genderId);
		Genderoptions.push({
			value: Gender[key].gender,
			label: Gender[key].gender,
		});
		return null;
	});

	useEffect(() => {
		Fetch_Categories();
		Fetch_Brands();
		Fetch_Colors();
		Fetch_Genders();
	}, []);

	const handleCategory = (SelectedCategory) => {
		setSelectedCategory(SelectedCategory);
		setCategoryId(
			All_categories_id[All_Categories.indexOf(SelectedCategory.value)]
		);
	};

	const handleBrands = (selectedBrand) => {
		setSelectedBrand(selectedBrand);
		setBrandId(All_Brands_id[All_Brands.indexOf(selectedBrand.value)]);
	};

	const handleColor = (selectedColor) => {
		setSelectedColor(selectedColor);
		setColorId(All_Colors_id[All_Colors.indexOf(selectedColor.value)]);
	};

	const handleGender = (selectedGender) => {
		setSelectedGender(selectedGender);
		setGenderId(All_Gender_id[All_Gender.indexOf(selectedGender.value)]);
	};

	return (
		<div>
			<SellerContainerOuter>
				<SellerContainer>
					<Title> Hello {SellerName} !</Title>
					<h2>Add a new product</h2>
					<form onSubmit={handleSubmit}>
						<h3>Select Category</h3>
						<Select
							defaultValue={selectedCategory}
							value={selectedCategory}
							onChange={handleCategory}
							options={Categoryoptions}
						/>

						<h3>Select Brand</h3>
						<Select
							defaultValue={selectedBrand}
							value={selectedBrand}
							onChange={handleBrands}
							options={Brandoptions}
						/>

						<h3>Select Color</h3>
						<Select
							defaultValue={selectedColor}
							value={selectedColor}
							onChange={handleColor}
							options={Coloroptions}
						/>

						<h3>Select Gender</h3>
						<Select
							defaultValue={selectedGender}
							value={selectedGender}
							onChange={handleGender}
							options={Genderoptions}
						/>

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

						<ButtonContainer>
							<CustomButton type="submit">ADD PRODUCT</CustomButton>
						</ButtonContainer>
					</form>
				</SellerContainer>
			</SellerContainerOuter>
		</div>
	);
};

export default SellerForm;

const SellerContainerOuter = styled.div`
	border: 4px solid rgba(253, 179, 20, 0.5);
	margin-top: 60px;
`;

const SellerContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
	overflow-x: hidden;
	margin-top: 50px;
	margin-left: 15px;
	margin-right: 15px;
	margin-bottom: 15px;
`;

const Title = styled.h2`
	margin: 10px 0;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: -10px;
`;
