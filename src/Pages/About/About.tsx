import { Title, useMantineTheme, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import "./About.css";

function About() {
	const theme = useMantineTheme();
	const isMobile = useMediaQuery("(max-width: 1000px)");

	return (
		<div className="page about">
			<Title
				className="bluberry-text"
				order={1}
				style={{
					fontSize: isMobile ? 44 : 60,
					fontWeight: 900,
					color: theme.white,
				}}
			>
				About Us
			</Title>

			<Text
				my="xl"
				style={{
					fontSize: isMobile ? 16 : 22,
					fontWeight: 400,
					color: theme.colors.gray[2],
				}}
			>
				Company Fruitica d.o.o. based in Chantavir, was founded in 1996 as the general representative of the German company WILD and
				since it's founding has been engaged in importing and distributing industrial products for the needs of the production of
				food products and soft drinks (fruit and vegetable products, aromas, extracts, natural colors, concentrates, sweeteners,
				special ingredients).
			</Text>

			<Text
				my="xl"
				style={{
					fontSize: isMobile ? 18 : 22,
					fontWeight: 400,
					color: theme.colors.gray[2],
				}}
			>
				For storage and distribution purposes, the company has a modern central storage space of 1.000 m², located in Chantavir near
				the E75 highway.
			</Text>
		</div>
	);
}

export default About;
