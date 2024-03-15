import { FC } from "react";
import CartIcon from "../../img/icons/cart.svg?react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";

const Cart: FC = () => {
	const { cartItems } = useAppSelector((state) => state.cart);
	const navigate = useNavigate();

	const handleOpenCart = () => navigate("/cart");

	return (
		<button className="cart" onClick={handleOpenCart}>
			<CartIcon />
			<div className="cart__count">{cartItems.length}</div>
		</button>
	);
};

export default Cart;
