import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./auth/auth-slice";
import {loadingReducer} from "./loading/loading-slice";

const rootReducer = combineReducers({
	auth: authReducer,
	loading: loadingReducer,
});

export const store = configureStore({reducer: rootReducer});