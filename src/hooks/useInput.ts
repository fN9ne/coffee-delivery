import { useState } from "react";
import { useValidation } from "./useValidation";
import { useValidationReturns } from "./useValidation";

export interface IMask {
	format: string;
	onlyDigits?: boolean;
	onlyChars?: boolean;
}

export interface IValidation {
	minLength?: number;
	isEmail?: boolean;
	mask?: IMask;
}

interface useInputReturns {
	value: string;
	isDirty: boolean;
	reset: () => void;
	onChange: (value: string) => void;
	onBlur: () => void;
}

interface useInputArguments {
	(initialValue: string, validations: IValidation): useInputReturns & useValidationReturns;
}

export const useInput: useInputArguments = (initialValue, validations) => {
	const [value, setValue] = useState<string>(initialValue);
	const [isDirty, setIsDirty] = useState<boolean>(false);

	const valid = useValidation(value, validations);

	const onChange = (newValue: string) => {
		if (validations.mask) {
			const { format, onlyDigits, onlyChars } = validations.mask;
			let maskedValue = newValue;

			if (onlyDigits) {
				maskedValue = maskedValue.replace(/\D/g, "");
			}
			if (onlyChars) {
				maskedValue = maskedValue.replace(/[^A-Za-z]/g, "");
			}

			let formattedValue = "";
			let index = 0;

			for (let i = 0; i < format.length; i++) {
				if (format[i] === "#" && index < maskedValue.length) {
					formattedValue += maskedValue[index];
					index++;
				} else if (format[i] === "#") {
					formattedValue += "_";
				} else {
					formattedValue += format[i];
				}
			}

			formattedValue = formattedValue.replace(/[^#]/g, "_");

			setValue(formattedValue);
		} else {
			setValue(newValue);
		}
	};
	const onBlur = () => setIsDirty(true);
	const reset = () => {
		setValue("");
		setIsDirty(false);
	};

	return {
		value,
		isDirty,
		onChange,
		onBlur,
		reset,
		...valid,
	};
};
