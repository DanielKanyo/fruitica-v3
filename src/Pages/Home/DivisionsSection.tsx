import { Box, Text, Flex } from "@mantine/core";

interface DivisionsSectionProps {
	isMobile: boolean;
}

function DivisionsSection({ isMobile }: DivisionsSectionProps) {
	return (
		<div
			style={{
				backgroundColor: "#ffffff",
				backgroundImage: "linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, rgba(214, 214, 214, 1) 100%)",
			}}
		>
			<Flex gap={100} style={{ padding: isMobile ? "4rem 1rem" : "4rem 6rem" }}>
				<Box w="100%">
					<Text fz={42} lh={1.4}>
						<b>Two</b> Business Pillars <br /> —
						<br />
						<b>One</b> Integrated <br /> Experties
					</Text>
				</Box>
				<Box w="100%">Manufacturing Division TODO</Box>
				<Box w="100%">Food Ingredients Trading Division TODO</Box>
			</Flex>
		</div>
	);
}

export default DivisionsSection;
