import React from 'react';
import CustomButton from './CustomButton';
import './cart-dropdown.scss';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../redux/cart/cart';

const CartDropDown = () => {
	const Items = useSelector(selectCartItems);

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{Items.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
				<CustomButton>Go TO CHECKOUT</CustomButton>
			</div>
		</div>
	);
};

export default CartDropDown;
