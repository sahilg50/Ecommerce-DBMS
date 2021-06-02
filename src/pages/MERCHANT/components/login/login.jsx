import React from 'react';
import styled from 'styled-components';
import loginImg from '../../login.svg';

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};

		this.handleUserName = this.handleUserName.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let name = this.state.itemName;
		this.setState(
			{
				username: this.state.username,
			},
			function () {
				alert(this.state.username); // Shows the right value!
				console.log(this.state.username);
			}
		);
	};

	handleUserName = (event) => {
		this.setState({ username: event.target.value });
	};

	handlePassword = (event) => {
		this.setState({ password: event.target.value });
	};

	render() {
		return (
			<LoginContainer className="base-container">
				<div>
					<div className="header">Login</div>
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
								<button type="submit" className="btn">
									Login
								</button>
								<button type="button" className="btn">
									Google
								</button>
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
