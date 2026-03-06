import { HashRouter, Route, Routes } from "react-router-dom";

import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { RoutePaths } from "./Routes/routes";

export default function App() {
	return (
		<HashRouter>
			<ScrollToTop />

			<Nav />

			<Routes>
				<Route path={RoutePaths.Home} index element={<Home />} />
				<Route path={RoutePaths.AboutUs} element={<About />} />
			</Routes>

			<Footer />
		</HashRouter>
	);
}
