import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import { ActionIcon, Button, Group, Menu, Tooltip, Paper, useMantineTheme, Center, Burger, Drawer, Stack, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLanguage, IconLemon } from "@tabler/icons-react";

import { useLanguage } from "../../Context/LanguageContext";
import { ROUTES } from "../../Routes/routes";
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
						c={language === lng.key ? theme.colors.teal[8] : "dark"}
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
	const theme = useMantineTheme();
	const [opened, { open, close }] = useDisclosure(false);

	const handleLanguageSelect = useCallback((key: LanguagesKeys) => {
		i18n.changeLanguage(key);
		setLanguage(key);
	}, []);

	return (
		<>
			<Center style={{ zIndex: 20, position: "fixed", width: "100%" }}>
				<motion.div
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: 20 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="nav-bar-container"
				>
					<Paper className="transparent-element" p="md">
						<Group justify="space-between">
							<NavLink to="/" style={{ height: 44 }} className={({ isActive }) => (isActive ? "nav-active" : "")}>
								<ActionIcon
									className="nav-button"
									variant="transparent"
									size="xl"
									color="white"
									radius="xl"
									aria-label="Home"
								>
									<IconLemon size={32} />
								</ActionIcon>
							</NavLink>

							<Burger className="burger" color="white" opened={opened} onClick={open} aria-label="Toggle drawer" />

							<Group className="nav-items" justify="center" gap="sm">
								{ROUTES.map((r) => (
									<NavLink key={r.label} to={r.link} className={({ isActive }) => (isActive ? "nav-active" : "")}>
										<Button className="nav-button" variant="transparent" size="md" radius="xl">
											{r.label}
										</Button>
									</NavLink>
								))}

								<LanguageMenu language={language} handleLanguageSelect={handleLanguageSelect} />
							</Group>
						</Group>
					</Paper>
				</motion.div>
			</Center>

			<Drawer
				size="lg"
				styles={{
					body: {
						height: "calc(100% - 60px)",
					},
					content: {
						borderTopLeftRadius: theme.radius.lg,
						borderTopRightRadius: theme.radius.lg,
					},
				}}
				position="bottom"
				overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
				opened={opened}
				onClose={close}
			>
				<Stack h="100%" align="stretch" justify="space-between" gap="md">
					<div>{/* TODO: Top section */}</div>
					<Flex justify="flex-end" gap="xs">
						<Button.Group>
							{LANGUAGES.map((lng) => (
								<Button
									key={lng.key}
									variant={language === lng.key ? "filled" : "light"}
									color={language === lng.key ? "teal" : "gray"}
									radius="xl"
									onClick={() => handleLanguageSelect(lng.key)}
								>
									{lng.name}
								</Button>
							))}
						</Button.Group>
					</Flex>
				</Stack>
			</Drawer>
		</>
	);
}

export default Nav;
