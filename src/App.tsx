import { FC, useEffect } from "react";
import { coffeeApi } from "./services/CoffeeServices";
import { useActions } from "./hooks/useActions";

const App: FC = () => {
	const { data: coffees } = coffeeApi.useFetchAllQuery("");
	const { setCategories, updateCategoriesLoadingStatus, setCoffees, updateCoffeesLoadingStatus } = useActions();

	useEffect(() => {
		if (coffees) {
			const data = coffees.record;

			setCategories(data.categories);
			updateCategoriesLoadingStatus(true);
			console.log("Категории были загружены");

			setCoffees(data.coffees);
			updateCoffeesLoadingStatus(true);
			console.log("Кофе был загружен");
		}
	}, [coffees]);

	return <></>;
};

export default App;
