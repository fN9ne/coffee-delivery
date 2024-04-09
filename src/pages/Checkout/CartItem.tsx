import { FC } from "react";
import { ICartCoffee } from "../../redux/reducers/cartSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useInput } from "../../hooks/useInput";
import Input, { InputType } from "../../components/UI/Input";
import Button, { ButtonType } from "../../components/UI/Button";
import { useActions } from "../../hooks/useActions";

import TrashIcon from "../../img/icons/trash.svg?react";

const CartItem: FC<ICartCoffee> = ({ id, amount }) => {
	const { coffees } = useAppSelector((state) => state.coffee);
	const { cartItems } = useAppSelector((state) => state.cart);
	const { currentLocation } = useAppSelector((state) => state.location);

	const { removeCoffee, setCart } = useActions();

	const getCoffee = coffees.find((coffee) => coffee.id === id);

	const localAmount = useInput(amount + "", {});

	const handleRemove = () => {
		removeCoffee(id);
		localStorage.setItem("cart", JSON.stringify([cartItems.filter((cartItem) => cartItem.id !== id)]));
	};

	return (
		<div className="cart-item">
			<img src={`/coffee/${getCoffee?.img}`} alt={getCoffee?.name} className="cart-item__image" />
			<div className="cart-item__content">
				<div className="cart-item__name text text_m">{getCoffee?.name}</div>
				<div className="cart-item__actions">
					<Input
						onChange={(value: string) => {
							const newItems = cartItems.map((cartItem) => {
								if (cartItem.id === id) {
									return {
										id,
										amount: Number(value),
									};
								}
								return cartItem;
							});

							setCart(newItems);

							localAmount.onChange(value);
							localStorage.setItem("cart", JSON.stringify(newItems));
						}}
						type={InputType.number}
						value={localAmount.value}
					/>
					<Button icon={<TrashIcon />} type={ButtonType.secondary} onClick={handleRemove}>
						Remover
					</Button>
				</div>
			</div>
			<div className="cart-item__price">
				R$ {((getCoffee?.price! + currentLocation.allowance) * Number(localAmount.value)).toFixed(2).replace(".", ",")}
			</div>
		</div>
	);
};

export default CartItem;
