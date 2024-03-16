import { FC, useEffect } from "react";
import { coffeeApi } from "./services/CoffeeServices";
import { useActions } from "./hooks/useActions";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence as AP } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout";

const App: FC = () => {
	const { data } = coffeeApi.useFetchAllQuery("");
	const {
		setCategories,
		updateCategoriesLoadingStatus,
		setCoffees,
		updateCoffeesLoadingStatus,
		setLocations,
		updateLocationsLoadingStatus,
		setCart,
		setCurrentLocation,
	} = useActions();

	const location = useLocation();

	useEffect(() => {
		if (data) {
			const locations = data.record.locations.map((location) => ({
				location: location.split(", ")[0],
				state: location.split(", ")[1],
				allowance: Number(location.split(", ")[2]),
			}));

			setCategories(data.record.categories);
			updateCategoriesLoadingStatus(true);
			console.log("Категории были загружены");

			setCoffees(data.record.coffees);
			updateCoffeesLoadingStatus(true);
			console.log("Кофе был загружен");

			setLocations(locations);
			updateLocationsLoadingStatus(true);
			console.log("Адреса были загружены");
		}
	}, [data]);

	useEffect(() => {
		const cartLS = localStorage.getItem("cart");
		const locationLS = localStorage.getItem("location");

		if (cartLS) {
			setCart(JSON.parse(cartLS));
		}

		if (locationLS) {
			setCurrentLocation(JSON.parse(locationLS));
		}
	}, []);

	return (
		<AP mode="wait" initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
				</Route>
			</Routes>
		</AP>
	);
};

export default App;
