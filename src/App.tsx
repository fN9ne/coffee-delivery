import { FC } from "react";
import { coffeeApi } from "./services/CoffeeServices";

const App: FC = () => {
	const { data: coffees } = coffeeApi.useFetchAllQuery("");

	console.log(coffees?.record);

	return <></>;
};

export default App;
