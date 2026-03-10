import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { NavLink as RouterNavLink } from "react-router-dom";

import { motion } from "framer-motion";

import {
	ActionIcon,
	Group,
	Menu,
	Tooltip,
	useMantineTheme,
	Center,
	Burger,
	Drawer,
	NavLink as MantineNavLink,
	Button,
	Paper,
	Flex,
	ScrollArea,
	Box,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconLanguage, IconLemon } from "@tabler/icons-react";

import { useLanguage } from "../../Context/LanguageProvider";
import { ROUTES } from "../../Routes/routes";
import { MOBILE_BREAKPOINT } from "../../constants";
import i18n from "../../i18n/i18n";
import { LANGUAGES, LanguagesKeys } from "../../i18n/languages";
import "./Nav.css";

interface LanguageMenuProps {
	language: string;
	handleLanguageSelect: (languageKey: LanguagesKeys) => void;
}

function LanguageMenu({ language, handleLanguageSelect }: LanguageMenuProps) {
	const theme = useMantineTheme();
	const { t } = useTranslation();

	return (
		<Menu shadow="md" width={110} withArrow radius="lg">
			<Menu.Target>
				<Tooltip label={t("language")} withArrow>
					<ActionIcon variant="transparent" size="xl" color="white" radius="xl" aria-label="Language">
						<IconLanguage size={28} />
					</ActionIcon>
				</Tooltip>
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>{t("language")}</Menu.Label>
				{LANGUAGES.map((lng) => (
					<Menu.Item
						key={lng.key}
						ta="center"
						c={language === lng.key ? theme.colors.red[8] : "dark"}
						onClick={() => handleLanguageSelect(lng.key)}
					>
						{lng.name}
					</Menu.Item>
				))}
			</Menu.Dropdown>
		</Menu>
	);
}

function Nav() {
	const { language, setLanguage } = useLanguage();
	const [opened, { open, close }] = useDisclosure(false);
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);

	const handleLanguageSelect = useCallback((key: LanguagesKeys) => {
		i18n.changeLanguage(key);
		setLanguage(key);
	}, []);

	return (
		<>
			<Center style={{ zIndex: 30, position: "fixed", width: "100%" }}>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
					className="nav-bar-container"
				>
					<Paper className="paper-element" p="md">
						<Group justify="space-between">
							<RouterNavLink to="/" style={{ height: 44 }} className={({ isActive }) => (isActive ? "nav-active" : "")}>
								<Button
									leftSection={<IconLemon size={26} />}
									variant="transparent"
									color="white"
									radius="xl"
									size="md"
									h={44}
									pl={4}
									fz={18}
								>
									Fruitica d.o.o.
								</Button>
							</RouterNavLink>

							<Group className="nav-items" justify="center" gap="sm">
								<LanguageMenu language={language} handleLanguageSelect={handleLanguageSelect} />
								<Burger
									w={44}
									h={44}
									style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
									color="white"
									opened={opened}
									onClick={open}
									aria-label="Toggle drawer"
								/>
							</Group>
						</Group>
					</Paper>
				</motion.div>
			</Center>

			<Drawer
				size={isMobile ? "xl" : "md"}
				styles={{
					content: {
						overflow: "hidden",
					},
					body: {
						padding: 0,
						height: "calc(100% - 60px)",
					},
				}}
				position={isMobile ? "bottom" : "right"}
				overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
				opened={opened}
				onClose={close}
			>
				<Flex h="100%" direction="column" justify="space-between">
					<ScrollArea h="100%">
						{ROUTES.map((r) => (
							<MantineNavLink
								key={r.label}
								component={RouterNavLink}
								to={r.link}
								color="teal"
								variant="filled"
								label={r.label}
								styles={{
									root: {
										padding: isMobile ? 18 : 22,
									},
									label: {
										fontSize: isMobile ? 18 : 22,
									},
								}}
								onClick={close}
							/>
						))}
					</ScrollArea>

					<Box style={{ position: "relative", pointerEvents: "none" }} h={150}>
						<div className="orange-2-bg"></div>
					</Box>
				</Flex>
			</Drawer>
		</>
	);
}

export default Nav;
