import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, createUserProfileDocument } from './firebase';
import { useDispatch } from 'react-redux';
import { setCurrentUser, resetUser } from './redux/user/user';
import Seller from './components/Seller';
import axios from 'axios';
import { SetCartitems, ResetCart } from './redux/cart/cart';

const App = () => {
	const [user, loading] = useAuthState(auth);
	const dispatch = useDispatch();
	const [retrievedCartItems, setRetrievedCartItems] = useState([]);
	const tempCart = [];

	//Data Breach Function to be made.
	const Fetch_User = async (userDetails) => {
		try {
			const response = await axios({
				method: 'post',
				url: 'http://localhost:4000/',
				data: userDetails,
				responseType: 'json',
			});
			console.log(response.data);
		} catch (error) {
			console.log('User fetch error');
		}
	};

	const Retrieve_Cart_Items = async () => {
		try {
			const response = await axios({
				method: 'get',
				// headers: { 'Content-Type': 'application/json' },
				url: 'http://localhost:4000/retrieve_cart_items',
				// data: 'Retrieve Request Active',
				responseType: 'json',
			});
			console.log(response.data);
			setRetrievedCartItems(response.data);
		} catch (error) {
			console.log('cart Items cannot be retrieved');
		}
	};

	useEffect(() => {
		if (user) {
			const userDetails = {
				userName: user.displayName,
				userEmail: user.email,
				userId: user.uid,
			};
			Fetch_User(userDetails);

			createUserProfileDocument(user);
			dispatch(resetUser());
			dispatch(
				setCurrentUser({
					currentUser: user,
				})
			);

			dispatch(ResetCart());
			Retrieve_Cart_Items();
		}
	}, [user, dispatch]);

	retrievedCartItems.map((item) =>
		tempCart.push({
			id: item.productid,
			name: item.productName,
			price: item.productPrice,
			imageUrl: item.productImage,
			quantity: item.Quantity,
		})
	);
	dispatch(SetCartitems({ CartItems: tempCart }));

	if (loading) {
		return (
			<LoadContainer>
				<Load>SHIP SHOP</Load>
			</LoadContainer>
		);
	}

	return (
		<div className="App">
			<Header />

			<Switch>
				<Route
					exact
					path="/"
					render={() => (user ? <HomePage /> : <Redirect to="/signin" />)}
				/>
				<Route
					path="/shop"
					render={() => (user ? <ShopPage /> : <Redirect to="/signin" />)}
				/>
				<Route
					exact
					path="/signin"
					render={() => (user ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
				/>
				<Route
					exact
					path="/checkout"
					render={() => (user ? <CheckoutPage /> : <Redirect to="/signin" />)}
				/>
				<Route exact path="/seller" render={() => (true ? <Seller /> : null)} />
			</Switch>
		</div>
	);
};

export default App;

const LoadContainer = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	justify-content: center;
`;

const Load = styled.h1`
	font-size: 150px;
	letter-spacing: 30px;
	margin-bottom: 50px;
`;
