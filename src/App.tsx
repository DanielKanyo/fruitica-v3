import "@mantine/core/styles.css";
import Home from "./Pages/Home/Home";
import Nav from "./Components/Nav/Nav";
import "./App.css";

export default function App() {
	return (
		<>
			<div className="bg-img"></div>
			<Nav />

			<Home />
		</>
	);
}
