import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './components/ShopPage';
import Header from './components/Header';
import SignInAndSignUp from './components/SignInAndSignUp';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route path="/shop" component={ShopPage}></Route>
				<Route path="/signin" component={SignInAndSignUp}></Route>
			</Switch>
		</div>
	);
}

export default App;
