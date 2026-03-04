import { Text, Flex, Card } from "@mantine/core";

import "./DivisionsSection.css";

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
					<Text fz={42} lh={1.4}>
						<b>Two</b> Business Pillars <br /> —
						<br />
						<b>One</b> Integrated <br /> Experties
					</Text>
				</Flex>
				<Card p="xl" className="division-box" w="100%" pos="relative" shadow="xs" radius="xl">
					<div className="division-bg matcha-bg"></div>
					<Text fz={22} mb={isMobile ? 60 : 70}>
						Manufacturing Division
					</Text>
					<Text c="gray.7" fz={18} maw="60%">
						Specialized in instant coffee mixes, matcha latte and functional powdered beverages.
					</Text>
				</Card>
				<Card p="xl" className="division-box" w="100%" pos="relative" shadow="xs" radius="xl">
					<div className="division-bg rice-bg"></div>
					<Text fz={22} mb={isMobile ? 60 : 70}>
						Food Ingredients Trading Division
					</Text>
					<Text c="gray.7" fz={18} maw="60%">
						Import and distribution of high-quality food raw materials for the food industry.
					</Text>
				</Card>
			</Flex>
		</div>
	);
}

export default DivisionsSection;
