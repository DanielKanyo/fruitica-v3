import { motion } from "framer-motion";

import { Box, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { MOBILE_BREAKPOINT } from "../../constants";
import "./FoodIngredientsTradingDivision.css";

function FoodIngredientsTradingDivision() {
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);
	const theme = useMantineTheme();

	return (
		<div className="page">
			<div className="word-map-bg"></div>
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
							Food Ingredients Trading <b>Division</b>
						</Text>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
					>
						<Text
							style={{
								fontSize: isMobile ? 22 : 40,
								color: theme.colors.gray[1],
							}}
						>
							Import, Distribution & Advanced Beverage Ingredient <b>Solutions</b>
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
							With nearly 30 years of sourcing experience, Fruitica d.o.o. supplies food manufacturers and beverage producers
							with reliable, functional and innovative ingredient solutions.
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
							Our portfolio includes both core industrial raw materials and advanced beverage development platforms.
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
							We manage the complete import process, regulatory documentation, customs procedures, warehousing and
							distribution.
						</Text>
					</motion.div>
				</Stack>
			</Box>
		</div>
	);
}

export default FoodIngredientsTradingDivision;
