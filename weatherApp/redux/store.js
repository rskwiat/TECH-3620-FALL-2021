import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./reducer/weatherReducer";

export const store = configureStore({
	reducer: {
		weather: weatherReducer,
	}
});
