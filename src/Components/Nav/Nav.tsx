import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { ActionIcon, Button, Group, Menu, Tooltip, Paper, useMantineTheme } from "@mantine/core";
import { IconLanguage, IconLemon } from "@tabler/icons-react";

import { useLanguage } from "../../Context/LanguageContext";
import { Languages, LanguagesKeys } from "../../i18n/Languages";
import i18n from "../../i18n/i18n";
import "./Nav.css";

function Nav() {
	const { language, setLanguage } = useLanguage();
	const theme = useMantineTheme();
	const { t } = useTranslation();

	const items = [
		{ label: "About", link: "about" },
		{ label: "Products", link: "products" },
		{ label: "Career", link: "career" },
		{ label: "Contact", link: "contact" },
	];

	const handleLanguageSelect = useCallback((key: LanguagesKeys) => {
		i18n.changeLanguage(key);
		setLanguage(key);
	}, []);

	return (
		<div
			style={{
				position: "absolute",
				top: "2em",
				width: "100%",
				zIndex: 20,
				fontSize: 18,
			}}
		>
			<Paper
				radius={78}
				p="md"
				style={{
					background: "rgba(255, 255, 255, 0.1)",
					border: "1px solid rgba(255, 255, 255, 0.2)",
					backdropFilter: "blur(10px)",
				}}
			>
				<Group justify="space-between">
					{/* Logo / Icon */}
					<NavLink to="/" style={{ height: 44 }} className={({ isActive }) => (isActive ? "nav-active" : "")}>
						<ActionIcon className="nav-button" variant="transparent" size="xl" color="white" radius="xl" aria-label="Home">
							<IconLemon size={32} />
						</ActionIcon>
					</NavLink>

					{/* Navigation Items */}
					<Group justify="center" gap="sm">
						{items.map((item) => (
							<NavLink key={item.label} to={item.link} className={({ isActive }) => (isActive ? "nav-active" : "")}>
								<Button className="nav-button" variant="transparent" size="md" radius="xl">
									{item.label}
								</Button>
							</NavLink>
						))}

						{/* Language Menu */}
						<Menu shadow="md" width={110} withArrow radius="lg">
							<Menu.Target>
								<Tooltip label="Language" withArrow>
									<ActionIcon variant="transparent" size="xl" color="white" radius="xl" aria-label="Language">
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
	);
}

export default Nav;
