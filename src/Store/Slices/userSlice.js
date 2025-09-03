import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		email: "odnr2004@gmail.com",
		localId: "",
	},
	reducers: {
		setUserEmail: (state, action) => {
			state.email = action.payload;
		},
		setLocalId: (state, action) => {
			state.localId = action.payload;
		},
	},
});

export const { setUserEmail, setLocalId } = userSlice.actions;
export default userSlice.reducer;
