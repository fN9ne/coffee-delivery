import { FC } from "react";
import { ISelect } from "./Select";

const SelectItem: FC<ISelect> = ({ icon, text, value }) => {
	return (
		<div className="select-item" data-value={value}>
			{icon}
			<span className="select-item__text">{text}</span>
		</div>
	);
};

export default SelectItem;
