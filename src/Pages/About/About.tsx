import { useMantineTheme, Text, Box, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { MOBILE_BREAKPOINT } from "../../constants";
import "./About.css";

function About() {
	const theme = useMantineTheme();
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);

	return (
		<div className="page about">
			<Box w={isMobile ? "100%" : "60%"} m="0 auto">
				<Stack gap="xl">
					<Text
						style={{
							fontSize: isMobile ? 44 : 60,
							color: theme.white,
						}}
					>
						About <b>Us</b>
					</Text>

					<Text
						style={{
							fontSize: isMobile ? 34 : 44,
							color: theme.colors.gray[1],
						}}
					>
						Our <b>Story</b>
					</Text>

					<Text
						style={{
							fontSize: isMobile ? 17 : 18,
							fontWeight: 400,
							color: theme.colors.gray[2],
						}}
					>
						Fruitica d.o.o. began its journey in 1996 as a food ingredients trading company. Through years of market experience
						and close cooperation with international suppliers, we build a strong distribution network in Serbia and surrounding
						markets.
						<br />
						<br />
						In 2012, we expanded into a manufacturing by launching our instant powdered beverage production in Čantavir, near
						Subotica, strategically located close to the E75 highway.
						<br />
						<br />
						Today, we operate as an integrated food solutions company, combining sourcing expertise with industrial production.
					</Text>

					<Text
						style={{
							fontSize: isMobile ? 34 : 44,
							color: theme.colors.gray[1],
						}}
					>
						Our <b>Mission</b>
					</Text>

					<Text
						style={{
							fontSize: isMobile ? 17 : 18,
							fontWeight: 400,
							color: theme.colors.gray[2],
						}}
					>
						To deliver reliable, high-quality food solutions - whether through finished beverage products or functional raw
						materials - while building long-term partnerships based on trust and performance.
					</Text>

					<Text
						style={{
							fontSize: isMobile ? 34 : 44,
							color: theme.colors.gray[1],
						}}
					>
						Our <b>Vision</b>
					</Text>

					<Text
						style={{
							fontSize: isMobile ? 17 : 18,
							fontWeight: 400,
							color: theme.colors.gray[2],
						}}
					>
						To become a recognized leader in both instant beverage manufacturing and professional ingredient distribution.
					</Text>
				</Stack>
			</Box>
		</div>
	);
}

export default About;
