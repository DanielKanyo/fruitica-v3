import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { useMantineTheme, Stack, Text, Button, Group, Center } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import logo from "../../Assets/Images/fruitica-logo.png";

function Home() {
	const theme = useMantineTheme();
	const { t } = useTranslation();
	const isMobile = useMediaQuery("(max-width: 1000px)");

	return (
		<Center style={{ height: "100vh", zIndex: 10 }}>
			<Stack align="center" gap="xl">
				<motion.img
					src={logo}
					alt="Fruitica Logo"
					width={isMobile ? "96%" : 880}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				/>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
				>
					<Text
						style={{
							fontSize: isMobile ? 16 : 22,
							fontWeight: 400,
							color: theme.colors.gray[1],
							maxWidth: isMobile ? 270 : 450,
							textAlign: "center",
						}}
					>
						{t("subtitle")}
					</Text>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
				>
					<Group gap="xs">
						<Button size={isMobile ? "md" : "lg"} radius="xl" color="red.8">
							Products
						</Button>
						<Button size={isMobile ? "md" : "lg"} radius="xl" variant="outline" color="white">
							Contact
						</Button>
					</Group>
				</motion.div>
			</Stack>
		</Center>
	);
}

export default Home;
