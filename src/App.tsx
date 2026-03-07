import { HashRouter, Route, Routes } from "react-router-dom";

import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Pages/About/About";
import FoodIngredientsTradingDivision from "./Pages/FoodIngredientsTradingDivision/FoodIngredientsTradingDivision";
import Home from "./Pages/Home/Home";
import ManufacturingDivision from "./Pages/ManufacturingDivision/ManufacturingDivision";
import { RoutePaths } from "./Routes/routes";

export default function App() {
	return (
		<HashRouter>
			<ScrollToTop />

			<Nav />

			<Routes>
				<Route path={RoutePaths.Home} index element={<Home />} />
				<Route path={RoutePaths.AboutUs} element={<About />} />
				<Route path={RoutePaths.ManufacturingDivision} element={<ManufacturingDivision />} />
				<Route path={RoutePaths.FoodIngredientsTradingDivision} element={<FoodIngredientsTradingDivision />} />
			</Routes>

			<Footer />
		</HashRouter>
	);
}
