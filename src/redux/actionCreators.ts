import cartSlice from "./reducers/cartSlice";
import coffeeSlice from "./reducers/coffeeSlice";

export default {
	...cartSlice.actions,
	...coffeeSlice.actions,
};
