import { FC, FormEvent, useState } from "react";
import AnimatePage from "../../components/AnimatePage";
import { useAppSelector } from "../../hooks/useAppSelector";
import CartItem from "./CartItem";

import MarkerIcon from "../../img/icons/marker2.svg?react";
import Input, { InputType, InputWides } from "../../components/UI/Input";
import { useInput } from "../../hooks/useInput";
import { ILocation } from "../../redux/reducers/locationSlice";

const Checkout: FC = () => {
	const { cartItems } = useAppSelector((state) => state.cart);
	const { currentLocation } = useAppSelector((state) => state.location);

	const [location, setLocation] = useState<ILocation>(currentLocation);

	const postalCode = useInput("", {
		mask: {
			format: "#####-###",
			onlyDigits: true,
		},
	});

	const street = useInput("", {});
	const number = useInput("", {});
	const additional = useInput("", {});
	const district = useInput("", {});
	const city = useInput(location.location, {});
	const state = useInput(location.state, {});

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
							<Input
								placeholder="CEP"
								wide={InputWides.third}
								onChange={postalCode.onChange}
								value={postalCode.value}
								type={InputType.text}
							/>
							<Input
								placeholder="Rua"
								wide={InputWides.full}
								onChange={street.onChange}
								value={street.value}
								type={InputType.text}
							/>
							<Input
								placeholder="Número"
								wide={InputWides.third}
								onChange={number.onChange}
								value={number.value}
								type={InputType.text}
							/>
							<Input
								placeholder="Complemento"
								wide={InputWides.fit}
								isOptional
								onChange={additional.onChange}
								value={additional.value}
								type={InputType.text}
							/>
							<Input
								placeholder="Bairro"
								wide={InputWides.third}
								onChange={district.onChange}
								value={district.value}
								type={InputType.text}
							/>
							<Input
								placeholder="Cidade"
								wide={InputWides.fit}
								onChange={city.onChange}
								value={city.value}
								type={InputType.text}
							/>
							<Input
								placeholder="UF"
								wide={InputWides.small}
								onChange={state.onChange}
								value={state.value}
								type={InputType.text}
							/>
						</div>
					</form>
				</div>
				<aside className="checkout__side">
					<h5>Cafés selecionados</h5>
					<div className="cart">
						{cartItems.map((cartItem) => (
							<CartItem {...cartItem} key={cartItem.id} />
						))}
					</div>
				</aside>
			</div>
		</AnimatePage>
	);
};

export default Checkout;
