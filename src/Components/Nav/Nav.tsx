import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { ActionIcon, Button, Group, Menu, Tooltip, Paper, useMantineTheme, Center, Burger, Drawer, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLanguage, IconLemon } from "@tabler/icons-react";

import { useLanguage } from "../../Context/LanguageContext";
import { Languages, LanguagesKeys } from "../../i18n/Languages";
import i18n from "../../i18n/i18n";
import "./Nav.css";

function Nav() {
	const { language, setLanguage } = useLanguage();
	const theme = useMantineTheme();
	const { t } = useTranslation();
	const [opened, { open, close }] = useDisclosure(false);
	const [mounted, setMounted] = useState(false);

	const items = [
		{ label: "About", link: "about" },
		{ label: "Products", link: "products" },
		{ label: "Career", link: "career" },
		{ label: "Contact", link: "contact" },
	];

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleLanguageSelect = useCallback((key: LanguagesKeys) => {
		i18n.changeLanguage(key);
		setLanguage(key);
	}, []);

	return (
		<>
			<Transition mounted={mounted} transition="fade-down" duration={500} timingFunction="ease">
				{(styles) => (
					<Center style={{ ...styles, zIndex: 20, position: "relative" }}>
						<div className="nav-bar-container">
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
										{items.map((item) => (
											<NavLink
												key={item.label}
												to={item.link}
												className={({ isActive }) => (isActive ? "nav-active" : "")}
											>
												<Button className="nav-button" variant="transparent" size="md" radius="xl">
													{item.label}
												</Button>
											</NavLink>
										))}

										<Menu shadow="md" width={110} withArrow radius="lg">
											<Menu.Target>
												<Tooltip label={t("language")} withArrow>
													<ActionIcon
														variant="transparent"
														size="xl"
														color="white"
														radius="xl"
														aria-label="Language"
													>
														<IconLanguage size={28} />
													</ActionIcon>
												</Tooltip>
											</Menu.Target>

											<Menu.Dropdown>
												<Menu.Label>{t("language")}</Menu.Label>
												{Languages.map((lng) => (
													<Menu.Item
														key={lng.code}
														ta="center"
														c={language === lng.code ? theme.colors.red[8] : "dark"}
														onClick={() => handleLanguageSelect(lng.code)}
													>
														{lng.name}
													</Menu.Item>
												))}
											</Menu.Dropdown>
										</Menu>
									</Group>
								</Group>
							</Paper>
						</div>
					</Center>
				)}
			</Transition>

			<Drawer
				size="lg"
				styles={{
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
				{/* TODO: Drawer content */}
			</Drawer>
		</>
	);
}

export default Nav;
