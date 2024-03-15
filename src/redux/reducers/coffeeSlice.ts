import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoffee } from "../../types";

interface CoffeeState {
	coffees: ICoffee[];
	isLoaded: boolean;
}

const initialState: CoffeeState = {
	coffees: [],
	isLoaded: false,
};

const coffeeSlice = createSlice({
	name: "coffees",
	initialState,
	reducers: {
		setCoffees(state, action: PayloadAction<ICoffee[]>) {
			state.coffees = action.payload;
		},
		updateCoffeesLoadingStatus(state, action: PayloadAction<boolean>) {
			state.isLoaded = action.payload;
		},
	},
});

export default coffeeSlice;
