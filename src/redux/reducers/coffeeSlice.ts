import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoffee } from "../../types";

interface CoffeeState {
	coffees: ICoffee[];
}

const initialState: CoffeeState = {
	coffees: [],
};

const coffeeSlice = createSlice({
	name: "coffees",
	initialState,
	reducers: {
		setCoffees(state, action: PayloadAction<ICoffee[]>) {
			state.coffees = action.payload;
		},
	},
});

export default coffeeSlice;
