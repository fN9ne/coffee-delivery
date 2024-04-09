import classNames from "classnames";
import { FC } from "react";

export enum ButtonType {
	primary = "primary",
	secondary = "secondary",
	purple = "purple",
	icon = "icon",
	icon2 = "icon2",
}

interface ButtonProps {
	type: ButtonType;
	icon?: React.ReactNode;
	disabled?: boolean;
	children?: React.ReactNode;
	onClick: () => void;
}

const Button: FC<ButtonProps> = ({ type, icon, children, disabled, onClick }) => {
	const buttonClasses = classNames("button", `button_${type}`);

	return (
		<button onClick={onClick} className={buttonClasses} disabled={disabled}>
			{icon}
			{<span className="button-text button-text_s">{children}</span>}
		</button>
	);
};

export default Button;
