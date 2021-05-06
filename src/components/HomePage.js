import React from 'react';
import styled from 'styled-components';
import Directory from './Directory';

const HomePage = () => {
	return (
		<HomePageCOntainer>
			<Directory />
		</HomePageCOntainer>
	);
};

export default HomePage;

const HomePageCOntainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 80px;
`;
