import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './components/ShopPage';
import Header from './components/Header';
import SignInAndSignUp from './components/SignInAndSignUp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, createUserProfileDocument } from './firebase';

const App = () => {
	const [currentUser, setCurrentUser] = useState('');
	const [user] = useAuthState(auth);

	//Data Breach Function to be made.

	useEffect(() => {
		if (user) {
			createUserProfileDocument(user);
			setCurrentUser(user);
		}
	}, [user]);

	return (
		<div className="App">
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route path="/shop" component={ShopPage}></Route>
				<Route path="/signin" component={SignInAndSignUp}></Route>
			</Switch>
		</div>
	);
};

export default App;
