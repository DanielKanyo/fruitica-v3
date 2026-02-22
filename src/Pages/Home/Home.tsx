import { useTranslation } from "react-i18next";

import { useMantineTheme, Stack, Title, Text, Button, Group, Center } from "@mantine/core";

import "./Home.css";

function Home() {
	const theme = useMantineTheme();
	const { t } = useTranslation();

	return (
		<div style={{ height: "100vh" }}>
			<Center style={{ height: "100vh", zIndex: 10 }}>
				<Stack align="center" gap="md">
					<div style={{ position: "relative" }}>
						<div className="donut-bg"></div>
						<div className="peanut-bg"></div>
						<div className="strawberry-bg"></div>
						<div className="coffee-bg"></div>
						<Title
							className="bluberry-title"
							order={1}
							style={{
								fontSize: 120,
								fontWeight: 900,
								color: theme.white,
								position: "relative",
								zIndex: 10,
							}}
						>
							FRUITICA
						</Title>
					</div>

					<Text
						style={{
							fontSize: 22,
							fontWeight: 400,
							color: theme.colors.gray[1],
							maxWidth: 500,
							textAlign: "center",
						}}
					>
						{t("subtitle")}
					</Text>

					<Group mt="md">
						<Button size="lg" radius="xl" variant="filled" color="red.8">
							Products
						</Button>

						<Button
							style={{
								border: "1px solid rgba(255, 255, 255, 0.2)",
								background: "rgba(255, 255, 255, 0.1)",
								backdropFilter: "blur(10px)",
							}}
							size="lg"
							radius="xl"
							variant="outline"
							color="white"
						>
							Contact
						</Button>
					</Group>
				</Stack>
			</Center>
		</div>
	);
}

export default Home;
