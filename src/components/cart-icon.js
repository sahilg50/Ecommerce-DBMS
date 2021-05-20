import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from './shopping-bag.svg';
import { TotalCartItems, ToggleHiddenState } from '../redux/cart/cart';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

const CartIcon = () => {
	const TotalItems = useSelector(TotalCartItems);
	const dispatch = useDispatch();
	const HandleHidden = () => {
		dispatch(ToggleHiddenState());
	};

	//Update Items in the cart
	// const Fetch_Cart_Item = async (TotalItems) => {
	// 	try {
	// 		const response = await axios({
	// 			method: 'post',
	// 			url: 'http://localhost:4000/Cart_Item',
	// 			data: { TotalItems: TotalItems },
	// 			responseType: 'json',
	// 		});
	// 		console.log(response);
	// 	} catch (error) {
	// 		console.log('User fetch error');
	// 	}
	// };

	// useEffect(() => {
	// 	Fetch_Cart_Item(TotalItems);
	// 	console.log(TotalItems);
	// }, [TotalItems]);

	return (
		<CartContainer onClick={HandleHidden}>
			<ShoppingIcon fill="white" className="shopping-icon" />
			<ItemCountContainer>{TotalItems}</ItemCountContainer>
		</CartContainer>
	);
};

export default CartIcon;

const CartContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const ShoppingIcon = styled(ShoppingIconSVG)`
	width: 24px;
	height: 24px;
`;

const ItemCountContainer = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;
`;
