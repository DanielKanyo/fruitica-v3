import { Box, Text, Flex, Center } from "@mantine/core";

import "./DivisionsSection.css";

interface DivisionsSectionProps {
	isMobile: boolean;
}

function DivisionsSection({ isMobile }: DivisionsSectionProps) {
	return (
		<div
			style={{
				backgroundColor: "#dedede",
				backgroundImage: "linear-gradient(90deg,rgba(222, 222, 222, 1) 1%, rgba(245, 245, 245, 1) 100%)",
			}}
		>
			<Flex gap="xl" style={{ padding: isMobile ? "4rem 1rem" : "4rem 6rem" }}>
				<Center w="100%">
					<Box>
						<Text fz={42} lh={1.4}>
							<b>Two</b> Business Pillars <br /> —
							<br />
							<b>One</b> Integrated <br /> Experties
						</Text>
					</Box>
				</Center>
				<Box p="xl" className="division-box transparent-element" w="100%" pos="relative">
					<div className="division-bg matcha-bg"></div>
					<Text fz={22} mb={isMobile ? 60 : 70}>
						Manufacturing Division
					</Text>
					<Text c="gray.7" fz={18} maw="60%">
						Specialized in instant coffee mixes, matcha latte and functional powdered beverages.
					</Text>
				</Box>
				<Box p="xl" className="division-box transparent-element" w="100%" pos="relative">
					<div className="division-bg rice-bg"></div>
					<Text fz={22} mb={isMobile ? 60 : 70}>
						Food Ingredients Trading Division
					</Text>
					<Text c="gray.7" fz={18} maw="60%">
						Import and distribution of high-quality food raw materials for the food industry.
					</Text>
				</Box>
			</Flex>
		</div>
	);
}

export default DivisionsSection;
