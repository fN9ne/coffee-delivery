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

	const { removeCoffee } = useActions();

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
					<Input onChange={localAmount.onChange} type={InputType.number} value={localAmount.value} />
					<Button icon={<TrashIcon />} type={ButtonType.secondary} onClick={handleRemove}>
						Remover
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
