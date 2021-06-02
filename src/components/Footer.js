import React from 'react';
import { Slide } from 'react-reveal';
import styled from 'styled-components';
import twitter from './twitter.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import youtube from './youtube.png';
// import { ReactComponent as Logo } from './crown.svg';
// import { DropdownButton, Dropdown } from 'react-bootstrap';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Footer = () => {
	const options = ['one', 'two', 'three'];
	const defaultOption = options[0];

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
							<FooterLink href="#">Aim</FooterLink>
							<FooterLink href="#">Vision</FooterLink>
							<FooterLink href="#">Testimonials</FooterLink>
						</Column>

						<Column>
							<Heading>Contact Us</Heading>
							<Dropdown
								options={options}
								value={defaultOption}
								placeholder="Select an option"
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
					<BottomLink href="#">
						<img src={facebook} alt="" />
					</BottomLink>
					<BottomLink href="#">
						<img src={instagram} alt="" />
					</BottomLink>
					<BottomLink href="#">
						<img src={twitter} alt="" />
					</BottomLink>
					<BottomLink href="#">
						<img src={youtube} alt="" />
					</BottomLink>
				</Bottom>
			</Slide>
		</FooterContainer>
	);
};
export default Footer;

const FooterContainer = styled.div`
	background: #232425;

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

const BottomLink = styled.div`
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
