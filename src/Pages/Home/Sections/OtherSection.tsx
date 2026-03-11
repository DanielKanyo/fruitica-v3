import { useMemo, useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@mantine/carousel";
import { Box, Button, Card, Flex, List, Stack, Text } from "@mantine/core";

import ListIcon from "../../../Components/ListIcon";
import { useScrollSections } from "../../../Context/ScrollProvider";
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
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="coffee-beans2-bg"></div>
			<Box className="card-header">
				<Text fz={22}>
					Our Competitive <br /> <b>Advantage</b>
				</Text>
			</Box>

			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isMobile ? "lg" : "xl"}>
					<Text c="dark.4" fz={isMobile ? 17 : 18}>
						Unlike traditional traders, we:
					</Text>
					<List px={isMobile ? "md" : "xl"} spacing="md" fw={400} icon={<ListIcon color="#663f33" />}>
						{listItems.map((item) => (
							<List.Item key={item} fz={isMobile ? 17 : 18} c="dark.4">
								{item}
							</List.Item>
						))}
					</List>
					<Text c="dark.4" fz={isMobile ? 17 : 18}>
						Fruitica d.o.o. combines commercial strength with technological understanding.
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
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="cadies2-bg"></div>
			<Box className="card-header">
				<Text fz={22}>
					Private Label & Industrial <br /> <b>Solutions</b>
				</Text>
			</Box>

			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isMobile ? "lg" : "xl"}>
					<Text c="dark.4" fz={isMobile ? 17 : 18}>
						Fruitica d.o.o. is a trusted private label partner for retail chains and distributions.
						<br />
						We provide full-service development:
					</Text>
					<List px={isMobile ? "md" : "xl"} spacing="md" fw={400} icon={<ListIcon color="pink" />}>
						{listItems.map((item) => (
							<List.Item key={item} fz={isMobile ? 17 : 18} c="dark.4">
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
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="fruits-bg"></div>
			<Box className="card-header">
				<Text fz={22}>
					Export & <br /> <b>Distribution</b>
				</Text>
			</Box>
			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isMobile ? "lg" : "xl"}>
					<Text c="dark.4" fz={isMobile ? 17 : 18}>
						We cooperate with partners across Europe and other international markets. Advantages:
					</Text>
					<List px={isMobile ? "md" : "xl"} spacing="md" fw={400} icon={<ListIcon color="orange" />}>
						{listItems.map((item) => (
							<List.Item key={item} fz={isMobile ? 17 : 18} c="dark.4">
								{item}
							</List.Item>
						))}
					</List>
					<Text c="dark.4" fz={isMobile ? 17 : 18}>
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
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="vegetables-bg"></div>
			<Box className="card-header">
				<Text fz={22}>
					Quality & <br /> <b>Certifications</b>
				</Text>
			</Box>
			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isMobile ? "lg" : "xl"}>
					<Text c="dark.4" fz={isMobile ? 17 : 18}>
						Food safety and compliance are fundamental to our operations. Our systems include:
					</Text>
					<List px={isMobile ? "md" : "xl"} spacing="md" fw={400} icon={<ListIcon color="red.7" />}>
						{listItems.map((item) => (
							<List.Item key={item} fz={isMobile ? 17 : 18} c="dark.4">
								{item}
							</List.Item>
						))}
					</List>
					<Text c="dark.4" fz={isMobile ? 17 : 18}>
						We are committed to maintaining the highest standards of product integrity.
					</Text>
				</Stack>
			</Card>
		</Card>
	);
}

function CareersCard({ isMobile }: { isMobile: boolean }) {
	const listItems = useMemo(() => ["Responsibility", "Professional development", "Team collaboration", "Continuous improvement"], []);
	const { scrollTo } = useScrollSections();

	return (
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="lime-slices-bg"></div>
			<Flex className="card-header" justify="space-between">
				<Text fz={22}>
					<b>Careers</b> <br />
					<br />
				</Text>
			</Flex>
			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isMobile ? "lg" : "xl"}>
					<Text c="dark.4" fz={isMobile ? 17 : 18}>
						Our strength lies in our people. <br />
						<br />
						We value:
					</Text>
					<List px={isMobile ? "md" : "xl"} spacing="md" fw={400} icon={<ListIcon color="green" />}>
						{listItems.map((item) => (
							<List.Item key={item} fz={isMobile ? 17 : 18} c="dark.4">
								{item}
							</List.Item>
						))}
					</List>
					<Text c="dark.4" fz={isMobile ? 17 : 18}>
						If you would like to join our team, please contant us.
					</Text>
					<Button radius="xl" color="green" w="fit-content" onClick={() => scrollTo("contact")}>
						Contact Us
					</Button>
				</Stack>
			</Card>
		</Card>
	);
}

