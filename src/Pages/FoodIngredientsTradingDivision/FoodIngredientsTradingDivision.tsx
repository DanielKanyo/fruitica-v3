import { useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";

import { Box, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import MotionDiv from "../../Components/MotionDiv";
import { MOBILE_BREAKPOINT } from "../../constants";
import "./FoodIngredientsTradingDivision.css";

function FoodIngredientsTradingDivision() {
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);
	const theme = useMantineTheme();

	useTranslation();

	const textTitleStyle = useMemo(
		() => ({
			fontSize: isMobile ? 30 : 60,
			color: theme.white,
		}),
		[isMobile, theme]
	);

	const textSubTitleStyle = useMemo(
		() => ({
			fontSize: isMobile ? 22 : 40,
			color: theme.colors.gray[1],
		}),
		[isMobile, theme]
	);

	const textStyle = useMemo(
		() => ({
			fontSize: isMobile ? 17 : 18,
			color: theme.colors.gray[2],
		}),
		[isMobile, theme]
	);

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
					<MotionDiv delay={0.1}>
						<Text style={textTitleStyle}>
							<Trans i18nKey="foodIngredientsTradingDivision" components={{ bold: <b /> }} />
						</Text>
					</MotionDiv>
					<MotionDiv delay={0.2}>
						<Text style={textSubTitleStyle}>
							Import, Distribution & Advanced Beverage Ingredient <b>Solutions</b>
						</Text>
					</MotionDiv>
					<MotionDiv delay={0.3}>
						<Text style={textStyle}>
							With nearly 30 years of sourcing experience, Fruitica d.o.o. supplies food manufacturers and beverage producers
							with reliable, functional and innovative ingredient solutions.
						</Text>
					</MotionDiv>
					<MotionDiv delay={0.4}>
						<Text style={textStyle}>
							Our portfolio includes both core industrial raw materials and advanced beverage development platforms.
						</Text>
					</MotionDiv>
					<MotionDiv delay={0.5}>
						<Text style={textStyle}>
							We manage the complete import process, regulatory documentation, customs procedures, warehousing and
							distribution.
						</Text>
					</MotionDiv>
				</Stack>
			</Box>
		</div>
	);
}

export default FoodIngredientsTradingDivision;
