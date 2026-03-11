import { useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";

import { Box, Stack, useMantineTheme, Text, List } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import ListIcon from "../../Components/ListIcon";
import MotionDiv from "../../Components/MotionDiv";
import { MOBILE_BREAKPOINT } from "../../constants";
import "./CoreIndustrialIngredientsPortfolio.css";

function CoreIndustrialIngredientsPortfolio() {
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
			<div className="coconut-bg"></div>
			<Box
				style={{
					padding: isMobile ? "8rem 1rem 4rem 1rem" : "14rem 0 7rem 0",
					maxWidth: isMobile ? "100%" : "60%",
					margin: isMobile ? "0 16px" : "0 auto",
				}}
			>
				<Stack gap="xl">
					<MotionDiv delay={0.1}>
						<Stack gap="xl">
							<Text style={textTitleStyle}>
								<Trans i18nKey="coreIndustrialIngredientsPortfolio" components={{ bold: <b /> }} />
							</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.2}>
						<Stack gap="xl">
							<Text style={textStyle}>{t("ciip_intro")}</Text>
							<Text style={textStyle}>
								<Trans i18nKey="ciip_dairy_title" components={{ bold: <b /> }} />
							</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("ciip_dairy_palmbased")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_dairy_coconut")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_dairy_nondairy")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_dairy_topping")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_dairy_foaming")}</List.Item>
							</List>
							<Text style={textStyle}>
								<Trans i18nKey="ciip_hot_title" components={{ bold: <b /> }} />
							</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("ciip_hot_coffee")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_hot_matcha")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_hot_tea")}</List.Item>
							</List>
							<Text style={textStyle}>
								<Trans i18nKey="ciip_sweet_title" components={{ bold: <b /> }} />
							</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("ciip_sweet_sugar")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_sweet_glucose")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_sweet_maltodextrine")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_sweet_dextrose")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_sweet_cocoa")}</List.Item>
							</List>
							<Text style={textStyle}>
								<Trans i18nKey="ciip_functional_title" components={{ bold: <b /> }} />
							</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("ciip_functional_collagen")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_functional_protein")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_functional_specialty")}</List.Item>
							</List>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.3}>
						<Stack gap="xl">
							<Text style={textStyle}>
								<Trans i18nKey="ciip_nut_title" components={{ bold: <b /> }} />
							</Text>
							<Text style={textStyle}>{t("ciip_nut_intro")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("ciip_nut_kernels")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_nut_paste")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_nut_pistachio")}</List.Item>
							</List>
							<Text style={textStyle}>{t("ciip_app_title")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("ciip_app_confectionery")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_app_bakery")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_app_creams")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_app_protein")}</List.Item>
								<List.Item style={textStyle}>{t("ciip_app_formulations")}</List.Item>
							</List>
							<Text style={textStyle}>{t("ciip_nut_note")}</Text>
						</Stack>
					</MotionDiv>
				</Stack>
			</Box>
		</div>
	);
}

export default CoreIndustrialIngredientsPortfolio;
