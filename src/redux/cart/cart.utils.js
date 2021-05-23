import {
	Add_Cart_Item,
	Clear_Cart_Item,
	Remove_Cart_Item,
	Insert_Cart_Item,
} from './cart.fetch';

export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		cartItems = cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
		Add_Cart_Item(cartItemToAdd);
		return cartItems;
	}

	Insert_Cart_Item(cartItemToAdd);
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		Clear_Cart_Item(cartItemToRemove.id);
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	cartItems = cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
	Remove_Cart_Item(cartItemToRemove);
	return cartItems;
};

export const clearCartItem = (cartItems, ID) => {
	cartItems = cartItems.filter((cartItem) => cartItem.id !== ID);
	Clear_Cart_Item(ID);
	return cartItems;
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
