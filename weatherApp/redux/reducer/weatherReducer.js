import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	fahrenheit: false
};

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		toggle: (state, action) => {
			state.fahrenheit = action.payload;
		}
	}
});

export const { toggle } = weatherSlice.actions;

export default weatherSlice.reducer;
