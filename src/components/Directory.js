import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSections } from '../redux/directory/directory.reducer';
import MenuItem from './MenuItem';

const Directory = () => {
	const sections = useSelector(selectSections);
	return (
		<DirectoryMenuContainer>
			{sections.map(({ title, imageUrl, id, size, linkUrl }) => (
				<MenuItem
					key={id}
					title={title}
					imageUrl={imageUrl}
					size={size}
					linkUrl={linkUrl}
				/>
			))}
		</DirectoryMenuContainer>
	);
};

export default Directory;

const DirectoryMenuContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
