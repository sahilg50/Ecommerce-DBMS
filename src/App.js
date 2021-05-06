import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './components/ShopPage';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route path="/shop" component={ShopPage}></Route>
			</Switch>
		</div>
	);
}

export default App;
