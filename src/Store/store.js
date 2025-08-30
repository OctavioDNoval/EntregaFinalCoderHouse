import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../Services/shopAPI";
import shopSlice from "./Slices/shopSlice";

export const store = configureStore({
    reducer: {
        shopSlice: shopSlice,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
});
