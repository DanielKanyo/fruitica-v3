import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@mantine/carousel";
import { Card, Flex, List, Stack, Text, ThemeIcon } from "@mantine/core";
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
	const autoplay = useRef(Autoplay({ delay: 15000 }));

	return (
		<Carousel
			withIndicators
			withControls={false}
			emblaOptions={{ dragFree: true, align: "start" }}
			plugins={[autoplay.current]}
			classNames={{ indicator: "carousel-indicator" }}
		>
			<Carousel.Slide>
				<Flex gap="xl" style={{ padding: isMobile ? "4rem 1rem" : "4rem 6rem" }} direction={{ base: "column", lg: "row" }}>
					<Card p="3.4rem 3rem" bg="teal.9" w="100%" pos="relative" shadow="xs" radius="xl">
						<Text c="white" fz={22} mb={isMobile ? 60 : 70}>
							Our Competitive Advantage
						</Text>
						<Stack w="90%" gap="xl" px={"1.4rem"}>
							<Text c="gray.2" fz={isMobile ? 17 : 18}>
								Unlike traditional traders, we:
							</Text>
							<List
								spacing="md"
								fw={400}
								icon={
									<ThemeIcon color="teal" size={24} radius="xl">
										<IconCheck size={16} />
									</ThemeIcon>
								}
							>
								{COMPETITIVE_LIST_ITEMS.map((item) => (
									<List.Item key={item} fz={isMobile ? 17 : 18} c="gray.2">
										{item}
									</List.Item>
								))}
							</List>
							<Text c="gray.2" fz={isMobile ? 17 : 18}>
								FRUITICA DOO combines commercial strength with technological understanding.
							</Text>
						</Stack>
					</Card>
					<Card p="3.4rem 3rem" bg="teal.9" w="100%" pos="relative" shadow="xs" radius="xl">
						<Text c="white" fz={22} mb={isMobile ? 60 : 70}>
							Private Label & Industrial Solutions
						</Text>
					</Card>
					<Card p="3.4rem 3rem" bg="teal.9" w="100%" pos="relative" shadow="xs" radius="xl">
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
