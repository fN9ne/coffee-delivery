import { ChangeEvent, FC } from "react";

import MinusIcon from "../../img/icons/minus.svg?react";
import PlusIcon from "../../img/icons/plus.svg?react";

export enum InputType {
	text = "text",
	number = "number",
}

interface InputProps {
	type: string;
	value: string;
	placeholder: string;
	isOptional: boolean;
	onBlur: () => void;
	onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ type, value, placeholder, isOptional, onBlur, onChange }) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

	const handleDecrease = () => {
		const num = Number(value);

		if (num > 1) {
			onChange(num - 1 + "");
		}
	};

	const handleIncrease = () => {
		const num = Number(value);

		onChange(num + 1 + "");
	};

	return (
		<div className="input">
			{type === "text" ? (
				<>
					<input type="text" onBlur={onBlur} onChange={handleChange} placeholder={placeholder} value={value} />
					{isOptional && <div className="input__optional-label">Optional</div>}
				</>
			) : (
				<>
					<button onClick={handleDecrease} className="input-button">
						<MinusIcon />
					</button>
					<input type="number" value={value} onChange={handleChange} />
					<button onClick={handleIncrease} className="input-button">
						<PlusIcon />
					</button>
				</>
			)}
		</div>
	);
};

export default Input;
