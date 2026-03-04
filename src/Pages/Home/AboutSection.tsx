import { Box, Flex, Stack, List, ThemeIcon, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

interface AboutSectionProps {
	isMobile: boolean;
}

function AboutSection({ isMobile }: AboutSectionProps) {
	return (
		<Box
			c="white"
			style={{
				padding: isMobile ? "5rem 1rem" : "5rem 8rem",
				maxWidth: isMobile ? "100%" : "85%",
				margin: isMobile ? "0 16px" : "0 auto",
			}}
		>
			<Text fz={42} mb={isMobile ? 60 : 70} lh={1.2}>
				What is <b>Fruitica</b>?
			</Text>
			<Flex gap={isMobile ? "1rem" : 140} justify="space-between" align="flex-start" direction={{ base: "column", md: "row" }}>
				<Stack w={isMobile ? "100%" : 600}>
					<Text c="gray.4" fz={isMobile ? 17 : 18}>
						Fruitica d.o.o. is a Serbian food company operating in two strong and complementary business units.
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
						<List.Item fz={isMobile ? 17 : 18} c="gray.4">
							Instant Powdered Beverage Manufacturing
						</List.Item>
						<List.Item fz={isMobile ? 17 : 18} c="gray.4">
							Food Ingredients Import & Distribution
						</List.Item>
					</List>
				</Stack>

				<Stack w={isMobile ? "100%" : 600}>
					<Text c="gray.4" fz={isMobile ? 17 : 18}>
						Established in 1996, we combine nearly three decades of sourcing expertise with modern production capabilities in
						our factory located in Čantavir, Serbia.
						<br />
						<br />
						We serve retail chains, distributors, and food manufacturers across regional and international markets.
					</Text>
				</Stack>
			</Flex>
		</Box>
	);
}

export default AboutSection;
