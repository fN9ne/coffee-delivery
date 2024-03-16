import { FC } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
	return (
		<>
			<Header />
			<main className="page">
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;
