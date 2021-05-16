import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './user/user';
import cartReducer from './cart/cart';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

export const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
		directory: directoryReducer,
		shop: shopReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
