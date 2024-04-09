import { FC, FormEvent, useEffect, useState } from "react";
import AnimatePage from "../../components/AnimatePage";
import { useAppSelector } from "../../hooks/useAppSelector";
import CartItem from "./CartItem";

import MarkerIcon from "../../img/icons/marker2.svg?react";
import DollarIcon from "../../img/icons/dollar.svg?react";

import CreditIcon from "../../img/icons/card.svg?react";
import BankIcon from "../../img/icons/bank.svg?react";
import BanknoteIcon from "../../img/icons/banknote.svg?react";

import Input, { InputType, InputWides } from "../../components/UI/Input";
import { useInput } from "../../hooks/useInput";
import { ILocation } from "../../redux/reducers/locationSlice";
import Selectbox, { ISelect } from "../../components/Selectbox";
import { ICartCoffee } from "../../redux/reducers/cartSlice";
import Button, { ButtonType } from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { PaymentMethods } from "../../redux/reducers/orderSlice";

const Checkout: FC = () => {
	const { cartItems } = useAppSelector((state) => state.cart);
	const { currentLocation, isLoaded } = useAppSelector((state) => state.location);
	const coffees = useAppSelector((state) => state.coffee);

	const [location] = useState<ILocation>(currentLocation);
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>(PaymentMethods.credit);

	const { setOrder } = useActions();

	const postalCode = useInput("", { regexp: /^\d{5}-\d{3}$/gm });
	const street = useInput("", { minLength: 5 });
	const number = useInput("", {});
	const additional = useInput("", {});
	const district = useInput("", { minLength: 4 });
	const city = useInput(location.location, {});
	const state = useInput(location.state, {});

	const [isFormValid, setIsFormValid] = useState<boolean>(false);

	useEffect(() => {
		const isValidString = (input: string): boolean => input !== "" && !/^\s/.test(input);

		setIsFormValid(
			isValidString(city.value) &&
				isValidString(state.value) &&
				postalCode.isInputValid &&
				street.isInputValid &&
				district.isInputValid &&
				isValidString(number.value) &&
				Number(number.value) >= 0
		);
	}, [postalCode.isInputValid, street.isInputValid, number.value, district.isInputValid, city.value, state.value]);

	const paymantOptions: ISelect[] = [
		{
			text: "Cartão de crédito",
			value: PaymentMethods.credit,
			icon: <CreditIcon />,
		},
		{
			text: "cartão de débito",
			value: PaymentMethods.debit,
			icon: <BankIcon />,
		},
		{
			text: "dinheiro",
			value: PaymentMethods.money,
			icon: <BanknoteIcon />,
		},
	];

	const calcCoffePrice = (cartItems: ICartCoffee[]): number | null => {
		return isLoaded && coffees.isLoaded
			? cartItems
					.map((cartItem) => {
						const coffee = coffees.coffees.find((coffee) => coffee.id === cartItem.id);

						return coffee ? (coffee.price + currentLocation.allowance) * cartItem.amount : 0;
					})
					.reduce((sum, current) => sum + current, 0)
			: null;
	};

	const [coffeePrice, setCoffeePrice] = useState<number | null>(calcCoffePrice(cartItems));

	const navigate = useNavigate();

	const applyOrder = () => {
		if (isFormValid) {
			setOrder({
				additional: additional.value,
				city: city.value,
				district: district.value,
				number: +number.value,
				paymentMethod: paymentMethod,
				postalCode: postalCode.value,
				state: state.value,
				street: street.value,
			});

			navigate("/success");
		}
	};

	useEffect(() => {
		setCoffeePrice(calcCoffePrice(cartItems));
	}, [cartItems, currentLocation, isLoaded, coffees.isLoaded]);

	return (
		<AnimatePage className="checkout">
			<div className="checkout__container container">
				{cartItems.length > 0 ? (
					<>
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
										onBlur={postalCode.onBlur}
										value={postalCode.value}
										type={InputType.text}
										isError={postalCode.isDirty && !postalCode.isInputValid}
										errorMsg="o CEP deve estar no formato «99999-999»"
									/>
									<Input
										placeholder="Rua"
										wide={InputWides.full}
										onChange={street.onChange}
										onBlur={street.onBlur}
										value={street.value}
										type={InputType.text}
										isError={street.isDirty && !street.isInputValid}
										errorMsg="por favor, indique a rua"
									/>
									<Input
										placeholder="Número"
										wide={InputWides.third}
										onChange={number.onChange}
										onBlur={number.onBlur}
										value={number.value}
										type={InputType.text}
										isError={number.isDirty && (number.value === "" || /^\s/.test(number.value) || Number(number.value) < 0)}
										errorMsg="por favor, indique o número correto da casa"
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
										onBlur={district.onBlur}
										value={district.value}
										type={InputType.text}
										isError={district.isDirty && !district.isInputValid}
										errorMsg="por favor indique a área"
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
							<form
								action="#"
								onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
								className="delivery-address-form"
							>
								<div className="delivery-address-form__header">
									<DollarIcon />
									<div>
										<div className="delivery-address-form__title text text_m">Pagamento</div>
										<div className="delivery-address-form__subtitle text text_s">
											O pagamento é feito na entrega. Escolha a forma que deseja pagar
										</div>
									</div>
								</div>
								<div className="delivery-address-form__content">
									<Selectbox options={paymantOptions} value={paymentMethod} setValue={setPaymentMethod} />
								</div>
							</form>
						</div>
						<aside className="checkout__side">
							<h5>Cafés selecionados</h5>
							<div className="cart">
								<div className="cart__body">
									{cartItems.map((cartItem, index) => (
										<CartItem {...cartItem} key={index} />
									))}
								</div>
								<div className="cart__footer">
									<div className="cart__price">
										<div className="text text_s">Total de itens</div>
										<div className="text text_m">R$ {coffeePrice ? coffeePrice.toFixed(2).replace(".", ",") : "..."}</div>
									</div>
									<div className="cart__price cart__price_delivery">
										<div className="text text_s">Entrega</div>
										<div className="text text_m">R$ {(3.5 + currentLocation.allowance / 2).toFixed(2).replace(".", ",")}</div>
									</div>
									<div className="cart__price cart__price_total">
										<div className="text text_l text_bold">Total</div>
										<div className="text text_l text_bold">
											R${" "}
											{coffeePrice ? (coffeePrice + (3.5 + currentLocation.allowance / 2)).toFixed(2).replace(".", ",") : "..."}
										</div>
									</div>
									<Button type={ButtonType.primary} disabled={!isFormValid} onClick={applyOrder}>
										Confirmar pedido
									</Button>
								</div>
							</div>
						</aside>
					</>
				) : (
					<div className="cart-empty">
						<div className="cart-empty__text-container">
							<h2>O carrinho de Compras está vazio</h2>
							<p className="text text_s">Escolha um dos melhores cafés do nosso catálogo</p>
						</div>
						<Button type={ButtonType.primary} onClick={() => navigate("/")}>
							Escolha um café
						</Button>
					</div>
				)}
			</div>
		</AnimatePage>
	);
};

export default Checkout;
