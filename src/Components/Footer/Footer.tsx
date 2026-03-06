import { useTranslation } from "react-i18next";

import { Badge, Box, Divider, Flex, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { useScrollSections } from "../../Context/ScrollProvider";
import { MOBILE_BREAKPOINT } from "../../constants";
import "./Footer.css";

function Footer() {
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);
	const theme = useMantineTheme();
	const { t } = useTranslation();
	const { setTargetRef } = useScrollSections();

	return (
		<Box
			c="white"
			style={{
				padding: isMobile ? "5rem 2rem" : "5rem 17rem",
				maxWidth: "100%",
				overflow: "hidden",
			}}
			bg={theme.colors.dark[8]}
			pos="relative"
		>
			<Flex gap={isMobile ? "3rem" : 140} justify="space-between" align="flex-start" direction={{ base: "column", md: "row" }}>
				<Stack w={isMobile ? "100%" : 600} gap="xl">
					<Text fz={22}>Fruitica d.o.o.</Text>
					<Text fz={17} fw={400} maw={400} c="gray.5">
						{t("subtitle")}
					</Text>
					<Group gap="xs">
						<Badge color="teal.8">Established in 1996</Badge>
						<Badge color="teal.8">Instant beverage production since 2012</Badge>
						<Badge color="teal.8">35+ employees</Badge>
						<Badge color="teal.8">ISO certified production</Badge>
						<Badge color="teal.8">95% retail-oriented operations</Badge>
						<Badge color="teal.8">Strong regional distribution network</Badge>
						<Badge color="teal.8">Export-focused business</Badge>
					</Group>
				</Stack>
				<Stack w={isMobile ? "100%" : 600} ref={setTargetRef("contact")} gap="xl">
					<Text fz={22}>Contact</Text>
					<Text fz={17} fw={400} maw={400} c="gray.5">
						Fruitica d.o.o. <br />
						Čantavir, Serbia <br />
						Near Subotica
					</Text>
					<Text fz={17} fw={400} maw={400} c="gray.5">
						office@fruitica.rs <br />
						+381 (24) 782 600
					</Text>
				</Stack>
			</Flex>
			<Divider my={60} style={{ borderTop: `1px solid ${theme.colors.gray[7]}` }} />
			<Text fz={17} fw={400} c="gray.5">
				© 2026 Fruitica d.o.o. All rights reserved.
			</Text>
			<div className="chocolate-bg"></div>
		</Box>
	);
}

export default Footer;
