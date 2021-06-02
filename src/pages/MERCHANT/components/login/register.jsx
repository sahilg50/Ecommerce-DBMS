import axios from 'axios';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import styled from 'styled-components';
import loginImg from '../../admin.svg';

export class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			valid: false,
		};

		this.handleUserName = this.handleUserName.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	Seller_Login = async () => {
		try {
			const response = await axios({
				method: 'post',
				//  headers: { 'Content-Type': 'application/json' },
				url: 'http://localhost:4000/seller_login',
				data: {
					sellerusername: this.state.username,
					password: this.state.password,
				},
				responseType: 'json',
			});

			if (response.data) {
				console.log('Successful');
				this.setState({ valid: true });
				if (this.state.valid === false) {
					alert('Please ENter Valid Input Details');
				}
			}
		} catch (error) {
			console.log('Seller Login in Error');
		}
		this.setState({ username: '', password: '' });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.Seller_Login();
		//

		// this.setState(
		// 	{
		// 		username: this.state.username,
		// 	},
		// 	function () {
		// 		alert(this.state.username); // Shows the right value!
		// 		console.log(this.state.username);
		// 	}
		// );
	};

	handleUserName = (event) => {
		this.setState({ username: event.target.value });
	};

	handlePassword = (event) => {
		this.setState({ password: event.target.value });
	};

	render() {
		if (this.state.valid) {
			return (
				<Switch>
					{' '}
					<Route
						exact
						path="/merchant"
						render={() => (this.state.valid ? <Redirect to="/seller" /> : null)}
					/>
				</Switch>
			);
		}
		return (
			<LoginContainer className="base-container">
				<div>
					<div className="header">ADMIN</div>
					<div className="content">
						<div className="image">
							<img src={loginImg} alt="" />
						</div>

						<form className="form" onSubmit={this.handleSubmit}>
							<label className="form-group" htmlFor="username">
								Username
								<input
									type="text"
									name="username"
									value={this.state.username}
									onChange={this.handleUserName}
									placeholder="username"
								/>
							</label>

							<label className="form-group" htmlFor="password">
								Password
								<input
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handlePassword}
									placeholder="password"
								/>
							</label>
							<Footer className="footer">
								<button
									type="submit"
									className="btn"
									onClick={() => console.log('helo')}
								>
									Login
								</button>
								{/*<Link to="/seller" className="btn">
									Sign up
    </Link>*/}
							</Footer>
						</form>
					</div>
				</div>
			</LoginContainer>
		);
	}
}

const LoginContainer = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
	font-family: 'Open Sans', sans-serif;
`;
const Footer = styled.div`
	display: flex;
	justify-content: center;
	justify-content: space-around;
`;
