import { FC } from "react";
import AnimatePage from "../../components/AnimatePage";
import { useAppSelector } from "../../hooks/useAppSelector";
import CartItem from "./CartItem";

const Checkout: FC = () => {
	const { cartItems } = useAppSelector((state) => state.cart);

	return (
		<AnimatePage className="checkout">
			<div className="checkout__main"></div>
			<aside className="checkout__side">
				<h5>Cafés selecionados</h5>
				<div className="cart">
					{cartItems.map((cartItem) => (
						<CartItem {...cartItem} key={cartItem.id} />
					))}
				</div>
			</aside>
		</AnimatePage>
	);
};

export default Checkout;
