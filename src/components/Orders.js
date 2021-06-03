// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { useSelector } from 'react-redux';
// import { TotalPrice, selectCartItems } from '../redux/cart/cart';
// import OrderItem from './OrderItem';
// import axios from 'axios';

// // const totalPrice = useSelector(TotalPrice);
// // 	const cartItems = useSelector(selectCartItems);
// // 	console.log(OrderId);
// // const [orderItems, setOrderItems] = useState(null);

// export default class Orders extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			OrderItems: {},
// 		};
// 	}

// 	unsubscribeFromAuth = null;

// 	componentDidMount() {
// 		console.log('NewFetch');
// 		this.unsubscribeFromAuth = async () => {
// 			console.log(this.props.OrderId.orderId);
// 			try {
// 				const response = await axios({
// 					method: 'post',
// 					url: 'http://localhost:4000/get_orderItems',
// 					data: {
// 						orderId: this.props.OrderId.orderId,
// 					},
// 					responseType: 'json',
// 				});
// 				console.log(response.data);
// 				this.setState({ OrderItems: response.data });
// 			} catch (error) {
// 				console.log('Orders Items Cannot Be Fetched');
// 			}
// 		};
// 	}

// 	componentWillUnmount() {
// 		this.unsubscribeFromAuth();
// 	}

// 	render() {
// 		return (
// 			<OrdersContainer>
// 				{Object.keys(this.state.OrderItems).map(function (key) {
// 					console.log(this.state.OrderItems[key]);
// 					return (
// 						<OrderItem
// 							cartItem={this.state.OrderItems[key]}
// 							key={this.state.OrderItems[key].id}
// 						/>
// 					);
// 				})}

// 				{/*OrderItems.map((OrderItem) => {
// 					return <OrderItem cartItem={cartItem} key={cartItem.id} />;
// 				})*/}
// 				{/*<TotalContainer>TOTAL: ${totalPrice}</TotalContainer>*/}
// 			</OrdersContainer>
// 		);
// 	}
// }

// const OrdersContainer = styled.div`
// 	width: 100%;
// `;

// const TotalContainer = styled.div`
// 	margin-top: 30px;
// 	font-size: 36px;
// 	margin-left: 80%;
// `;
