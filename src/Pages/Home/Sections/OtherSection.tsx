import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@mantine/carousel";
import { Box, Card, Flex, List, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import "./OtherSection.css";

const COMPETITIVE_LIST_ITEMS = [
	"Understand real production conditions and formulation challenges.",
	"Provide technical insight and application support.",
	"Offer flexible supply solutions.",
	"Maintain long-term strategic supplier relationships.",
];

interface OtherSectionProps {
	isMobile: boolean;
}

function OtherSection({ isMobile }: OtherSectionProps) {
	// TODO
	const autoplay = useRef(Autoplay({ delay: 1500000 }));

	return (
		<Carousel
			withIndicators
			bg={"#2c1913"}
			style={{ zIndex: 0 }}
			withControls={false}
			emblaOptions={{ dragFree: true, align: "start" }}
			plugins={[autoplay.current]}
			classNames={{ indicator: "carousel-indicator" }}
		>
			<Carousel.Slide>
				<Flex gap="xl" style={{ padding: isMobile ? "4rem 1rem" : "4rem 6rem" }} direction={{ base: "column", lg: "row" }}>
					<Card bg="transparent" p={0} w="100%" pos="relative" shadow="xs" radius="xl">
						<div className="coffee-bg"></div>
						<Box className="header-card">
							<Text c="white" fz={22} maw="50%">
								Our Competitive <b>Advantage</b>
							</Text>
						</Box>

						<Card
							mt={-40}
							style={{
								borderTopLeftRadius: "var(--mantine-radius-xl)",
								borderTopRightRadius: "var(--mantine-radius-xl)",
								borderBottomLeftRadius: 0,
								borderBottomRightRadius: 0,
							}}
							className="other-card"
						>
							<Stack w="90%" gap="xl" p="xl">
								<Text c="gray.4" fz={isMobile ? 17 : 18}>
									Unlike traditional traders, we:
								</Text>
								<List
									spacing="md"
									fw={400}
									icon={
										<ThemeIcon color="#2c1913" size={24} radius="xl">
											<IconCheck size={16} />
										</ThemeIcon>
									}
								>
									{COMPETITIVE_LIST_ITEMS.map((item) => (
										<List.Item key={item} fz={isMobile ? 17 : 18} c="gray.4">
											{item}
										</List.Item>
									))}
								</List>
								<Text c="gray.4" fz={isMobile ? 17 : 18}>
									Fruitica d.o.o combines commercial strength with technological understanding.
								</Text>
							</Stack>
						</Card>
					</Card>
					<Card className="other-card" p="md" w="100%" pos="relative" shadow="xs" radius="xl">
						<Text c="white" fz={22} mb={isMobile ? 60 : 70}>
							Private Label & Industrial Solutions
						</Text>
					</Card>
					<Card className="other-card" p="md" w="100%" pos="relative" shadow="xs" radius="xl">
						<Text c="white" fz={22} mb={isMobile ? 60 : 70}>
							Export & Distribution
						</Text>
					</Card>
				</Flex>
			</Carousel.Slide>
			<Carousel.Slide>2</Carousel.Slide>
		</Carousel>
	);
}

export default OtherSection;
