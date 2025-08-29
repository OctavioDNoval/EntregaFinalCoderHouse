import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "../Services/shopAPI";

export const store = configureStore({
    reducer: {
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
});
