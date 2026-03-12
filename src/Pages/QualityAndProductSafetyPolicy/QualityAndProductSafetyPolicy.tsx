import { useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";

import { Box, List, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import ListIcon from "../../Components/ListIcon";
import MotionDiv from "../../Components/MotionDiv";
import { MOBILE_BREAKPOINT } from "../../constants";
import "./QualityAndProductSafetyPolicy.css";

function QualityAndProductSafetyPolicy() {
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

	const textStyle = useMemo(
		() => ({
			fontSize: isMobile ? 17 : 18,
			color: theme.colors.gray[2],
		}),
		[isMobile, theme]
	);

	return (
		<div className="page">
			<div className="quality-bg"></div>
			<Box
				style={{
					padding: isMobile ? "8rem 1rem 4rem 1rem" : "14rem 0 7rem 0",
					maxWidth: isMobile ? "100%" : "60%",
					margin: isMobile ? "0 16px" : "0 auto",
				}}
			>
				<Stack gap="xl">
					<MotionDiv>
						<Stack gap="xl">
							<Text style={textTitleStyle}>
								<Trans i18nKey="qualityAndProductSafetyPolicy" components={{ bold: <b /> }} />
							</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv>
						<Stack gap="xl">
							<Text style={textStyle}>{t("quality_policy_para1")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv>
						<Stack gap="xl">
							<Text style={textStyle}>{t("quality_policy_para2")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv>
						<Stack gap="xl">
							<Text style={textStyle}>{t("quality_policy_para3")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv>
						<Stack gap="xl">
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("quality_policy_list_item1")}</List.Item>
								<List.Item style={textStyle}>{t("quality_policy_list_item2")}</List.Item>
								<List.Item style={textStyle}>{t("quality_policy_list_item3")}</List.Item>
								<List.Item style={textStyle}>{t("quality_policy_list_item4")}</List.Item>
								<List.Item style={textStyle}>{t("quality_policy_list_item5")}</List.Item>
								<List.Item style={textStyle}>{t("quality_policy_list_item6")}</List.Item>
								<List.Item style={textStyle}>{t("quality_policy_list_item7")}</List.Item>
								<List.Item style={textStyle}>{t("quality_policy_list_item8")}</List.Item>
								<List.Item style={textStyle}>{t("quality_policy_list_item9")}</List.Item>
								<List.Item style={textStyle}>{t("quality_policy_list_item10")}</List.Item>
							</List>
						</Stack>
					</MotionDiv>
					<MotionDiv>
						<Stack gap="xl">
							<Text style={textStyle}>{t("quality_policy_availability")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv>
						<Stack gap="xl">
							<Text style={textStyle}>{t("quality_policy_compliance")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv>
						<Stack gap="xl">
							<Text style={textStyle}>{t("quality_policy_location")}</Text>
							<Text style={textStyle}>
								<Trans i18nKey="quality_policy_signature" />
							</Text>
						</Stack>
					</MotionDiv>
				</Stack>
			</Box>
		</div>
	);
}

export default QualityAndProductSafetyPolicy;
