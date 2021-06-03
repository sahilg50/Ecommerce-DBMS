import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentMerchant: null,
};

const merchantSlice = createSlice({
	name: 'merchant',
	initialState,
	reducers: {
		setCurrentMerchant: (state, action) => {
			state.currentMerchant = action.payload.currentMerchant;
		},
		resetMerchant: (state) => {
			state.currentMerchant = null;
		},
	},
});

export const { setCurrentMerchant, resetMerchant } = merchantSlice.actions;

export const selectCurrentMerchant = (state) => state.merchant.currentMerchant;

export default merchantSlice.reducer;
