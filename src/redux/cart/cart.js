import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart } from './cart.utils';

const initialState = {
	hidden: false,
	cartItems: [],
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
		},
		Reset: (state) => {
			state.hidden = false;
			state.cartItems = [];
		},
	},
});

export const { ToggleHiddenState, AddItem, Reset } = cartSlice.actions;

export const selectHiddenState = (state) => state.cart.hidden;

export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
