import { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { AnimatePresence as AP, motion as m } from "framer-motion";
import CoffeeCard from "./CoffeeCard";
import Loader from "../../components/Loader";

const OurCoffees: FC = () => {
	const { coffees, isLoaded } = useAppSelector((state) => state.coffee);

	const transitions = {
		initial: { opacity: 0, scale: 0.95 },
		animate: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.95 },
	};

	return (
		<div className="our-coffees">
			<div className="our-coffees__container container">
				<h2>Nossos cafés</h2>
				<AP mode="wait" initial={false}>
					{!isLoaded ? (
						<m.div key="loader" {...transitions}>
							<Loader />
						</m.div>
					) : (
						<m.div key="our coffee" {...transitions} className="our-coffees__content">
							{coffees.map((coffee, index) => (
								<CoffeeCard {...coffee} key={index} />
							))}
						</m.div>
					)}
				</AP>
			</div>
		</div>
	);
};

export default OurCoffees;
