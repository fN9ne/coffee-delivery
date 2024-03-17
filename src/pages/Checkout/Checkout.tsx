import { FC, FormEvent } from "react";
import AnimatePage from "../../components/AnimatePage";
import { useAppSelector } from "../../hooks/useAppSelector";
import CartItem from "./CartItem";

import MarkerIcon from "../../img/icons/marker2.svg?react";
import Input, { InputType } from "../../components/UI/Input";
import { useInput } from "../../hooks/useInput";

const Checkout: FC = () => {
	const { cartItems } = useAppSelector((state) => state.cart);

	const postalCode = useInput("", {
		mask: {
			format: "#####-###",
			onlyDigits: true,
		},
	});

	return (
		<AnimatePage className="checkout">
			<div className="checkout__container container">
				<div className="checkout__main">
					<h5>Complete seu pedido</h5>
					<form
						action="#"
						onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
						className="delivery-address-form"
					>
						<div className="delivery-address-form__header">
							<MarkerIcon />
							<div>
								<div className="delivery-address-form__title text text_m">Endereço de Entrega</div>
								<div className="delivery-address-form__subtitle text text_s">
									Informe o endereço onde deseja receber seu pedido
								</div>
							</div>
						</div>
						<div className="delivery-address-form__body">
							<Input onChange={postalCode.onChange} value={postalCode.value} type={InputType.text} />
						</div>
					</form>
				</div>
				{/* <aside className="checkout__side">
					<h5>Cafés selecionados</h5>
					<div className="cart">
						{cartItems.map((cartItem) => (
							<CartItem {...cartItem} key={cartItem.id} />
						))}
					</div>
				</aside> */}
			</div>
		</AnimatePage>
	);
};

export default Checkout;
