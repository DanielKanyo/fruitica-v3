import { useMemo } from "react";
import { Trans, useTranslation } from "react-i18next";

import { Box, Card, Flex, List, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import ListIcon from "../../Components/ListIcon";
import MotionDiv from "../../Components/MotionDiv";
import { MOBILE_BREAKPOINT } from "../../constants";
import "./ManufacturingDivision.css";

interface ProductItem {
	titleKey: string;
	listItems: { key: string }[];
	bgClass: string;
}

const PRODUCTS: ProductItem[] = [
	{
		titleKey: "manufacturingDivision_product_coffeeMixes",
		listItems: [
			{ key: "manufacturingDivision_coffee_3in1" },
			{ key: "manufacturingDivision_coffee_2in1" },
			{ key: "manufacturingDivision_coffee_sugarFree" },
			{ key: "manufacturingDivision_coffee_custom" },
		],
		bgClass: "product-coffee-beans-bg",
	},
	{
		titleKey: "manufacturingDivision_product_matchaLatte",
		listItems: [
			{ key: "manufacturingDivision_matcha_classic" },
			{ key: "manufacturingDivision_matcha_collagen" },
			{ key: "manufacturingDivision_matcha_probiotic" },
			{ key: "manufacturingDivision_matcha_vegan" },
			{ key: "manufacturingDivision_matcha_light" },
		],
		bgClass: "product-matcha-bg",
	},
	{
		titleKey: "manufacturingDivision_product_otherBeverages",
		listItems: [
			{ key: "manufacturingDivision_other_cappuccino" },
			{ key: "manufacturingDivision_other_chaiLatte" },
			{ key: "manufacturingDivision_other_hotChocolate" },
			{ key: "manufacturingDivision_other_functional" },
		],
		bgClass: "product-hot-chocolate-bg",
	},
];

interface ProductCardProps extends ProductItem {
	isMobile: boolean;
}

function ProductCard({ titleKey, listItems, bgClass, isMobile }: ProductCardProps) {
	const { t } = useTranslation();

	return (
		<Card p="xl" className="product-card" w="100%" pos="relative" shadow="xs" radius="xl">
			<div className={`product-bg ${bgClass}`} />
			<Text fz={22} mb={50}>
				{t(titleKey)}
			</Text>

			<List spacing="sm" fw={400} icon={<ListIcon color="dark.4" />}>
				{listItems.map((item) => (
					<List.Item key={item.key} fz={isMobile ? 17 : 18} c="gray.7">
						{t(item.key)}
					</List.Item>
				))}
			</List>
		</Card>
	);
}

function ManufacturingDivision() {
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
			<Box
				style={{
					margin: isMobile ? "0 16px" : "0 auto",
				}}
			>
				<Box
					style={{
						margin: "0 auto",
						padding: isMobile ? "8rem 1rem 0 1rem" : "14rem 0 0 0",
						maxWidth: isMobile ? "100%" : "60%",
					}}
				>
					<Stack gap="xl">
						<MotionDiv delay={0.1}>
							<Text style={textTitleStyle}>
								<Trans i18nKey="manufacturingDivision" components={{ bold: <b /> }} />
							</Text>
						</MotionDiv>

						<MotionDiv delay={0.2}>
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="manufacturingDivision_subtitle" components={{ bold: <b /> }} />
							</Text>
						</MotionDiv>
						<MotionDiv delay={0.3}>
							<Text style={textStyle}>{t("manufacturingDivision_description")}</Text>
						</MotionDiv>
					</Stack>
				</Box>

				<MotionDiv delay={0.4}>
					<Flex
						gap="xl"
						style={{ padding: isMobile ? "3rem 0 3rem 0" : "4rem 6rem 4rem 6rem" }}
						direction={{ base: "column", xl: "row" }}
					>
						{PRODUCTS.map((product, index) => (
							<ProductCard key={index} {...product} isMobile={isMobile} />
						))}
					</Flex>
				</MotionDiv>

				<Box
					style={{
						margin: "0 auto",
						maxWidth: isMobile ? "100%" : "60%",
						padding: isMobile ? "0 1rem 4rem 1rem" : "0 0 7rem 0",
					}}
				>
					<Stack gap="xl">
						<MotionDiv delay={0.5}>
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="manufacturingDivision_productionCapabilities" components={{ bold: <b /> }} />
							</Text>
						</MotionDiv>
						<MotionDiv delay={0.6}>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("manufacturingDivision_capability_mixing")}</List.Item>
								<List.Item style={textStyle}>{t("manufacturingDivision_capability_sachet")}</List.Item>
								<List.Item style={textStyle}>{t("manufacturingDivision_capability_multipack")}</List.Item>
								<List.Item style={textStyle}>{t("manufacturingDivision_capability_display")}</List.Item>
								<List.Item style={textStyle}>{t("manufacturingDivision_capability_batch")}</List.Item>
							</List>
						</MotionDiv>
						<MotionDiv delay={0.7}>
							<Text style={textSubTitleStyle}>
								<Trans i18nKey="manufacturingDivision_qualitySafety" components={{ bold: <b /> }} />
							</Text>
						</MotionDiv>
						<MotionDiv delay={0.8}>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>{t("manufacturingDivision_quality_iso")}</List.Item>
								<List.Item style={textStyle}>{t("manufacturingDivision_quality_haccp")}</List.Item>
								<List.Item style={textStyle}>{t("manufacturingDivision_quality_traceability")}</List.Item>
								<List.Item style={textStyle}>{t("manufacturingDivision_quality_supplier")}</List.Item>
							</List>
						</MotionDiv>
						<MotionDiv delay={0.9}>
							<Text style={textStyle}>{t("manufacturingDivision_quality_note")}</Text>
						</MotionDiv>
					</Stack>
				</Box>
			</Box>
		</div>
	);
}

export default ManufacturingDivision;
