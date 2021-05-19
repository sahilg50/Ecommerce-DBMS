import React, { useEffect } from 'react';
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
import { setCurrentUser, reset } from './redux/user/user';
import Seller from './components/Seller';
import axios from 'axios';

const App = () => {
	const [user, loading] = useAuthState(auth);
	const dispatch = useDispatch();

	//Data Breach Function to be made.
	const Fectch_User = async (userDetails) => {
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

	useEffect(() => {
		if (user) {
			// const userDetails = {
			// 	userName: user.displayName,
			// 	userEmail: user.email,
			// 	userId: user.uid,
			// };
			// Fectch_User(userDetails);

			// fetch(`http://localhost:4000/`, {
			// 	method: 'post',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 		Accept: 'application/json',
			// 	},
			// 	body: JSON.stringify(userDetails),
			// })
			// 	.then((response) => response.json())
			// 	.then((data) => console.log(data));

			createUserProfileDocument(user);
			dispatch(reset());
			dispatch(
				setCurrentUser({
					currentUser: user,
				})
			);
		}
	}, [user, dispatch]);

	if (loading) {
		return (
			<LoadContainer>
				<Load>BUYX</Load>
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
