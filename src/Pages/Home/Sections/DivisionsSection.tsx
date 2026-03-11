import { useTranslation, Trans } from "react-i18next";
import { NavLink as RouterNavLink } from "react-router-dom";

import { Text, Flex, Card, Button } from "@mantine/core";

import { useScrollSections } from "../../../Context/ScrollProvider";
import { RoutePaths } from "../../../Routes/routes";
import "./DivisionsSection.css";

interface DivisionItem {
	titleKey: string;
	descriptionKey: string;
	route: string;
	bgClass: string;
}

const DIVISIONS: DivisionItem[] = [
	{
		titleKey: "division_manufacturing_title",
		descriptionKey: "division_manufacturing_desc",
		route: RoutePaths.ManufacturingDivision,
		bgClass: "matcha-bg",
	},
	{
		titleKey: "division_trading_title",
		descriptionKey: "division_trading_desc",
		route: RoutePaths.FoodIngredientsTradingDivision,
		bgClass: "rice-bg",
	},
];

interface DivisionCardProps extends DivisionItem {
	isMobile: boolean;
}

function DivisionCard({ titleKey, descriptionKey, route, bgClass, isMobile }: DivisionCardProps) {
	const { t } = useTranslation();

	return (
		<Card p="xl" className="division-card" w="100%" pos="relative" shadow="xs" radius="xl">
			<div className={`division-bg ${bgClass}`} />

			<Text fz={22} mb={isMobile ? 60 : 70}>
				{t(titleKey)}
			</Text>

			<Text c="gray.7" fz={isMobile ? 17 : 18} maw="60%">
				{t(descriptionKey)}
			</Text>

			<Button component={RouterNavLink} to={route} variant="light" color="gray" radius="xl" mt={24}>
				{t("learnMore")}
			</Button>
		</Card>
	);
}

interface DivisionsSectionProps {
	isMobile: boolean;
}

function DivisionsSection({ isMobile }: DivisionsSectionProps) {
	const { setTargetRef } = useScrollSections();

	useTranslation();

	return (
		<div
			ref={setTargetRef("divisions")}
			style={{
				zIndex: 2,
				position: "relative",
				backgroundColor: "#dedede",
				backgroundImage: "linear-gradient(90deg,rgba(245, 245, 245, 1) 1%, rgba(222, 222, 222, 1) 100%)",
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
				borderRadius: "var(--mantine-radius-xl)",
			}}
		>
			<Flex gap="xl" style={{ padding: isMobile ? "6rem 1rem 12rem" : "6rem 6rem 12rem" }} direction={{ base: "column", lg: "row" }}>
				<Flex w="100%" justify={isMobile ? "center" : "flex-start"} align="center">
					<Text fz={42} lh={1.4} style={{ textAlign: isMobile ? "center" : "left" }}>
						<Trans i18nKey="divisionsSection_heading" components={{ bold: <b />, br: <br /> }} />
					</Text>
				</Flex>

				{DIVISIONS.map((division, index) => (
					<DivisionCard key={index} {...division} isMobile={isMobile} />
				))}
			</Flex>
		</div>
	);
}

export default DivisionsSection;
