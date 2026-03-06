import { HashRouter, Route, Routes } from "react-router-dom";

import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";

import "./App.css";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { RoutePaths } from "./Routes/routes";

export default function App() {
	return (
		<HashRouter>
			<Nav />
			<Routes>
				<Route path={RoutePaths.Home} index element={<Home />} />
				<Route path={RoutePaths.AboutUs} element={<About />} />
			</Routes>
		</HashRouter>
	);
}
