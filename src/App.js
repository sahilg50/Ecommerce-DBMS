import React, { useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import CheckOut from './components/CheckOut';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './components/ShopPage';
import Header from './components/Header';
import SignInAndSignUp from './components/SignInAndSignUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, createUserProfileDocument } from './firebase';
import { useDispatch } from 'react-redux';
import { setCurrentUser, reset } from './redux/user/user';
import Seller from './components/Seller';

const App = () => {
	const [user, loading] = useAuthState(auth);
	const dispatch = useDispatch();

	//Data Breach Function to be made.

	useEffect(() => {
		if (user) {
			const userDetails = {
				userName: user.displayName,
				userEmail: user.email,
				userId: user.uid,
			};

			fetch(`http://localhost:4000/`, {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(userDetails),
			})
				.then((response) => response.json())
				.then((data) => console.log(data));

			console.log(user);
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
		return <h1>Loading...</h1>;
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
					render={() => (user ? <Redirect to="/" /> : <SignInAndSignUp />)}
				/>
				<Route
					exact
					path="/checkout"
					render={() => (user ? <CheckOut /> : <Redirect to="/signin" />)}
				/>
				<Route exact path="/seller" render={() => (true ? <Seller /> : null)} />
			</Switch>
		</div>
	);
};

export default App;
