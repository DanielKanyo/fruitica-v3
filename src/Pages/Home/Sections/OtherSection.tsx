import { useMemo, useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@mantine/carousel";
import { Box, Card, Flex, List, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import "./OtherSection.css";

function OurCompetitiveAdvantagesCard({ isMobile }: { isMobile: boolean }) {
	const listItems = useMemo(
		() => [
			"Understand real production conditions and formulation challenges",
			"Provide technical insight and application support",
			"Offer flexible supply solutions",
			"Maintain long-term strategic supplier relationships",
		],
		[]
	);

	return (
		<Card bg="transparent" w="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="card-bg coffee-bg"></div>
			<Box className="card-header">
				<Text c="white" fz={22}>
					Our Competitive <br /> <b>Advantage</b>
				</Text>
			</Box>

			<Card mt={-40} radius="xl" h="100%" className="card-body">
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
						{listItems.map((item) => (
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
	);
}

function PrivateLabelAndIndustrialSolutionsCard({ isMobile }: { isMobile: boolean }) {
	const listItems = useMemo(
		() => [
			"Concept development",
			"Recipe formulation",
			"Sample production",
			"Packaging design support",
			"Industrial manufacturing",
			"Quality documentation",
			"Export logistics coordination",
		],
		[]
	);

	return (
		<Card bg="transparent" w="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="card-bg plums-bg"></div>
			<Box className="card-header">
				<Text c="white" fz={22}>
					Private Label & Industrial <br /> <b>Solutions</b>
				</Text>
			</Box>

			<Card mt={-40} radius="xl" h="100%" className="card-body">
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
						{listItems.map((item) => (
							<List.Item key={item} fz={isMobile ? 17 : 18} c="gray.4">
								{item}
							</List.Item>
						))}
					</List>
				</Stack>
			</Card>
		</Card>
	);
}

function ExportAndDistributionCard({ isMobile }: { isMobile: boolean }) {
	const listItems = useMemo(
		() => [
			"Strategic locations near EU border",
			"Access to E75 logistics corridor",
			"Flexible Incoterms (EXW, DAP, ...)",
			"Experience with retail chains",
			"Private label experties",
		],
		[]
	);

	return (
		<Card bg="transparent" w="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="card-bg cherry-bg"></div>
			<Box className="card-header">
				<Text c="white" fz={22}>
					Export & <br /> <b>Distribution</b>
				</Text>
			</Box>
			<Card mt={-40} radius="xl" h="100%" className="card-body">
				<Stack gap="xl" p="xl">
					<Text c="gray.4" fz={isMobile ? 17 : 18}>
						We cooperate with partners across Europe and other international markets. Advantages:
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
						{listItems.map((item) => (
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
	);
}

function QualityAndCertificationsCard({ isMobile }: { isMobile: boolean }) {
	const listItems = useMemo(
		() => ["ISO Standards", "HACCP", "Supplier approval procedures", "Full product traceability", "Batch documentation"],
		[]
	);

	return (
		<Card bg="transparent" w="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="card-bg blueberries-bg"></div>
			<Box className="card-header">
				<Text c="white" fz={22}>
					Quality & <br /> <b>Certifications</b>
				</Text>
			</Box>
			<Card mt={-40} radius="xl" h="100%" className="card-body">
				<Stack gap="xl" p="xl">
					<Text c="gray.4" fz={isMobile ? 17 : 18}>
						Food safety and compliance are fundamental to our operations. Our systems include:
					</Text>
					<List
						spacing="md"
						fw={400}
						icon={
							<ThemeIcon color="blue" size={24} radius="xl">
								<IconCheck size={16} />
							</ThemeIcon>
						}
					>
						{listItems.map((item) => (
							<List.Item key={item} fz={isMobile ? 17 : 18} c="gray.4">
								{item}
							</List.Item>
						))}
					</List>
					<Text c="gray.4" fz={isMobile ? 17 : 18}>
						We are committed to maintaining the highest standards of product integrity.
					</Text>
				</Stack>
			</Card>
		</Card>
	);
}

function CareersCard({ isMobile }: { isMobile: boolean }) {
	const listItems = useMemo(() => ["Responsibility", "Professional development", "Team collaboration", "Continuous improvement"], []);

	return (
		<Card bg="transparent" w="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="card-bg orange-bg"></div>
			<Box className="card-header">
				<Text c="white" fz={22}>
					<b>Careers</b> <br />
					<br />
				</Text>
			</Box>
			<Card mt={-40} radius="xl" h="100%" className="card-body">
				<Stack gap="xl" p="xl">
					<Text c="gray.4" fz={isMobile ? 17 : 18}>
						Our strength lies in our people. <br />
						<br />
						We value:
					</Text>
					<List
						spacing="md"
						fw={400}
						icon={
							<ThemeIcon color="orange" size={24} radius="xl">
								<IconCheck size={16} />
							</ThemeIcon>
						}
					>
						{listItems.map((item) => (
							<List.Item key={item} fz={isMobile ? 17 : 18} c="gray.4">
								{item}
							</List.Item>
						))}
					</List>
					<Text c="gray.4" fz={isMobile ? 17 : 18}>
						If you would like to join our team, please contant us.
					</Text>
				</Stack>
			</Card>
		</Card>
	);
}

function NewsAndEventsCard({ isMobile }: { isMobile: boolean }) {
	return (
		<Card bg="transparent" w="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="card-bg figs-bg"></div>
			<Box className="card-header">
				<Text c="white" fz={22}>
					News & <br />
					<b>Events</b>
				</Text>
			</Box>
			<Card mt={-40} radius="xl" h="100%" className="card-body">
				<Stack gap="xl" p="xl">
					<Text c="gray.4" fz={isMobile ? 17 : 18}>
						Follow our participation in international trade fairs, product launches, and company milestones.
					</Text>
				</Stack>
			</Card>
		</Card>
	);
}

function OtherSection({ isMobile }: { isMobile: boolean }) {
	const autoplay = useRef(Autoplay({ delay: 15000 }));

	return (
		<Carousel
			withIndicators
			bg="transparent"
			style={{ zIndex: 10, marginTop: -160 }}
			withControls={false}
			emblaOptions={{ dragFree: true, align: "start" }}
			plugins={[autoplay.current]}
			classNames={{ indicator: "carousel-indicator" }}
			mb="xl"
		>
			<Carousel.Slide>
				<Flex gap="xl" h="100%" style={{ padding: isMobile ? "4rem 1rem" : "4rem 6rem" }} direction={{ base: "column", lg: "row" }}>
					<OurCompetitiveAdvantagesCard isMobile={isMobile} />
					<PrivateLabelAndIndustrialSolutionsCard isMobile={isMobile} />
					<ExportAndDistributionCard isMobile={isMobile} />
				</Flex>
			</Carousel.Slide>
			<Carousel.Slide>
				<Flex gap="xl" h="100%" style={{ padding: isMobile ? "4rem 1rem" : "4rem 6rem" }} direction={{ base: "column", lg: "row" }}>
					<QualityAndCertificationsCard isMobile={isMobile} />
					<CareersCard isMobile={isMobile} />
					<NewsAndEventsCard isMobile={isMobile} />
				</Flex>
			</Carousel.Slide>
		</Carousel>
	);
}

export default OtherSection;
