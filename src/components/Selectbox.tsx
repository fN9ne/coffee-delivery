import { FC } from "react";
import { PaymentMethods } from "../redux/reducers/orderSlice";

export interface ISelect {
	text: string;
	icon: React.ReactNode;
	value: PaymentMethods;
}

interface SelectboxProps {
	options: ISelect[];
	value: string;
	setValue: (value: PaymentMethods) => void;
}

const Selectbox: FC<SelectboxProps> = ({ options, value, setValue }) => {
	return (
		<div className="selectbox">
			{options.map((option, index) => (
				<div
					className={`selectbox__item${value === option.value ? " selectbox__item_active" : ""}`}
					key={index}
					onClick={() => setValue(option.value)}
				>
					<div className="selectbox__icon">{option.icon}</div>
					<div className="selectbox__text">{option.text}</div>
				</div>
			))}
		</div>
	);
};

export default Selectbox;
