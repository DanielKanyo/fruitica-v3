import { useTranslation } from "react-i18next";

import { useMantineTheme, Stack, Text, Button, Group, Center } from "@mantine/core";

import logo from "../../Assets/Images/fruitica-logo.png";
import "./Home.css";

function Home() {
	const theme = useMantineTheme();
	const { t } = useTranslation();

	return (
		<div style={{ height: "100vh" }}>
			<Center style={{ height: "100vh", zIndex: 10 }}>
				<Stack align="center" gap="md">
					<img src={logo} alt="Fruitica Logo" width={880} style={{ marginBottom: 18 }} />
					<Text
						style={{
							fontSize: 22,
							fontWeight: 400,
							color: theme.colors.gray[1],
							maxWidth: 450,
							textAlign: "center",
							position: "relative",
						}}
					>
						{t("subtitle")}
					</Text>

					<Group mt="md">
						<Button size="lg" radius="xl" variant="filled" color="red.8">
							Products
						</Button>

						<Button className="transparent-element" size="lg" radius="xl" variant="outline" color="white">
							Contact
						</Button>
					</Group>
				</Stack>
			</Center>
		</div>
	);
}

export default Home;
