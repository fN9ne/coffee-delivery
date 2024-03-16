import { FC, ReactNode } from "react";

export enum AdvantageColor {
	darkYellow = "var(--yellow-dark)",
	gray = "var(--base-text)",
	yellow = "var(--yellow)",
	purple = "var(--purple)",
}

export interface IAdvantage {
	color: AdvantageColor;
	icon: ReactNode;
	text: string;
}

const Advantage: FC<IAdvantage> = ({ color, icon, text }) => {
	return (
		<div className="welcome-advantage">
			<div className="welcome-advantage__icon" style={{ backgroundColor: color }}>
				{icon}
			</div>
			<div className="text text_m">{text}</div>
		</div>
	);
};

export default Advantage;
