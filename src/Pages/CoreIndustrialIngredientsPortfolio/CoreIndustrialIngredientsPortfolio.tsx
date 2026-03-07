import { motion } from "framer-motion";

import { Box, Stack, useMantineTheme, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { MOBILE_BREAKPOINT } from "../../constants";

function CoreIndustrialIngredientsPortfolio() {
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);
	const theme = useMantineTheme();

	return (
		<div className="page">
			<Box
				style={{
					padding: isMobile ? "8rem 1rem 4rem 1rem" : "14rem 0 7rem 0",
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
								fontSize: isMobile ? 30 : 60,
								color: theme.white,
							}}
						>
							Core Industrial Ingredients <b>Portfolio</b>
						</Text>
					</motion.div>
				</Stack>
			</Box>
			CoreIndustrialIngredientsPortfolio
		</div>
	);
}

export default CoreIndustrialIngredientsPortfolio;
