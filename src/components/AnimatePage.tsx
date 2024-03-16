import { FC, ReactNode } from "react";

import { motion as m } from "framer-motion";

interface AnimatePageState {
	children: ReactNode;
}

const AnimatePage: FC<AnimatePageState> = ({ children }) => {
	const transitions = {
		initial: { opacity: 0, y: "-25%" },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: "-25%" },
		transition: { type: "just", ease: "linear", duration: 0.35 },
	};

	return <m.div {...transitions}>{children}</m.div>;
};

export default AnimatePage;
