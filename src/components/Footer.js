import React, { useEffect, useState } from 'react';
import { Slide } from 'react-reveal';
import styled from 'styled-components';
import twitter from './twitter.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import youtube from './youtube.png';

import Select from 'react-select';

import axios from 'axios';

const Footer = () => {
	const [contactDetails, setContactDetails] = useState([]);
	const [selectedOption, setSelectedOption] = useState([]);

	const Fetch_Contact_DeTails = async () => {
		try {
			const response = await axios({
				method: 'get',
				url: 'http://localhost:4000/get_contactus',
				responseType: 'json',
			});
			console.log(response.data);
			setContactDetails(response.data);
		} catch (error) {
			alert('Contact Details Cannot be retrieved!');
		}
	};

	useEffect(() => {
		Fetch_Contact_DeTails();
	}, []);

	const States = [];
	const Contacts = [];
	const options = [];

	Object.keys(contactDetails).map(function (key) {
		States.push(contactDetails[key].states);
		Contacts.push(contactDetails[key].TollFreeNumber);
		options.push({
			value: contactDetails[key].states,
			label: contactDetails[key].states,
		});
		return null;
	});

	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		navigator.clipboard.writeText(
			Contacts[States.indexOf(selectedOption.value)]
		);
	};

	return (
		<FooterContainer>
			<Slide left duration={1100}>
				{/*<h1 style={{ color: 'green', textAlign: 'center', marginTop: '-50px' }}>
				Contact Us
    </h1>*/}
				<Container>
					<Row>
						<Column>
							<Heading>About Us</Heading>
							<FooterLink href="#">46,Global Enclave</FooterLink>
							<FooterLink href="#">Punjab</FooterLink>
							<FooterLink href="#">India</FooterLink>
						</Column>

						<Column>
							<Heading>Contact Us</Heading>

							<Select
								defaultValue={selectedOption}
								value={selectedOption}
								onChange={handleChange}
								options={options}
							/>
							{/*onChange={this._onSelect}*/}
							{/*<DropdownButton id="dropdown-basic-button" title="Dropdown button">;<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</DropdownButton>*/}
						</Column>
					</Row>
				</Container>

				<Bottom>
					<BottomLink href="https://www.facebook.com/">
						<img src={facebook} alt="" />
					</BottomLink>
					<BottomLink href="https://www.instagram.com/">
						<img src={instagram} alt="" />
					</BottomLink>
					<BottomLink href="https://twitter.com/home?lang=en">
						<img src={twitter} alt="" />
					</BottomLink>
					<BottomLink href="https://www.youtube.com/">
						<img src={youtube} alt="" />
					</BottomLink>
				</Bottom>
			</Slide>
		</FooterContainer>
	);
};
export default Footer;

const FooterContainer = styled.div`
	background: #bfbebc;

	bottom: 0;
	width: 100%;
	max-height: 400px;

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`;

const FooterLink = styled.a`
	display: flex;
	flex: row;
	align-items: center;
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;
	img {
		height: 30px;
		width: 30px;
	}

	&:hover {
		color: #fdb302;
		transition: 200ms ease-in;
	}
`;

const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;

const Bottom = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const BottomLink = styled.a`
	display: flex;
	flex: row;
	align-items: center;
	color: #fff;
	margin-bottom: 40px;
	font-size: 18px;
	text-decoration: none;
	margin-right: 30px;
	img {
		height: 30px;
		width: 30px;
	}

	&:hover {
		color: #fdb302;
		transition: 200ms ease-in;
		cursor: pointer;
	}
`;
