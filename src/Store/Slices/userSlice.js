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
		setLocalId: (state, action) => {
			state.localId = action.payload;
		},
		setImage: (state, action) => {
			state.image = action.payload;
		},
		setName: (state, action) => {
			state.name = action.payload;
		},
		setLastName: (state, action) => {
			state.name = action.payload;
		},
		setCel: (state, action) => {
			state.cel = action.payload;
		},
	},
});

export const {
	setUserEmail,
	setLocalId,
	setImage,
	setUserName,
	setUserLastName,
	setUserCel,
} = userSlice.actions;
export default userSlice.reducer;
