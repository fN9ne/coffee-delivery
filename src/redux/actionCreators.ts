import cartSlice from "./reducers/cartSlice";
import categoriesSlice from "./reducers/categoriesSlice";
import coffeeSlice from "./reducers/coffeeSlice";
import locationSlice from "./reducers/locationSlice";

export default {
	...cartSlice.actions,
	...coffeeSlice.actions,
	...categoriesSlice.actions,
	...locationSlice.actions,
};
