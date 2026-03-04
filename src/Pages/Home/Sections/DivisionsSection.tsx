import { NavLink as RouterNavLink } from "react-router-dom";

import { Text, Flex, Card, Button } from "@mantine/core";

import { RoutePaths } from "../../../Routes/routes";
import "./DivisionsSection.css";

interface DivisionItem {
	title: string;
	description: string;
	route: string;
	bgClass: string;
}

const DIVISIONS: DivisionItem[] = [
	{
		title: "Manufacturing Division",
		description: "Specialized in instant coffee mixes, matcha latte and functional powdered beverages.",
		route: RoutePaths.ManufacturingDivision,
		bgClass: "matcha-bg",
	},
	{
		title: "Food Ingredients Trading Division",
		description: "Import and distribution of high-quality food raw materials for the food industry.",
		route: RoutePaths.FoodIngredientsTradingDivision,
		bgClass: "rice-bg",
	},
];

interface DivisionCardProps extends DivisionItem {
	isMobile: boolean;
}

function DivisionCard({ title, description, route, bgClass, isMobile }: DivisionCardProps) {
	return (
		<Card p="xl" className="division-box" w="100%" pos="relative" shadow="xs" radius="xl">
			<div className={`division-bg ${bgClass}`} />

			<Text fz={22} mb={isMobile ? 60 : 70}>
				{title}
			</Text>

			<Text c="gray.7" fz={isMobile ? 17 : 18} maw="60%">
				{description}
			</Text>

			<Button component={RouterNavLink} to={route} variant="light" color="gray" radius="xl" mt={24}>
				Learn More
			</Button>
		</Card>
	);
}

interface DivisionsSectionProps {
	isMobile: boolean;
}

function DivisionsSection({ isMobile }: DivisionsSectionProps) {
	return (
		<div
			style={{
				backgroundColor: "#dedede",
				backgroundImage: "linear-gradient(90deg,rgba(245, 245, 245, 1) 1%, rgba(222, 222, 222, 1) 100%)",
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
			}}
		>
			<Flex gap="xl" style={{ padding: isMobile ? "4rem 1rem" : "4rem 6rem" }} direction={{ base: "column", lg: "row" }}>
				<Flex w="100%" justify="flex-start" align="center">
					<Text fz={42} lh={1.4} style={{ textAlign: isMobile ? "center" : "left" }}>
						<b>Two</b> Business Pillars <br /> —
						<br />
						<b>One</b> Integrated <br /> Expertise
					</Text>
				</Flex>

				{DIVISIONS.map((division) => (
					<DivisionCard key={division.title} {...division} isMobile={isMobile} />
				))}
			</Flex>
		</div>
	);
}

export default DivisionsSection;
