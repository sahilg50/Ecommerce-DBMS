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
	}

	render() {
		const handleSubmit = () => {
			alert('SIGN');
		};

		return (
			<LoginContainer className="base-container" ref={this.props.containerRef}>
				<form onSubmit={handleSubmit}>
					<div className="header">Login</div>
					<div className="content">
						<div className="image">
							<img src={loginImg} alt="" />
						</div>

						<div className="form">
							<div className="form-group">
								<label htmlFor="username">Username</label>
								<input type="text" name="username" placeholder="username" />
							</div>

							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input type="password" name="password" placeholder="password" />
							</div>
						</div>
					</div>
					<Footer className="footer">
						<button type="submit" className="btn">
							Login
						</button>
						<button type="button" className="btn">
							Google
						</button>
					</Footer>
				</form>
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
