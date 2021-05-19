import React from 'react';
import styled from 'styled-components';
import Brands from '../components/Brands';
import Directory from '../components/Directory';

const HomePage = () => {
	return (
		<HomePageContainer>
			<Directory />
			<Brands />
		</HomePageContainer>
	);
};

export default HomePage;

const HomePageContainer = styled.div`
	height: 100vh;
	background-image: linear-gradient(to top, whitesmoke, black);
	padding-top: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;
