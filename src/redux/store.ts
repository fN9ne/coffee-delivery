import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import { coffeeApi } from "../services/CoffeeServices";
import coffeeSlice from "./reducers/coffeeSlice";
import categoriesSlice from "./reducers/categoriesSlice";

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	coffee: coffeeSlice.reducer,
	categories: categoriesSlice.reducer,
	[coffeeApi.reducerPath]: coffeeApi.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddlewar) => getDefaultMiddlewar().concat(coffeeApi.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
