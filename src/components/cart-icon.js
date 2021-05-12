import React from 'react';
import { ReactComponent as ShoppingIcon } from './shopping-bag.svg';
import { ToggleHiddenState } from '../redux/cart/cart';
import { useDispatch } from 'react-redux';
import './cart-icon.styles.scss';

const CartIcon = () => {
	const dispatch = useDispatch();

	const HandleHidden = () => {
		dispatch(ToggleHiddenState());
	};

	return (
		<div className="cart-icon" onClick={HandleHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
