import React from 'react';
import CustomButton from './CustomButton';
import './cart-dropdown.scss';
const CartDropDown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				<CustomButton>Go TO CHECKOUTs</CustomButton>
			</div>
		</div>
	);
};

export default CartDropDown;
