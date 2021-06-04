import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TotalPrice, selectCartItems, ResetCart } from '../redux/cart/cart';
import CheckOutItem from '../components/CheckOutItem';
// import StripCheckoutButton from '../components/Stripe';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const CheckoutPage = ({ history, match }) => {
	var totalPrice = useSelector(TotalPrice);
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const Redirect_to_shop = () => {
		history.push('/shop');
	};

	const handlePayments = async () => {
		try {
			const response = await axios({
				method: 'post',
				// headers: { 'Content-Type': 'application/json' },
				url: 'http://localhost:4000/place_order',
				data: {
					OrderId: Date.now(),
				},
				responseType: 'json',
			});
			console.log(response.data);
			alert('Your order is placed Successfully');
		} catch (error) {
			console.log('cart Items cannot be retrieved');
		}

		try {
			const response = await axios({
				method: 'get',
				url: 'http://localhost:4000/empty_the_cart',
				responseType: 'json',
			});
			dispatch(ResetCart());
			console.log(response.data);
			Redirect_to_shop();
		} catch (error) {
			console.log('cart cannot be emptied');
		}
	};

	return (
		<CheckoutPageContainer>
			{totalPrice ? (
				<div>
					<CheckoutHeaderContainer>
						<HeaderBlockContainer>
							<span>Product</span>
						</HeaderBlockContainer>
						<HeaderBlockContainer>
							<span>Description</span>
						</HeaderBlockContainer>
						<HeaderBlockContainer>
							<span>Quantity</span>
						</HeaderBlockContainer>
						<HeaderBlockContainer>
							<span>Price</span>
						</HeaderBlockContainer>
						<HeaderBlockContainer>
							<span>Remove</span>
						</HeaderBlockContainer>
					</CheckoutHeaderContainer>
					{cartItems.map((cartItem) => (
						<CheckOutItem cartItem={cartItem} key={cartItem.id} />
					))}
					<TotalContainer>TOTAL: &#8377;{totalPrice}</TotalContainer>
					{/*<WarningContainer>
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
			</WarningContainer>
			<StripCheckoutButton price={totalPrice} />*/}

					<button onClick={handlePayments}>Payment</button>
				</div>
			) : (
				<h1>Add items to your Bag! </h1>
			)}
		</CheckoutPageContainer>
	);
};

export default withRouter(CheckoutPage);

const CheckoutPageContainer = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
	button {
		margin-left: auto;
		margin-top: 50px;
	}
`;

const CheckoutHeaderContainer = styled.div`
	margin-top: 72px;
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

const HeaderBlockContainer = styled.div`
	text-transform: capitalize;
	width: 23%;
	&:last-child {
		width: 8%;
	}
`;

const TotalContainer = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`;

const WarningContainer = styled.div`
	text-align: center;
	margin-top: 40px;
	font-size: 24px;
	color: red;
`;
