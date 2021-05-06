import React from 'react';
import styled from 'styled-components';
import SHOP_DATA from './2.2 shop.data';
import CollectionPreview from './CollectionPreview';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<Shoppage>
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</Shoppage>
		);
	}
}

export default ShopPage;

const Shoppage = styled.div``;
