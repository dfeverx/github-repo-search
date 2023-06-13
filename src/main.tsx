// src/index.tsx

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App";
import repositoriesReducer from "./store/repositoriesSlice";

const theme = {};

const store = configureStore({
	reducer: {
		repositories: repositoriesReducer,
	},
});
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</Provider>
);
