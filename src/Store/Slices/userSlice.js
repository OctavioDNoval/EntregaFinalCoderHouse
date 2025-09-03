import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        localId: "",
        image: "",
        name: "",
        lastname: "",
        cel: "",
    },
    reducers: {
        setUserEmail: (state, action) => {
            state.email = action.payload;
        },
        setUserLocalId: (state, action) => {
            state.localId = action.payload;
        },
        setImage: (state, action) => {
            state.image = action.payload;
        },
        setUserName: (state, action) => {
            state.name = action.payload;
        },
        setUserLastName: (state, action) => {
            state.name = action.payload;
        },
        setUserCel: (state, action) => {
            state.cel = action.payload;
        },
    },
});

export const { setUserEmail, setUserLocalId, setImage, setUserName, setUserLastName, setUserCel } = userSlice.actions;
export default userSlice.reducer;
