import classNames from "classnames";
import { FC } from "react";

export enum ButtonType {
	primary = "primary",
	secondary = "secondary",
	icon = "icon",
}

interface ButtonProps {
	type: ButtonType;
	icon?: React.ReactNode;
	children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ type, icon, children }) => {
	const buttonClasses = classNames("button", `button_${type}`);

	return (
		<button className={buttonClasses}>
			{icon}
			{<span className="button-text">{children}</span>}
		</button>
	);
};

export default Button;
