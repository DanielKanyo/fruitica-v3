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
				backgroundColor: "#dedede",
				backgroundImage: "linear-gradient(90deg,rgba(245, 245, 245, 1) 1%, rgba(222, 222, 222, 1) 100%)",
				borderTopLeftRadius: "var(--mantine-radius-xl)",
				borderTopRightRadius: "var(--mantine-radius-xl)",
				boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
			}}
			pos="relative"
		>
			<Flex gap={isMobile ? "3rem" : 140} justify="space-between" align="flex-start" direction={{ base: "column", md: "row" }}>
				<Stack w={isMobile ? "100%" : 600} gap="xl">
					<Text fz={22} c="black">
						Fruitica d.o.o.
					</Text>
					<Text fz={17} fw={400} maw={400} c="gray.7">
						{t("subtitle")}
					</Text>
					<Group gap="xs">
						<Badge color="teal.8">{t("key_fact1")}</Badge>
						<Badge color="teal.8">{t("key_fact2")}</Badge>
						<Badge color="teal.8">{t("key_fact3")}</Badge>
						<Badge color="teal.8">{t("key_fact4")}</Badge>
						<Badge color="teal.8">{t("key_fact5")}</Badge>
						<Badge color="teal.8">{t("key_fact6")}</Badge>
					</Group>
				</Stack>
				<Stack w={isMobile ? "100%" : 600} ref={setTargetRef("contact")} gap="xl">
					<Text fz={22} c="black">
						{t("contact")}
					</Text>
					<Text fz={17} fw={400} maw={400} c="gray.7">
						Fruitica d.o.o. <br />
						{t("address")} <br />
						{t("near_subotica")} <br />
					</Text>
					<Text fz={17} fw={400} maw={400} c="gray.7">
						office@fruitica.rs <br />
						+381 (24) 782 600
					</Text>
					<Text fz={17} fw={400} maw={400} c="gray.7">
						{t("contact_sales_team")}
					</Text>
				</Stack>
			</Flex>
			<Divider my={60} style={{ borderTop: `1px solid ${theme.colors.gray[6]}` }} />
			<Text fz={17} fw={400} c="gray.7">
				{t("all_rights_reserved")}
			</Text>
			<div className="chocolate-bg"></div>
		</Box>
	);
}

export default Footer;
