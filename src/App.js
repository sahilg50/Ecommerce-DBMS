import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './components/ShopPage';
import Header from './components/Header';
import SignInAndSignUp from './components/SignInAndSignUp';
import { auth } from './firebase';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}
	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div className="App">
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage}></Route>
					<Route path="/shop" component={ShopPage}></Route>
					<Route path="/signin" component={SignInAndSignUp}></Route>
				</Switch>
			</div>
		);
	}
}

export default App;
