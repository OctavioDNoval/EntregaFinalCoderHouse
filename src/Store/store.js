import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../Services/shopAPI";
import shopSlice from "./Slices/shopSlice";
import userSlice from "./Slices/userSlice";
import { authAPI } from "../Services/authAPI";
import { profileAPI } from "../Services/profileAPI";

export const store = configureStore({
	reducer: {
		shopSlice: shopSlice,
		[shopApi.reducerPath]: shopApi.reducer,
		userSlice: userSlice,
		[authAPI.reducerPath]: authAPI.reducer,
		[profileAPI.reducerPath]: profileAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(shopApi.middleware)
			.concat(authAPI.middleware)
			.concat(profileAPI.middleware),
});
