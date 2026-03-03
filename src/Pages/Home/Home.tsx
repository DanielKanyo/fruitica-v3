import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { useMantineTheme, Stack, Text, Button, Group, Center, Box, List, ThemeIcon, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCheck } from "@tabler/icons-react";

import logo from "../../Assets/Images/fruitica-logo.png";
import { MOBILE_BREAKPOINT } from "../../constants";

function Home() {
	const theme = useMantineTheme();
	const { t } = useTranslation();
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);

	return (
		<>
			<Center style={{ height: "100vh" }}>
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
							<Button size={isMobile ? "md" : "lg"} radius="xl" color="red.8">
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
					</motion.div>
				</Stack>
			</Center>

			<Box
				c="white"
				style={{
					padding: isMobile ? "3rem 1rem" : "4rem 8rem",
					maxWidth: "100%",
					margin: "0 16px",
				}}
			>
				<Text fz={36} mb={70} lh={1.2}>
					What is <b>Fruitica</b> d.o.o?
				</Text>
				<Flex gap={isMobile ? 40 : 140} justify="space-between" align="flex-start" direction={{ base: "column", md: "row" }}>
					<Stack w={isMobile ? "100%" : 600}>
						<Text c="gray.4" fz={18}>
							Fruitica is a Serbian food company operating in two strong and complementary business units.
						</Text>
						<List
							c="gray.4"
							spacing="md"
							fw={400}
							icon={
								<ThemeIcon color="teal" size={24} radius="xl">
									<IconCheck size={16} />
								</ThemeIcon>
							}
						>
							<List.Item fz={18} c="gray.4">
								Instant Powdered Beverage Manufacturing
							</List.Item>
							<List.Item fz={18} c="gray.4">
								Food Ingredients Import & Distribution
							</List.Item>
						</List>
					</Stack>

					<Stack w={isMobile ? "100%" : 600}>
						<Text c="gray.4" fz={18}>
							Established in 1996, we combine nearly three decades of sourcing expertise with modern production capabilities
							in our factory located in Čantavir, Serbia.
							<br />
							<br />
							We serve retail chains, distributors, and food manufacturers across regional and international markets.
						</Text>
					</Stack>
				</Flex>
			</Box>
		</>
	);
}

export default Home;
