import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentUser: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload.currentUser;
		},
		resetUser: (state) => {
			state.currentUser = null;
		},
	},
});

export const { setCurrentUser, resetUser } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;

export default userSlice.reducer;
