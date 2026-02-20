import { Link } from "react-router-dom";

import { ActionIcon, Button, Group, Menu, Tooltip, Paper } from "@mantine/core";
import { IconLanguage, IconLemon } from "@tabler/icons-react";

import { useLanguage } from "../../Context/LanguageContext";

function Nav() {
	const { language, setLanguage } = useLanguage();

	const items = [
		{ label: "About", link: "about" },
		{ label: "Products", link: "products" },
		{ label: "Career", link: "career" },
		{ label: "Contact", link: "contact" },
	];

	const languages = [
		{ code: "en", name: "English" },
		{ code: "hu", name: "Magyar" },
		{ code: "sr", name: "Srpski" },
	];

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
					<ActionIcon variant="transparent" size="xl" color="white" radius="xl" aria-label="Home" component={Link} to="/">
						<IconLemon size={32} />
					</ActionIcon>

					{/* Navigation Items */}
					<Group justify="center" gap="sm">
						{items.map((item) => (
							<Button key={item.label} component={Link} to={item.link} c="white" variant="transparent" size="md" radius="xl">
								{item.label}
							</Button>
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
								<Menu.Label>Language</Menu.Label>
								{languages.map((lng) => (
									<Menu.Item
										key={lng.code}
										ta="center"
										c={language === lng.code ? "teal" : "dark"}
										onClick={() => setLanguage(lng.code)}
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
