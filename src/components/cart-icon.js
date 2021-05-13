import React from 'react';
import { ReactComponent as ShoppingIcon } from './shopping-bag.svg';
import { selectCartItems, ToggleHiddenState } from '../redux/cart/cart';
import { useDispatch, useSelector } from 'react-redux';
import './cart-icon.styles.scss';

const CartIcon = () => {
	const Items = useSelector(selectCartItems);

	const TotalItems = Items.reduce(
		(accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
		0
	);
	console.log(TotalItems);

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
