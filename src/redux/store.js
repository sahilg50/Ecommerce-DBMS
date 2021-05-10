import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './user/user';

export const store = configureStore({
	reducer: { user: userReducer },
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
