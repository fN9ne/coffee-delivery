import { FC } from "react";
import AnimatePage from "../../components/AnimatePage";
import Illustration from "../../img/delivery.svg?react";
import LocationIcon from "../../img/icons/marker.svg?react";
import TimeIcon from "../../img/icons/time.svg?react";
import DollarIcon from "../../img/icons/dollar.svg?react";
import { useAppSelector } from "../../hooks/useAppSelector";

const Success: FC = () => {
	const { street, number, district, city, state, paymentMethod } = useAppSelector((state) => state.order);

	const paymentMethodText = {
		credit: "Cartão de Crédito",
		debit: "Cartão de débito",
		money: "Dinheiro",
	};

	return (
		<AnimatePage className="success">
			<div className="success__container container">
				<div className="success__content">
					<h2>Uhu! Pedido confirmado</h2>
					<div className="text text_l">Agora é só aguardar que logo o café chegará até você</div>
					<div className="success-widget">
						<div className="success-widget__wrapper">
							<div className="success-widget__item">
								<div className="success-widget__icon">
									<LocationIcon />
								</div>
								<div className="success-widget__text">
									Entrege em{" "}
									<span>
										{street}, {number}
									</span>
									<br />
									{district} - {city}, {state}
								</div>
							</div>
							<div className="success-widget__item">
								<div className="success-widget__icon">
									<TimeIcon />
								</div>
								<div className="success-widget__text">
									Previsão de entrega
									<br />
									<span>20 min - 30 min</span>
								</div>
							</div>
							<div className="success-widget__item">
								<div className="success-widget__icon">
									<DollarIcon />
								</div>
								<div className="success-widget__text">
									Pagamento na entrega
									<br />
									<span>{paymentMethodText[paymentMethod]}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Illustration className="success__illustration" />
			</div>
		</AnimatePage>
	);
};

export default Success;