function NewsAndEventsCard({ isMobile }: { isMobile: boolean }) {
	return (
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="figs-bg"></div>
			<Box className="card-header">
				<Text fz={22}>
					News & <br />
					<b>Events</b>
				</Text>
			</Box>
			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isMobile ? "lg" : "xl"}>
					<Text c="dark.4" fz={isMobile ? 17 : 18}>
						Follow our participation in international trade fairs, product launches, and company milestones.
					</Text>
				</Stack>
			</Card>
		</Card>
	);
}

function OtherSection({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) {
	const autoplay = useRef(Autoplay({ delay: 15000 }));

	if (isMobile) {
		return (
			<Carousel
				withIndicators
				bg="transparent"
				style={{ zIndex: 10, marginTop: -160 }}
				withControls={false}
				emblaOptions={{ align: "start", loop: true, dragFree: false }}
				plugins={[autoplay.current]}
				classNames={{ indicator: "carousel-indicator" }}
				mb="xl"
			>
				<Carousel.Slide>
					<Flex gap="xl" h="100%" style={{ padding: "4rem 1rem" }} direction={{ base: "column", lg: "row" }}>
						<OurCompetitiveAdvantagesCard isMobile={true} />
					</Flex>
				</Carousel.Slide>
				<Carousel.Slide>
					<Flex gap="xl" h="100%" style={{ padding: "4rem 1rem" }} direction={{ base: "column", lg: "row" }}>
						<PrivateLabelAndIndustrialSolutionsCard isMobile={true} />
					</Flex>
				</Carousel.Slide>
				<Carousel.Slide>
					<Flex gap="xl" h="100%" style={{ padding: "4rem 1rem" }} direction={{ base: "column", lg: "row" }}>
						<ExportAndDistributionCard isMobile={true} />
					</Flex>
				</Carousel.Slide>
				<Carousel.Slide>
					<Flex gap="xl" h="100%" style={{ padding: "4rem 1rem" }} direction={{ base: "column", lg: "row" }}>
						<QualityAndCertificationsCard isMobile={true} />
					</Flex>
				</Carousel.Slide>
				<Carousel.Slide>
					<Flex gap="xl" h="100%" style={{ padding: "4rem 1rem" }} direction={{ base: "column", lg: "row" }}>
						<CareersCard isMobile={true} />
					</Flex>
				</Carousel.Slide>
				<Carousel.Slide>
					<Flex gap="xl" h="100%" style={{ padding: "4rem 1rem" }} direction={{ base: "column", lg: "row" }}>
						<NewsAndEventsCard isMobile={true} />
					</Flex>
				</Carousel.Slide>
			</Carousel>
		);
	}

	return (
		<Carousel
			withIndicators
			bg="transparent"
			style={{ zIndex: 10, marginTop: -160 }}
			withControls={false}
			emblaOptions={{ align: "start", dragFree: false }}
			plugins={[autoplay.current]}
			classNames={{ indicator: "carousel-indicator" }}
			mb="xl"
		>
			<Carousel.Slide>
				<Flex gap="xl" h="100%" style={{ padding: isTablet ? "4rem 2rem" : "4rem 6rem" }} direction={{ base: "column", lg: "row" }}>
					<OurCompetitiveAdvantagesCard isMobile={false} />
					<PrivateLabelAndIndustrialSolutionsCard isMobile={false} />
					<ExportAndDistributionCard isMobile={false} />
				</Flex>
			</Carousel.Slide>
			<Carousel.Slide>
				<Flex gap="xl" h="100%" style={{ padding: isTablet ? "4rem 2rem" : "4rem 6rem" }} direction={{ base: "column", lg: "row" }}>
					<QualityAndCertificationsCard isMobile={false} />
					<CareersCard isMobile={false} />
					<NewsAndEventsCard isMobile={false} />
				</Flex>
			</Carousel.Slide>
		</Carousel>
	);
}

export default OtherSection;
