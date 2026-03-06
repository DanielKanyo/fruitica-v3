import { motion } from "framer-motion";

import { useMantineTheme, Text, Box, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { MOBILE_BREAKPOINT } from "../../constants";
import "./About.css";

function About() {
	const theme = useMantineTheme();
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);

	return (
		<div className="page">
			<div className="ice-cream-bg"></div>
			<Box
				style={{
					padding: isMobile ? "8rem 1rem" : "14rem 0",
					maxWidth: isMobile ? "100%" : "60%",
					margin: isMobile ? "0 16px" : "0 auto",
				}}
			>
				<Stack gap="xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
					>
						<Text
							style={{
								fontSize: isMobile ? 44 : 60,
								color: theme.white,
							}}
						>
							About <b>Us</b>
						</Text>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
					>
						<Text
							style={{
								fontSize: isMobile ? 34 : 40,
								color: theme.colors.gray[1],
							}}
						>
							Our <b>Story</b>
						</Text>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
					>
						<Text
							style={{
								fontSize: isMobile ? 17 : 18,
								fontWeight: 400,
								color: theme.colors.gray[2],
							}}
						>
							Fruitica d.o.o. began its journey in 1996 as a food ingredients trading company. Through years of market
							experience and close cooperation with international suppliers, we build a strong distribution network in Serbia
							and surrounding markets.
							<br />
							<br />
							In 2012, we expanded into a manufacturing by launching our instant powdered beverage production in Čantavir,
							near Subotica, strategically located close to the E75 highway.
							<br />
							<br />
							Today, we operate as an integrated food solutions company, combining sourcing expertise with industrial
							production.
						</Text>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
					>
						<Text
							style={{
								fontSize: isMobile ? 34 : 40,
								color: theme.colors.gray[1],
							}}
						>
							Our <b>Mission</b>
						</Text>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
					>
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
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
					>
						<Text
							style={{
								fontSize: isMobile ? 34 : 40,
								color: theme.colors.gray[1],
							}}
						>
							Our <b>Vision</b>
						</Text>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
					>
						<Text
							style={{
								fontSize: isMobile ? 17 : 18,
								fontWeight: 400,
								color: theme.colors.gray[2],
							}}
						>
							To become a recognized leader in both instant beverage manufacturing and professional ingredient distribution.
						</Text>
					</motion.div>
				</Stack>
			</Box>
		</div>
	);
}

export default About;
