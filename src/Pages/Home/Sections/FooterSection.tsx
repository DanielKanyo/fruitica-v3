import { useTranslation } from "react-i18next";

import { Box, Divider, Flex, Stack, Text } from "@mantine/core";

interface FooterProps {
	isMobile: boolean;
}

function Footer({ isMobile }: FooterProps) {
	const { t } = useTranslation();

	return (
		<Box
			c="white"
			style={{
				padding: isMobile ? "5rem 1rem" : "5rem 8rem",
				maxWidth: isMobile ? "100%" : "85%",
				margin: isMobile ? "0 16px" : "0 auto",
			}}
		>
			<Flex gap={isMobile ? "3rem" : 140} justify="space-between" align="flex-start" direction={{ base: "column", md: "row" }}>
				<Stack w={isMobile ? "100%" : 600}>
					<Text fz={22}>Fruitica d.o.o.</Text>
					<Text fz={16} fw={400} maw={400} c="gray.4">
						{t("subtitle")}
					</Text>
				</Stack>
				<Stack w={isMobile ? "100%" : 600}>
					<Text fz={22}>Contact</Text>
					<Text fz={16} fw={400} maw={400} c="gray.4">
						Fruitica d.o.o. <br />
						Čantavir, Serbia <br />
						Near Subotica
					</Text>
					<Text fz={16} fw={400} maw={400} c="gray.4">
						office@fruitica.rs <br />
						+381 (24) 782 600
					</Text>
				</Stack>
			</Flex>
			<Divider my={60} />
			<Text fz={16} fw={400} c="gray.4">
				© 2026 Fruitica d.o.o. All rights reserved.
			</Text>
		</Box>
	);
}

export default Footer;
