import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import AdminImg from './admin.svg';

export const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const Merchant_login = async () => {
		try {
			const response = await axios({
				method: 'post',
				//  headers: { 'Content-Type': 'application/json' },
				url: 'http://localhost:4000/seller_login',
				data: {
					sellerusername: username,
					password: password,
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
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		Merchant_login();
		setUsername('');
		setPassword('');
	};

	return (
		<LoginContainer className="base-container">
			<div>
				<div className="header">ADMIN</div>
				<div className="content">
					<div className="image">
						<img src={AdminImg} alt="" />
					</div>

					<form className="form" onSubmit={handleSubmit}>
						<label className="form-group" htmlFor="username">
							Username
							<input
								type="text"
								name="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder="username"
							/>
						</label>

						<label className="form-group" htmlFor="password">
							Password
							<input
								type="password"
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="password"
							/>
						</label>
						<Footer className="footer">
							<button type="submit" className="btn">
								Login
							</button>
						</Footer>
					</form>
				</div>
			</div>
		</LoginContainer>
	);
};

const LoginContainer = styled.div`
	@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
	font-family: 'Open Sans', sans-serif;
`;
const Footer = styled.div`
	display: flex;
	justify-content: center;
	justify-content: space-around;
`;
