import React, { useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './components/ShopPage';
import Header from './components/Header';
import SignInAndSignUp from './components/SignInAndSignUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, createUserProfileDocument } from './firebase';
import { useDispatch } from 'react-redux';
import { setCurrentUser, reset } from './redux/user/user';
import { Reset } from './redux/cart/cart';

const App = () => {
	const [user] = useAuthState(auth);
	const dispatch = useDispatch();

	//Data Breach Function to be made.

	useEffect(() => {
		if (user) {
			dispatch(Reset());
			createUserProfileDocument(user);
			dispatch(reset());
			dispatch(
				setCurrentUser({
					currentUser: user,
				})
			);
		}
	}, [user]);

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route
					exact
					path="/"
					render={() => (user ? <HomePage /> : <Redirect to="/signin" />)}
				></Route>
				<Route
					path="/shop"
					render={() => (user ? <ShopPage /> : <Redirect to="/signin" />)}
				></Route>
				<Route
					exact
					path="/signin"
					render={() => (user ? <Redirect to="/" /> : <SignInAndSignUp />)}
				></Route>
			</Switch>
		</div>
	);
};

export default App;
