import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hidden: true,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		ToggleHiddenState: (state) => {
			state.hidden = !state.hidden;
		},
	},
});

export const { ToggleHiddenState } = cartSlice.actions;

export const selectHiddenState = (state) => state.cart.hidden;

export default cartSlice.reducer;
