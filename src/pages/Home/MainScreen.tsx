import { FC } from "react";

import Background from "../../img/background.svg?react";
import Coffee from "../../img/coffee.png";

import CartIcon from "../../img/icons/cart.svg?react";
import BoxIcon from "../../img/icons/box.svg?react";
import TimeIcon from "../../img/icons/time.svg?react";
import CoffeeIcon from "../../img/icons/coffee.svg?react";

import Advantage, { AdvantageColor, IAdvantage } from "./Advantage";

const MainScreen: FC = () => {
	const advantages: IAdvantage[] = [
		{ color: AdvantageColor.darkYellow, icon: <CartIcon />, text: "Compra simples e segura" },
		{ color: AdvantageColor.gray, icon: <BoxIcon />, text: "Embalagem mantém o café intacto" },
		{ color: AdvantageColor.yellow, icon: <TimeIcon />, text: "Entrega rápida e rastreada" },
		{ color: AdvantageColor.purple, icon: <CoffeeIcon />, text: "O café chega fresquinho até você" },
	];

	return (
		<div className="welcome">
			<Background className="welcome__background" />
			<div className="welcome__container container">
				<div className="welcome__content">
					<div className="welcome__text-block">
						<h1>Encontre o café perfeito para qualquer hora do dia</h1>
						<div className="text text_l">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</div>
					</div>
					<div className="welcome__advantages">
						{advantages.map((advantage, index) => (
							<Advantage {...advantage} key={index} />
						))}
					</div>
				</div>
				<img src={Coffee} alt="Coffee illustration" className="welcome__illustration" />
			</div>
		</div>
	);
};

export default MainScreen;
