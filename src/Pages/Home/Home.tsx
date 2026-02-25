import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useMantineTheme, Stack, Text, Button, Group, Center, Transition, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import logo from "../../Assets/Images/fruitica-logo.png";

function Home() {
	const theme = useMantineTheme();
	const { t } = useTranslation();
	const isMobile = useMediaQuery("(max-width: 1000px)");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div style={{ height: "100vh" }}>
			<Center style={{ height: "100vh", zIndex: 10 }}>
				<Stack align="center" gap="md">
					<Transition mounted={mounted} transition="fade-up" duration={500} timingFunction="ease">
						{(styles) => (
							<Flex direction="column" align="center" style={styles}>
								<img src={logo} alt="Fruitica Logo" width={isMobile ? 330 : 880} style={{ marginBottom: 18 }} />
								<Text
									style={{
										fontSize: isMobile ? 18 : 22,
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
									<Button size={isMobile ? "md" : "lg"} radius="xl" variant="filled" color="red.8">
										Products
									</Button>

									<Button
										className="transparent-element"
										size={isMobile ? "md" : "lg"}
										radius="xl"
										variant="outline"
										color="white"
									>
										Contact
									</Button>
								</Group>
							</Flex>
						)}
					</Transition>
				</Stack>
			</Center>
		</div>
	);
}

export default Home;
