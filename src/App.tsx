import "@mantine/core/styles.css";
import Home from "./Pages/Home/Home";
import "./App.css";
import { LanguageProvider } from "./Context/LanguageContext";

export default function App() {
	return (
		<LanguageProvider>
			<Home />
		</LanguageProvider>
	);
}
