import { createSlice } from '@reduxjs/toolkit';
import {
	addItemToCart,
	totalItems,
	totalAmount,
	removeItemFromCart,
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
		Reset: (state) => {
			state.hidden = false;
			state.cartItems = [];
		},
		ClearCartItem: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(cartItem) => cartItem.id !== action.payload.ID
			);
			state.totalItems = totalItems(state.cartItems);
			state.cartAmount = totalAmount(state.cartItems);
		},
	},
});

export const { ToggleHiddenState, AddItem, Reset, ClearCartItem, RemoveItem } =
	cartSlice.actions;

export const selectHiddenState = (state) => state.cart.hidden;

export const selectCartItems = (state) => state.cart.cartItems;

export const TotalCartItems = (state) => state.cart.totalItems;

export const TotalPrice = (state) => state.cart.cartAmount;

export default cartSlice.reducer;
