import { HashRouter, Route, Routes } from "react-router-dom";

import "@mantine/core/styles.css";

import "./App.css";
import Nav from "./Components/Nav/Nav";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

export default function App() {
	return (
		<HashRouter>
			<div className="content">
				<div className="gradient"></div>
				<Nav />

				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</HashRouter>
	);
}
