import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoffee } from "../../types";

interface CartState {
	cartItems: ICoffee[];
}

const initialState: CartState = {
	cartItems: [],
};

const cartSlice = createSlice({
	name: "test",
	initialState,
	reducers: {
		setCart(state, action: PayloadAction<ICoffee[]>) {
			state.cartItems = action.payload;
		},
		addCoffee(state, action: PayloadAction<ICoffee>) {
			state.cartItems = [...state.cartItems, action.payload];
		},
		removeCoffee(state, action: PayloadAction<number>) {
			state.cartItems = state.cartItems.filter((_, index) => index === action.payload);
		},
	},
});

export default cartSlice;
