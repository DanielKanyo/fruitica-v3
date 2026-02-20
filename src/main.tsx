import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme.ts";
import { LanguageProvider } from "./Context/LanguageContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider forceColorScheme="light" theme={theme}>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</MantineProvider>
	</React.StrictMode>
);
