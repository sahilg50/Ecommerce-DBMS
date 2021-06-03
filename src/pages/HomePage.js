import React from 'react';
import styled from 'styled-components';
import Brands from '../components/Brands';
import Footer from '../components/Footer';
import Directory from '../components/Directory';
// import POPUP from '../components/popUp';

import LandingImage from '../components/LandingImage';
import Header from '../components/Header';

const HomePage = () => {
	// const details = true;
	//Details

	return (
		<div>
			<Header />
			<HomePageContainer>
				{/*details ? (
				<div>
					<Directory />
					<Brands />
					<Footer />
				</div>
			) : (
				<POPUP />
			)*/}

				<LandingImage />
				<Directory />
				<Brands />
				<Footer />
			</HomePageContainer>
		</div>
	);
};

export default HomePage;

const HomePageContainer = styled.div`
	margin-top: -50px;
	height: 100vh;
	/* background-image: linear-gradient(to bottom, #d7e1ec, #ffffff); */
	background-color: #f5f5f5;
	padding-top: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;
