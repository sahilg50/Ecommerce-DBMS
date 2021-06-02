import React from 'react';
import styled from 'styled-components';
import Brands from '../components/Brands';
import Footer from '../components/Footer';
import Directory from '../components/Directory';
import POPUP from '../components/popUp';

const HomePage = () => {
	const details = true;
	//Details

	return (
		<HomePageContainer>
			{details ? (
				<div>
					<Directory />
					<Brands />
					<Footer />
				</div>
			) : (
				<POPUP />
			)}
		</HomePageContainer>
	);
};

export default HomePage;

const HomePageContainer = styled.div`
	height: 100vh;
	/* background-image: linear-gradient(to top, whitesmoke, black); */
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
