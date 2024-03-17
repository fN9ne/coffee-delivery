import { FC, useEffect, useState } from "react";

export const coffeeImageList = [
	"arabe.png",
	"cafe-com-leite.png",
	"capuccino.png",
	"chocolate-quente.png",
	"cubano.png",
	"expresso-americano.png",
	"expresso-cremoso.png",
	"expresso-gelado.png",
	"expresso-tradicional.png",
	"havaiano.png",
	"ilandes.png",
	"latte.png",
	"macchiato.png",
	"mocacino.png",
];

const Loader: FC = () => {
	const [coffeeImage, setCoffeeImage] = useState<string>("");

	const getRandomCoffeeImage = () => {
		const randomIndex = Math.floor(Math.random() * coffeeImageList.length);
		return coffeeImageList[randomIndex];
	};

	useEffect(() => {
		setCoffeeImage(getRandomCoffeeImage());
	}, []);

	return (
		<div className="loader">
			<img src={`/coffee/${coffeeImage}`} alt="coffee loader" className="loader__image" />
		</div>
	);
};

export default Loader;
