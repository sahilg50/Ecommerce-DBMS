import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './user/user';
import cartReducer from './cart/cart';

export const store = configureStore({
	reducer: { user: userReducer, cart: cartReducer },
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
