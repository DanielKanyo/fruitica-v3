import { useTranslation, Trans } from "react-i18next";
import { NavLink as RouterNavLink } from "react-router-dom";

import { Box, Flex, Stack, List, Text, Button } from "@mantine/core";

import ListIcon from "../../../Components/ListIcon";
import { RoutePaths } from "../../../Routes/routes";

const ABOUT_LIST_ITEMS = [{ key: "aboutSection_listItem_manufacturing" }, { key: "aboutSection_listItem_trading" }];

interface AboutSectionProps {
	isMobile: boolean;
}

function AboutSection({ isMobile }: AboutSectionProps) {
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
			<Stack gap="lg" align="flex-start" mb={isMobile ? 60 : 70}>
				<Text fz={42} lh={1.2}>
					<Trans i18nKey="aboutSection_title" components={{ bold: <b /> }} />
				</Text>
				<Button component={RouterNavLink} to={RoutePaths.AboutUs} variant="filled" color="red.7" radius="xl">
					{t("learnMore")}
				</Button>
			</Stack>

			<Flex gap={isMobile ? "1rem" : 140} justify="space-between" align="flex-start" direction={{ base: "column", md: "row" }}>
				<Stack w={isMobile ? "100%" : 600}>
					<Text c="gray.4" fz={isMobile ? 17 : 18}>
						{t("aboutSection_description1")}
					</Text>
					<List c="gray.4" spacing="md" fw={400} icon={<ListIcon color="teal" />}>
						{ABOUT_LIST_ITEMS.map((item) => (
							<List.Item key={item.key} fz={isMobile ? 17 : 18} c="gray.4">
								{t(item.key)}
							</List.Item>
						))}
					</List>
				</Stack>

				<Stack w={isMobile ? "100%" : 600}>
					<Text c="gray.4" fz={isMobile ? 17 : 18}>
						{t("aboutSection_description2")}
					</Text>
					<Text c="gray.4" fz={isMobile ? 17 : 18}>
						{t("aboutSection_description3")}
					</Text>
				</Stack>
			</Flex>
		</Box>
	);
}

export default AboutSection;
