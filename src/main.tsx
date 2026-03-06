import React from "react";
import ReactDOM from "react-dom/client";

import { MantineProvider } from "@mantine/core";

import App from "./App.tsx";
import { LanguageProvider } from "./Context/LanguageProvider.tsx";
import { ScrollProvider } from "./Context/ScrollProvider.tsx";
import "./i18n/i18n.tsx";
import { theme } from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider forceColorScheme="light" theme={theme}>
			<LanguageProvider>
				<ScrollProvider>
					<App />
				</ScrollProvider>
			</LanguageProvider>
		</MantineProvider>
	</React.StrictMode>
);
