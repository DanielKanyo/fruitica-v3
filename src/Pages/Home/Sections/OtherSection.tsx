import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@mantine/carousel";
import { Box, Card, Flex, List, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import "./OtherSection.css";

const COMPETITIVE_LIST_ITEMS = [
	"Understand real production conditions and formulation challenges",
	"Provide technical insight and application support",
	"Offer flexible supply solutions",
	"Maintain long-term strategic supplier relationships",
];

const INDUSTRIAL_SOLUTION_LIST_ITEMS = [
	"Concept development",
	"Recipe formulation",
	"Sample production",
	"Packaging design support",
	"Industrial manufacturing",
	"Quality documentation",
	"Export logistics coordination",
];

const EXPORT_ADVANTAGES_LIST_ITEMS = [
	"Strategic locations near EU border",
	"Access to E75 logistics corridor",
	"Flexible Incoterms (EXW, DAP, ...)",
	"Experience with retail chains",
	"Private label experties",
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
			bg="transparent"
			style={{ zIndex: 10, marginTop: -160 }}
			withControls={false}
			emblaOptions={{ dragFree: true, align: "start" }}
			plugins={[autoplay.current]}
			classNames={{ indicator: "carousel-indicator" }}
		>
			<Carousel.Slide>
				<Flex gap="xl" style={{ padding: isMobile ? "4rem 1rem" : "4rem 6rem" }} direction={{ base: "column", lg: "row" }}>
					<Card bg="transparent" p={0} w="100%" pos="relative" shadow="xs" radius="xl">
						<div className="card-bg coffee-bg"></div>
						<Box className="card-header">
							<Text c="white" fz={22}>
								Our Competitive <br /> <b>Advantage</b>
							</Text>
						</Box>

						<Card
							mt={-40}
							style={{
								borderTopLeftRadius: "var(--mantine-radius-xl)",
								borderTopRightRadius: "var(--mantine-radius-xl)",
								borderBottomLeftRadius: 0,
								borderBottomRightRadius: 0,
								height: "100%",
							}}
							className="card-body"
						>
							<Stack gap="xl" p="xl">
								<Text c="gray.4" fz={isMobile ? 17 : 18}>
									Unlike traditional traders, we:
								</Text>
								<List
									spacing="md"
									fw={400}
									icon={
										<ThemeIcon color="#523228" size={24} radius="xl">
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
					<Card bg="transparent" p={0} w="100%" pos="relative" shadow="xs" radius="xl">
						<div className="card-bg olives-bg"></div>
						<Box className="card-header">
							<Text c="white" fz={22}>
								Private Label & Industrial <br /> <b>Solutions</b>
							</Text>
						</Box>

						<Card
							mt={-40}
							style={{
								borderTopLeftRadius: "var(--mantine-radius-xl)",
								borderTopRightRadius: "var(--mantine-radius-xl)",
								borderBottomLeftRadius: 0,
								borderBottomRightRadius: 0,
								height: "100%",
							}}
							className="card-body"
						>
							<Stack gap="xl" p="xl">
								<Text c="gray.4" fz={isMobile ? 17 : 18}>
									Fruitica d.o.o is a trusted private label partner for retail chains and distributions.
									<br />
									We provide full-service development:
								</Text>
								<List
									spacing="md"
									fw={400}
									icon={
										<ThemeIcon color="green.8" size={24} radius="xl">
											<IconCheck size={16} />
										</ThemeIcon>
									}
								>
									{INDUSTRIAL_SOLUTION_LIST_ITEMS.map((item) => (
										<List.Item key={item} fz={isMobile ? 17 : 18} c="gray.4">
											{item}
										</List.Item>
									))}
								</List>
							</Stack>
						</Card>
					</Card>
					<Card bg="transparent" p={0} w="100%" pos="relative" shadow="xs" radius="xl">
						<div className="card-bg cherry-bg"></div>
						<Box className="card-header">
							<Text c="white" fz={22}>
								Export & <br /> <b>Distribution</b>
							</Text>
						</Box>
						<Card
							mt={-40}
							style={{
								borderTopLeftRadius: "var(--mantine-radius-xl)",
								borderTopRightRadius: "var(--mantine-radius-xl)",
								borderBottomLeftRadius: 0,
								borderBottomRightRadius: 0,
								height: "100%",
							}}
							className="card-body"
						>
							<Stack gap="xl" p="xl">
								<Text c="gray.4" fz={isMobile ? 17 : 18}>
									We cooperate with partners across Europe and other international markets.
									<br />
									Advantages:
								</Text>
								<List
									spacing="md"
									fw={400}
									icon={
										<ThemeIcon color="red.9" size={24} radius="xl">
											<IconCheck size={16} />
										</ThemeIcon>
									}
								>
									{EXPORT_ADVANTAGES_LIST_ITEMS.map((item) => (
										<List.Item key={item} fz={isMobile ? 17 : 18} c="gray.4">
											{item}
										</List.Item>
									))}
								</List>
								<Text c="gray.4" fz={isMobile ? 17 : 18}>
									We are continuously seeking long-term distribution partnerships.
								</Text>
							</Stack>
						</Card>
					</Card>
				</Flex>
			</Carousel.Slide>
			<Carousel.Slide>2</Carousel.Slide>
		</Carousel>
	);
}

export default OtherSection;
