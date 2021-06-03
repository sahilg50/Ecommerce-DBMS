import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import userReducer from './user/user';
import cartReducer from './cart/cart';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import merchantReducer from './merchant/merchant.reducer';

export const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
		directory: directoryReducer,
		shop: shopReducer,
		merchant: merchantReducer,
	},
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});
