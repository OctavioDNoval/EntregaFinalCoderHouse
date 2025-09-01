import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../Services/shopAPI";
import shopSlice from "./Slices/shopSlice";
import userSlice from "./Slices/userSlice"
import { authAPI } from "../Services/authAPI";

export const store = configureStore({
    reducer: {
        shopSlice: shopSlice,
        [shopApi.reducerPath]: shopApi.reducer,
        userSlice: userSlice,
        [authAPI.reducerPath]: authAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware).concat(authAPI.middleware),
});
