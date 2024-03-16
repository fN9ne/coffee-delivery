import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ICartCoffee = { id: number } & { amount: number };

interface CartState {
	cartItems: ICartCoffee[];
}

const initialState: CartState = {
	cartItems: [],
};

const cartSlice = createSlice({
	name: "test",
	initialState,
	reducers: {
		setCart(state, action: PayloadAction<ICartCoffee[]>) {
			state.cartItems = action.payload;
		},
		addCoffee(state, action: PayloadAction<ICartCoffee>) {
			state.cartItems = [...state.cartItems, action.payload];
		},
		removeCoffee(state, action: PayloadAction<number>) {
			state.cartItems = state.cartItems.filter((_, index) => index === action.payload);
		},
	},
});

export default cartSlice;
