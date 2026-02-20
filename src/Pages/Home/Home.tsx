import { useMantineTheme, Stack, Title, Text, Button, Group, Center } from "@mantine/core";
import Nav from "../../Components/Nav/Nav";
import "./Home.css";

function Home() {
	const theme = useMantineTheme();

	return (
		<div className="home">
			<div className="bg-img"></div>
			<Nav />

			<Center style={{ height: "100vh", zIndex: 10, position: "relative" }}>
				<Stack align="center" gap="md">
					<Title
						className="page-title"
						order={1}
						style={{
							fontSize: 120,
							fontWeight: 900,
							color: theme.white,
						}}
					>
						FRUITICA
					</Title>

					<Text
						style={{
							fontSize: 22,
							fontWeight: 400,
							color: theme.colors.gray[1],
							maxWidth: 500,
							textAlign: "center",
						}}
					>
						Premium ingredients for exceptional food and beverage production
					</Text>

					<Group mt="md">
						<Button size="lg" radius="xl" variant="filled" color="yellow.8">
							Products
						</Button>

						<Button size="lg" radius="xl" variant="white" color="grey">
							Contact
						</Button>
					</Group>
				</Stack>
			</Center>
		</div>
	);
}

export default Home;
