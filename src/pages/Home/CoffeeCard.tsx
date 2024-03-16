import { FC, useState } from "react";
import { ICoffee } from "../../types";
import { useAppSelector } from "../../hooks/useAppSelector";
import Input, { InputType } from "../../components/UI/Input";
import { useInput } from "../../hooks/useInput";

import CartIcon from "../../img/icons/cart.svg?react";
import Button, { ButtonType } from "../../components/UI/Button";
import { useActions } from "../../hooks/useActions";
import { useNavigate } from "react-router-dom";

const CoffeeCard: FC<ICoffee> = ({ id, img, name, description, categories, price }) => {
	const { categories: categoriesData } = useAppSelector((state) => state.categories);
	const { currentLocation } = useAppSelector((state) => state.location);

	const { cartItems } = useAppSelector((state) => state.cart);
	const { addCoffee } = useActions();

	const navigate = useNavigate();

	const [isInCart, setIsInCart] = useState<boolean>(!!cartItems.find((cartItem) => cartItem.id === id));

	const getCategoryName = (id: number) => {
		const category = categoriesData.find((category) => category.id === id);
		return category ? category.name : null;
	};

	const amount = useInput(isInCart ? cartItems.find((cartItem) => cartItem.id === id)!.amount + "" : "1", {});

	const handleAddToCart = () => {
		if (isInCart) {
			navigate("/checkout");
		} else {
			const newCartItem = { amount: Number(amount.value), id };

			addCoffee(newCartItem);
			localStorage.setItem("cart", JSON.stringify([...cartItems, newCartItem]));

			setIsInCart(true);
		}
	};

	return (
		<div className="coffee-card">
			<img src={`/coffee/${img}`} alt={name} className="coffee-card__image" />
			<div className="coffee-card__categories">
				{categories.map((category, index) => (
					<div className="coffee-card__category tag" key={index}>
						{getCategoryName(category)}
					</div>
				))}
			</div>
			<h4>{name}</h4>
			<div className="coffee-card__description text text_s">{description}</div>
			<div className="coffee-card__footer">
				<div className="coffee-card__price">
					<span className="text text_s">R$ </span>
					<h3>{(price + currentLocation.allowance).toFixed(2).replace(".", ",")}</h3>
				</div>
				<div className="coffee-card__cart">
					{!isInCart && <Input onChange={amount.onChange} type={InputType.number} value={amount.value} />}
					<Button onClick={handleAddToCart} type={isInCart ? ButtonType.purple : ButtonType.icon} icon={<CartIcon />}>
						{isInCart ? "carrinho" : ""}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CoffeeCard;
