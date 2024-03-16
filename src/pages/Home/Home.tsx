import { FC } from "react";
import AnimatePage from "../../components/AnimatePage";
import MainScreen from "./MainScreen";
import OurCoffees from "./OurCoffees";

const Home: FC = () => {
	return (
		<AnimatePage>
			<MainScreen />
			<OurCoffees />
		</AnimatePage>
	);
};

export default Home;
