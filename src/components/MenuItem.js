import React from 'react';
import styled from 'styled-components';

const MenuItem = ({ title, imageURL, size }) => {
	return (
		<Menu className={`${size}`}>
			<BackgroundImage style={{ backgroundImage: `url(${imageURL})` }} />
			<Content>
				<Title>{title.toUpperCase()}</Title>
				<SubTitle>SHOP NOW</SubTitle>
			</Content>
		</Menu>
	);
};

export default MenuItem;

const Menu = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	cursor: pointer;
	overflow: hidden;

	&.large {
		height: 380px;
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}
`;

const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;

	&:hover {
		transform: scale(1.1);
		transition: transform 5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}
`;

const Content = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	cursor: pointer;
	position: absolute;

	&:hover {
		opacity: 0.9;
	}
`;

const Title = styled.h1`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;

const SubTitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;
