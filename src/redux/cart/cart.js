import { createSlice } from '@reduxjs/toolkit';

import {
	addItemToCart,
	totalItems,
	totalAmount,
	removeItemFromCart,
	clearCartItem,
} from './cart.utils';

const initialState = {
	hidden: false,
	cartItems: [],
	totalItems: 0,
	cartAmount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		ToggleHiddenState: (state) => {
			state.hidden = !state.hidden;
		},
		AddItem: (state, action) => {
			state.cartItems = addItemToCart(state.cartItems, action.payload.Item);
			state.totalItems = totalItems(state.cartItems);
			state.cartAmount = totalAmount(state.cartItems);
		},
		RemoveItem: (state, action) => {
			state.cartItems = removeItemFromCart(
				state.cartItems,
				action.payload.Item
			);
			state.totalItems = totalItems(state.cartItems);
			state.cartAmount = totalAmount(state.cartItems);
		},
		ResetCart: (state) => {
			state.hidden = false;
			state.cartItems = [];
			state.cartAmount = 0;
			state.totalItems = 0;
		},
		ClearCartItem: (state, action) => {
			state.cartItems = clearCartItem(state.cartItems, action.payload.ID);
			state.totalItems = totalItems(state.cartItems);
			state.cartAmount = totalAmount(state.cartItems);
		},
		SetCartitems: (state, action) => {
			state.cartItems = action.payload.CartItems;
			state.totalItems = totalItems(state.cartItems);
			state.cartAmount = totalAmount(state.cartItems);
		},
	},
});

export const {
	ToggleHiddenState,
	AddItem,
	ResetCart,
	ClearCartItem,
	RemoveItem,
	SetCartitems,
} = cartSlice.actions;

export const selectHiddenState = (state) => state.cart.hidden;

export const selectCartItems = (state) => state.cart.cartItems;

export const TotalCartItems = (state) => state.cart.totalItems;

export const TotalPrice = (state) => state.cart.cartAmount;

export default cartSlice.reducer;
