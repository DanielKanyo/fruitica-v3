import { useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";

import { Box, Stack, useMantineTheme, Text, List } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import ListIcon from "../../Components/ListIcon";
import MotionDiv from "../../Components/MotionDiv";
import { MOBILE_BREAKPOINT } from "../../constants";
import "./BeverageSolutionsPlatform.css";

function BeverageSolutionsPlatform() {
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
			<div className="candy-bg"></div>
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
								<Trans i18nKey="beverageSolutionsPlatform" components={{ bold: <b /> }} />
							</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.2}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="bsp_turnkey_title" components={{ bold: <b /> }} />
							</Text>
							<Text style={textStyle}>
								<b>{t("bsp_turnkey_subtitle")}</b>
							</Text>
							<Text style={textStyle}>{t("bsp_turnkey_desc")}</Text>
							<Text style={textStyle}>{t("bsp_turnkey_include")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_flavor")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_color")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_extracts")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_functional_ingredients")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_juice_components")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_typical_applications")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_still_drinks")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_syrups")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_fruit_drinks_vitamins")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_popular_blends")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_custom_beverage")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_turnkey_benefits")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.3}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="bsp_flavors_title" components={{ bold: <b /> }} />
							</Text>
							<Text style={textStyle}>{t("bsp_flavors_desc")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_natural_flavors")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_extracts")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_distillates")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_flavor_concentrates")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_available_formats")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_liquid_flavors")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_emulsified_flavors")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_concentrated_preparations")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_adapted_to")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_powdered_beverages")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_rtd_drinks")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_syrups")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_functional_beverages")}</List.Item>
							</List>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.4}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="bsp_citrus_title" components={{ bold: <b /> }} />
							</Text>
							<Text style={textStyle}>
								<b>{t("bsp_citrus_subtitle")}</b>
							</Text>
							<Text style={textStyle}>{t("bsp_designed_for")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_powdered_beverages")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_rtd_formats")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_alcoholic_beverages")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_citrus_toolbox")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_terpenes")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_folded_oils")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_terpeneless_oils")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_fractions_isolates")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_citrus_ideal")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.5}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="bsp_mint_title" components={{ bold: <b /> }} />
							</Text>
							<Text style={textStyle}>{t("bsp_mint_portfolio")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_mint_oils")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_mint_flavor_solutions")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_mint_common_apps")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_mint_lemonades")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_mojito_drinks")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_iced_tea_refreshers")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_mint_functional")}</List.Item>
							</List>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.6}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="bsp_fruit_juice_title" components={{ bold: <b /> }} />
							</Text>
							<Text style={textStyle}>{t("bsp_fruit_juice_benefits")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_authentic_fruit")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_improved_mouthfeel")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_labeling_advantages")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_used_in")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_fruit_beverages")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_syrups")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_vitamin_drinks")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_functional_concepts")}</List.Item>
							</List>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.7}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="bsp_natural_colors_title" components={{ bold: <b /> }} />
							</Text>
							<Text style={textStyle}>{t("bsp_natural_colors_desc")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_liquid")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_powder")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_micronized_powder")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_emulsions")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_selected_based_on")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_product_ph")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_processing_conditions")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_light_exposure")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_required_stability")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_natural_colors_note")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.8}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="bsp_sweetening_title" components={{ bold: <b /> }} />
							</Text>
							<Text style={textStyle}>{t("bsp_sweetening_solutions")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_sugar_reduction")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_sweetness_optimization")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_off_note_masking")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_taste_modulation")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_sweetening_relevant")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_functional_beverages")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_protein_drinks")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_reduced_calories")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_sweetening_support")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.9}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="bsp_specialty_title" components={{ bold: <b /> }} />
							</Text>
							<Text style={textStyle}>{t("bsp_specialty_desc")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_proteins")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_fiber")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_probiotics")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_tea_extracts")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_functional_components")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_specialty_tailored")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={1}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="bsp_fermentation_title" components={{ bold: <b /> }} />
							</Text>
							<Text style={textStyle}>{t("bsp_fermentation_desc")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_bio_based")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_fermentation_actives")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_specialty_functional")}</List.Item>
							</List>
							<Text style={textStyle}>{t("bsp_fermentation_relevant")}</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("bsp_innovative_concepts")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_functional_development")}</List.Item>
								<List.Item style={textStyle}>{t("bsp_clean_label")}</List.Item>
							</List>
						</Stack>
					</MotionDiv>
				</Stack>
			</Box>
		</div>
	);
}

export default BeverageSolutionsPlatform;
