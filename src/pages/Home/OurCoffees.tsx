import { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import CoffeeCard from "./CoffeeCard";

const OurCoffees: FC = () => {
	const { coffees } = useAppSelector((state) => state.coffee);

	return (
		<div className="our-coffees">
			<div className="our-coffees__container container">
				<h2>Nossos cafés</h2>
				<div className="our-coffees__content">
					{coffees.map((coffee, index) => (
						<CoffeeCard {...coffee} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default OurCoffees;
