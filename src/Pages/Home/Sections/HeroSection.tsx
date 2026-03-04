import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { Center, Stack, Group, Button, Text, useMantineTheme } from "@mantine/core";
import { IconChevronDownFilled } from "@tabler/icons-react";

import logo from "../../../Assets/Images/fruitica-logo.png";

interface HeroSectionProps {
	isMobile: boolean;
}

function HeroSection({ isMobile }: HeroSectionProps) {
	const theme = useMantineTheme();
	const { t } = useTranslation();

	return (
		<Center style={{ height: "100vh", position: "relative" }}>
			<Center w="100%" pos="absolute" style={{ bottom: 0, pointerEvents: "none" }} p={40}>
				<motion.div
					animate={{ y: [0, 6, 0] }}
					transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
					style={{ display: "inline-flex" }}
				>
					<IconChevronDownFilled color={theme.colors.gray[3]} size={30} />
				</motion.div>
			</Center>
			<Stack align="center" gap="xl" style={{ zIndex: 20 }}>
				<motion.img
					src={logo}
					alt="Fruitica Logo"
					width={isMobile ? "91%" : 880}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
				/>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
				>
					<Text
						style={{
							fontSize: isMobile ? 18 : 22,
							fontWeight: 400,
							color: theme.colors.gray[1],
							maxWidth: isMobile ? 310 : 450,
							textAlign: "center",
						}}
					>
						{t("subtitle")}
					</Text>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
				>
					<Group gap="xs">
						<Button size={isMobile ? "md" : "lg"} radius="xl" color="red.7">
							Products
						</Button>
						<Button className="transparent-element" size={isMobile ? "md" : "lg"} radius="xl" variant="outline" color="white">
							Contact
						</Button>
					</Group>
				</motion.div>
			</Stack>
		</Center>
	);
}

export default HeroSection;
