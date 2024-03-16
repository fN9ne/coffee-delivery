import { FC } from "react";
import CartIcon from "../../img/icons/cart.svg?react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";

const Cart: FC = () => {
	const { cartItems } = useAppSelector((state) => state.cart);
	const navigate = useNavigate();

	const handleOpenCart = () => navigate("/checkout");

	return (
		<button className="cart-button" onClick={handleOpenCart}>
			<CartIcon />
			{cartItems.length > 0 && <div className="cart-button__count text text_s text_bold">{cartItems.length}</div>}
		</button>
	);
};

export default Cart;
