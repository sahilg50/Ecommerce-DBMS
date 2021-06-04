import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import HomePageImage from '../pages/HomePageImage.jpg';

const LandingImage = ({ history, match }) => {
	return (
		<LandingImageContainer style={{ backgroundImage: `url(${HomePageImage})` }}>
			<Title>SUMMER PLANS </Title>
			<SubTitle>pending</SubTitle>
			<Button onClick={() => history.push('/shop/dress')}>
				SHOP SUMMER DRESSES
			</Button>
		</LandingImageContainer>
	);
};

export default withRouter(LandingImage);

const LandingImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 90%;
	width: 93%;
	margin-bottom: 34px;
	margin-top: 30px;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	width: 200px;
	height: 30px;
	font-weight: 600;
	background-color: rgba(250, 249, 247, 0.85);
	border: none;
	&:hover {
		background-color: rgba(250, 249, 247, 0.95);
		cursor: pointer;
	}
`;

const Title = styled.h1`
	color: white;
	font-size: 40px;
	line-height: 34px;
	font-family: akzidenz grotesk standart medium;
	letter-spacing: 0.6px;
	font-weight: 400px;
`;

const SubTitle = styled.div`
	color: white;
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	font-family: akzidenz grotesk standart medium;
	line-height: 1;
	letter-spacing: 0.6px;
	margin-bottom: 20px;
	margin-top: -20px;
`;
