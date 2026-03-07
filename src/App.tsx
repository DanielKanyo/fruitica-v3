import { HashRouter, Route, Routes } from "react-router-dom";

import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Pages/About/About";
import BeverageSolutionsPlatform from "./Pages/BeverageSolutionsPlatform/BeverageSolutionsPlatform";
import CoreIndustrialIngredientsPortfolio from "./Pages/CoreIndustrialIngredientsPortfolio/CoreIndustrialIngredientsPortfolio";
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
				<Route path={RoutePaths.BeverageSolutionsPlatform} element={<BeverageSolutionsPlatform />} />
				<Route path={RoutePaths.CoreIndustrialIngredientsPortfolio} element={<CoreIndustrialIngredientsPortfolio />} />
			</Routes>

			<Footer />
		</HashRouter>
	);
}
