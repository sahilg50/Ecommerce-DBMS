import React from 'react';
import { ReactComponent as ShoppingIcon } from './shopping-bag.svg';
import { TotalCartItems, ToggleHiddenState } from '../redux/cart/cart';
import { useDispatch, useSelector } from 'react-redux';
import './cart-icon.styles.scss';

const CartIcon = () => {
	const TotalItems = useSelector(TotalCartItems);
	const dispatch = useDispatch();
	const HandleHidden = () => {
		dispatch(ToggleHiddenState());
	};

	return (
		<div className="cart-icon" onClick={HandleHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{TotalItems}</span>
		</div>
	);
};

export default CartIcon;
