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

	const { t } = useTranslation();

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
					<MotionDiv>
						<Text style={textTitleStyle}>
							<Trans i18nKey="foodIngredientsTradingDivision" components={{ bold: <b /> }} />
						</Text>
					</MotionDiv>
					<MotionDiv>
						<Text style={textSubTitleStyle}>
							<Trans i18nKey="fitd_subtitle" components={{ bold: <b /> }} />
						</Text>
					</MotionDiv>
					<MotionDiv>
						<Text style={textStyle}>{t("fitd_text1")}</Text>
					</MotionDiv>
					<MotionDiv>
						<Text style={textStyle}>{t("fitd_text2")}</Text>
					</MotionDiv>
					<MotionDiv>
						<Text style={textStyle}>{t("fitd_text3")}</Text>
					</MotionDiv>
				</Stack>
			</Box>
		</div>
	);
}

export default FoodIngredientsTradingDivision;
