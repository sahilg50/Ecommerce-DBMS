import React from 'react';
import CustomButton from './CustomButton';
import './cart-dropdown.scss';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, ToggleHiddenState } from '../redux/cart/cart';
import { useHistory } from 'react-router-dom';

const CartDropDown = () => {
	const history = useHistory();
	const Items = useSelector(selectCartItems);
	const dispatch = useDispatch();

	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{Items.length ? (
					Items.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<span className="empty-message">Your cart is empty!</span>
				)}
				<CustomButton
					onClick={() => {
						history.push('/checkout');
						dispatch(ToggleHiddenState());
					}}
				>
					CHECK OUT
				</CustomButton>
			</div>
		</div>
	);
};

export default CartDropDown;
