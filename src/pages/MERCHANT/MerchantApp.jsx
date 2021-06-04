import React from 'react';
import { Login } from './components/login/index';
import styled from 'styled-components';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogginActive: true,
		};
	}

	componentDidMount() {
		this.rightSide.classList.add('right');
	}

	render() {
		return (
			<AppContainer>
				<LoginContainer>
					<SubContainer>
						<Login />
					</SubContainer>
					<RightSide containerRef={(ref) => (this.rightSide = ref)} />
				</LoginContainer>
			</AppContainer>
		);
	}
}

const RightSide = (props) => {
	return (
		<RightSideContainer ref={props.containerRef}>
			<Text>'Welcome!'</Text>
		</RightSideContainer>
	);
};

export default App;

const AppContainer = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 3%;

	.btn {
		font-size: 21px;
		padding: 5px 20px;
		border: 0;
		background-color: #282c34;
		color: #fff;
		border-radius: 3px;
		transition: all 250ms ease-in-out;
		cursor: pointer;
		&:hover {
			background-color: #fdb302;
		}
		&:focus {
			outline: none;
		}
	}
`;

const LoginContainer = styled.div`
	width: 27em;
	height: 40em;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5px;
	position: relative;
	z-index: 99;
`;

const SubContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
	border-radius: 4px;
	position: relative;
	z-index: 99;
	width: 100%;
	height: 100%;
	z-index: 99;
	padding: 17px 10px;
`;

const RightSideContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 90%;
	background-color: #282c34;
	width: 100%;
	position: absolute;
	right: -34%;
	border-radius: 6px;
	z-index: 1;
	transition: all 400ms ease-in-out;
	cursor: pointer;
	box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.281);

	&.right {
		right: -40%;
		align-items: flex-end;
		&:hover {
			right: -45%;
		}
	}
	&.left {
		right: 40%;
		align-items: flex-start;
		&:hover {
			right: 45%;
		}
	}
`;

const Text = styled.div`
	font-size: 21px;
	font-weight: 500;
	color: #fff;
	margin-right: 3em;
	margin-left: 3em;
`;
