export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const totalItems = (cartItems) => {
	const TotalItems = cartItems.reduce(
		(accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
		0
	);
	return TotalItems;
};

export const totalAmount = (cartItems) => {
	const TotalPrice = cartItems.reduce(
		(accumulatedQuantity, item) =>
			accumulatedQuantity + item.price * item.quantity,
		0
	);
	return TotalPrice;
};
