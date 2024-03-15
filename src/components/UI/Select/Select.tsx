import { FC } from "react";
import SelectItem from "./SelectItem";

export interface ISelect {
	icon: React.ReactNode;
	value: string;
	text: string;
}

interface SelectProps {
	options: ISelect[];
}

const Select: FC<SelectProps> = ({ options }) => {
	return (
		<div className="select">
			<div className="select__container">
				{options.map((option, index) => (
					<SelectItem {...option} key={index} />
				))}
			</div>
		</div>
	);
};

export default Select;
