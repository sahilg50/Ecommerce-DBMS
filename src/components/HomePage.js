import React from 'react';
import styled from 'styled-components';
import Directory from './Directory';

const HomePage = () => {
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default HomePage;

const HomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
