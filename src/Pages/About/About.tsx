import { useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";

import { useMantineTheme, Text, Box, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import MotionDiv from "../../Components/MotionDiv";
import { MOBILE_BREAKPOINT } from "../../constants";
import "./About.css";

function About() {
	const theme = useMantineTheme();
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);
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
			<div className="ice-cream-bg"></div>
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
							<Trans i18nKey="aboutUs" components={{ bold: <b /> }} />
						</Text>
					</MotionDiv>

					<MotionDiv>
						<Text style={textSubTitleStyle}>
							<Trans i18nKey="ourStory" components={{ bold: <b /> }} />
						</Text>
					</MotionDiv>

					<MotionDiv>
						<Text style={textStyle}>
							<Trans i18nKey="storyText" components={{ br: <br /> }} />
						</Text>
					</MotionDiv>

					<MotionDiv>
						<Text style={textSubTitleStyle}>
							<Trans i18nKey="ourMission" components={{ bold: <b /> }} />
						</Text>
					</MotionDiv>

					<MotionDiv>
						<Text style={textStyle}>{t("missionText")}</Text>
					</MotionDiv>

					<MotionDiv>
						<Text style={textSubTitleStyle}>
							<Trans i18nKey="ourVision" components={{ bold: <b /> }} />
						</Text>
					</MotionDiv>

					<MotionDiv>
						<Text style={textStyle}>{t("visionText")}</Text>
					</MotionDiv>
				</Stack>
			</Box>
		</div>
	);
}

export default About;
