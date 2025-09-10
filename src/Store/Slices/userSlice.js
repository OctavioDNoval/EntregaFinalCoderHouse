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
			state.lastname = action.payload;
		},
		setUserCel: (state, action) => {
			state.cel = action.payload;
		},
		setUser: (state, action) => {
			state.name = action.payload.name;
			state.lastname = action.payload.lastname;
			state.cel = action.payload.cel;
		},
		logout: (state) => {
			state.email = "";
			state.localId = "";
			state.name = "";
			state.lastname = "";
			state.cel = "";
			state.image = "";
		},
	},
});

export const {
	setUserEmail,
	setUserLocalId,
	setImage,
	setUserName,
	setUserLastName,
	setUserCel,
	logout,
	setUser,
} = userSlice.actions;
export default userSlice.reducer;
