import { useTranslation } from "react-i18next";

import { Box, Divider, Flex, Stack, Text, useMantineTheme } from "@mantine/core";

import "./FooterSection.css";

interface FooterProps {
	isMobile: boolean;
}

function Footer({ isMobile }: FooterProps) {
	const theme = useMantineTheme();
	const { t } = useTranslation();

	return (
		<Box
			c="white"
			style={{
				padding: isMobile ? "5rem 2rem" : "5rem 17rem",
				maxWidth: "100%",
				overflow: "hidden",
			}}
			pos="relative"
		>
			<Flex gap={isMobile ? "3rem" : 140} justify="space-between" align="flex-start" direction={{ base: "column", md: "row" }}>
				<Stack w={isMobile ? "100%" : 600}>
					<Text fz={22}>Fruitica d.o.o.</Text>
					<Text fz={17} fw={400} maw={400} c="gray.4">
						{t("subtitle")}
					</Text>
				</Stack>
				<Stack w={isMobile ? "100%" : 600}>
					<Text fz={22}>Contact</Text>
					<Text fz={17} fw={400} maw={400} c="gray.4">
						Fruitica d.o.o. <br />
						Čantavir, Serbia <br />
						Near Subotica
					</Text>
					<Text fz={17} fw={400} maw={400} c="gray.4">
						office@fruitica.rs <br />
						+381 (24) 782 600
					</Text>
				</Stack>
			</Flex>
			<Divider my={60} style={{ borderTop: `1px solid ${theme.colors.gray[5]}` }} />
			<Text fz={17} fw={400} c="gray.4">
				© 2026 Fruitica d.o.o. All rights reserved.
			</Text>
			<div className="chocolate-bg"></div>
		</Box>
	);
}

export default Footer;
