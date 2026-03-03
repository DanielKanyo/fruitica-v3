import { HashRouter, Route, Routes } from "react-router-dom";

import "@mantine/core/styles.css";

import "./App.css";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { RoutePaths } from "./Routes/routes";

export default function App() {
	return (
		<HashRouter>
			<div className="bg-items-container">
				<div className="bg-item1"></div>
				<div className="bg-item2"></div>
			</div>

			<Nav />
			<Routes>
				<Route path={RoutePaths.Home} index element={<Home />} />
				<Route path={RoutePaths.AboutUs} element={<About />} />
			</Routes>
		</HashRouter>
	);
}
