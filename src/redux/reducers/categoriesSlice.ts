import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../types";

interface CategoriesState {
	categories: ICategory[];
	isLoaded: boolean;
}

const initialState: CategoriesState = {
	categories: [],
	isLoaded: false,
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		setCategories(state, action: PayloadAction<ICategory[]>) {
			state.categories = action.payload;
		},
		updateCategoriesLoadingStatus(state, action: PayloadAction<boolean>) {
			state.isLoaded = action.payload;
		},
	},
});

export default categoriesSlice;
