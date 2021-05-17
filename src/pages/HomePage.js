import React from 'react';
import styled from 'styled-components';
import Directory from '../components/Directory';

const HomePage = () => {
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default HomePage;

const HomePageContainer = styled.div`
	padding-top: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
