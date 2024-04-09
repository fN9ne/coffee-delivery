import { ChangeEvent, FC } from "react";

import MinusIcon from "../../img/icons/minus.svg?react";
import PlusIcon from "../../img/icons/plus.svg?react";

export enum InputType {
	text = "text",
	number = "number",
}

export enum InputWides {
	fit = "fit",
	full = "full",
	third = "third",
	small = "small",
}

interface InputProps {
	type: InputType;
	value: string;
	placeholder?: string;
	wide?: InputWides;
	isOptional?: boolean;
	isError?: boolean;
	errorMsg?: string;
	onBlur?: () => void;
	onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ type, value, wide, isError, errorMsg, placeholder, isOptional, onBlur, onChange }) => {
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
		<div
			className={`input${type === InputType.number ? " input__number" : " input__text"}${
				wide
					? wide === InputWides.fit
						? " input_fit"
						: wide === InputWides.full
						? " input_full"
						: wide === InputWides.third
						? " input_third"
						: wide === InputWides.small
						? " input_small"
						: ""
					: ""
			}${isError ? " input_invalid" : ""}`}
		>
			{type === "text" ? (
				<>
					<input type="text" onBlur={onBlur} onChange={handleChange} placeholder={placeholder} value={value} />
					{isError && <div className="input__error">{errorMsg}</div>}
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
