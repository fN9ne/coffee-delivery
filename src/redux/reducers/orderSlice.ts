import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum PaymentMethods {
	credit = "credit",
	debit = "debit",
	money = "money",
}

interface OrderState {
	street: string;
	number: number;
	postalCode: string;
	additional: string;
	district: string;
	city: string;
	state: string;
	paymentMethod: PaymentMethods;
}

const initialState: OrderState = {
	street: "",
	number: -1,
	postalCode: "",
	additional: "",
	district: "",
	city: "",
	state: "",
	paymentMethod: PaymentMethods.credit,
};

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		setOrder(_, action: PayloadAction<OrderState>) {
			return {
				...action.payload,
			};
		},
	},
});

export default orderSlice;
