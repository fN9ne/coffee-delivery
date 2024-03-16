import { FC } from "react";
import { Link } from "react-router-dom";

import Logo from "../img/logo.svg?react";
import LocationPicker from "./LocationPicker";
import Cart from "./UI/Cart";

const Header: FC = () => {
	return (
		<header className="header">
			<div className="header__container container">
				<Link to="/" className="header__logo">
					<Logo />
				</Link>
				<div className="header__content">
					<LocationPicker />
					<Cart />
				</div>
			</div>
		</header>
	);
};

export default Header;
