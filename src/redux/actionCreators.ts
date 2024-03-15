import cartSlice from "./reducers/cartSlice";
import categoriesSlice from "./reducers/categoriesSlice";
import coffeeSlice from "./reducers/coffeeSlice";

export default {
	...cartSlice.actions,
	...coffeeSlice.actions,
	...categoriesSlice.actions,
};
