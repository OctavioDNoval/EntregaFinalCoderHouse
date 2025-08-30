import { createSlice } from "@reduxjs/toolkit";
import { useGetCategoriesQuery } from "../../Services/shopAPI";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        categorySelected: null,
        categorySelectedName: "",
        productSelected: null,
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload;
        },
        setCategoryName: (state, action) => {
            state.categorySelectedName = action.payload;
        },
        setProductSelected: (state, action) => {
            state.productSelected = action.payload;
        },
    },
});

export const { setCategorySelected, setProductSelected, setCategoryName } = shopSlice.actions;

export default shopSlice.reducer;
