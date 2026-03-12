import { useMemo, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";

import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@mantine/carousel";
import { Box, Button, Card, Flex, List, Stack, Text } from "@mantine/core";

import ListIcon from "../../../Components/ListIcon";
import { useScrollSections } from "../../../Context/ScrollProvider";
import "./OtherSection.css";

function OurCompetitiveAdvantagesCard({ isTablet }: { isTablet: boolean }) {
	const { t } = useTranslation();
	const listItems = useMemo(
		() => [
			"otherSection_competitiveAdv_item1",
			"otherSection_competitiveAdv_item2",
			"otherSection_competitiveAdv_item3",
			"otherSection_competitiveAdv_item4",
		],
		[]
	);

	return (
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="other-coffee-beans-bg"></div>
			<div className="other-coffee-beans2-bg"></div>
			<Box className="card-header">
				<Text fz={22}>
					<Trans i18nKey="otherSection_competitiveAdv_title" components={{ bold: <b />, br: <br /> }} />
				</Text>
			</Box>

			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isTablet ? "lg" : "xl"}>
					<Text c="dark.4" fz={isTablet ? 17 : 18}>
						{t("otherSection_competitiveAdv_intro")}
					</Text>
					<List px={isTablet ? "md" : "xl"} spacing="md" fw={400} icon={<ListIcon color="#663f33" />}>
						{listItems.map((key) => (
							<List.Item key={key} fz={isTablet ? 17 : 18} c="dark.4">
								{t(key)}
							</List.Item>
						))}
					</List>
					<Text c="dark.4" fz={isTablet ? 17 : 18}>
						{t("otherSection_competitiveAdv_closing")}
					</Text>
				</Stack>
			</Card>
		</Card>
	);
}

function PrivateLabelAndIndustrialSolutionsCard({ isTablet }: { isTablet: boolean }) {
	const { t } = useTranslation();
	const listItems = useMemo(
		() => [
			"otherSection_privateLab_item1",
			"otherSection_privateLab_item2",
			"otherSection_privateLab_item3",
			"otherSection_privateLab_item4",
			"otherSection_privateLab_item5",
			"otherSection_privateLab_item6",
			"otherSection_privateLab_item7",
		],
		[]
	);

	return (
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="cadies2-bg"></div>
			<Box className="card-header">
				<Text fz={22}>
					<Trans i18nKey="otherSection_privateLab_title" components={{ bold: <b />, br: <br /> }} />
				</Text>
			</Box>

			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isTablet ? "lg" : "xl"}>
					<Text c="dark.4" fz={isTablet ? 17 : 18}>
						<Trans i18nKey="otherSection_privateLab_intro" />
					</Text>
					<List px={isTablet ? "md" : "xl"} spacing="md" fw={400} icon={<ListIcon color="pink" />}>
						{listItems.map((key) => (
							<List.Item key={key} fz={isTablet ? 17 : 18} c="dark.4">
								{t(key)}
							</List.Item>
						))}
					</List>
				</Stack>
			</Card>
		</Card>
	);
}

function ExportAndDistributionCard({ isTablet }: { isTablet: boolean }) {
	const { t } = useTranslation();
	const listItems = useMemo(
		() => [
			"otherSection_export_item1",
			"otherSection_export_item2",
			"otherSection_export_item3",
			"otherSection_export_item4",
			"otherSection_export_item5",
		],
		[]
	);

	return (
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="fruits-bg"></div>
			<div className="fruits2-bg"></div>
			<Box className="card-header">
				<Text fz={22}>
					<Trans i18nKey="otherSection_export_title" components={{ bold: <b />, br: <br /> }} />
				</Text>
			</Box>
			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isTablet ? "lg" : "xl"}>
					<Text c="dark.4" fz={isTablet ? 17 : 18}>
						{t("otherSection_export_intro")}
					</Text>
					<List px={isTablet ? "md" : "xl"} spacing="md" fw={400} icon={<ListIcon color="orange" />}>
						{listItems.map((key) => (
							<List.Item key={key} fz={isTablet ? 17 : 18} c="dark.4">
								{t(key)}
							</List.Item>
						))}
					</List>
					<Text c="dark.4" fz={isTablet ? 17 : 18}>
						{t("otherSection_export_closing")}
					</Text>
				</Stack>
			</Card>
		</Card>
	);
}

function QualityAndCertificationsCard({ isTablet }: { isTablet: boolean }) {
	const { t } = useTranslation();
	const listItems = useMemo(
		() => [
			"otherSection_quality_item1",
			"otherSection_quality_item2",
			"otherSection_quality_item3",
			"otherSection_quality_item4",
			"otherSection_quality_item5",
		],
		[]
	);

	return (
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="vegetables-bg"></div>
			<div className="vegetables2-bg"></div>
			<Box className="card-header">
				<Text fz={22}>
					<Trans i18nKey="otherSection_quality_title" components={{ bold: <b />, br: <br /> }} />
				</Text>
			</Box>
			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isTablet ? "lg" : "xl"}>
					<Text c="dark.4" fz={isTablet ? 17 : 18}>
						{t("otherSection_quality_intro")}
					</Text>
					<List px={isTablet ? "md" : "xl"} spacing="md" fw={400} icon={<ListIcon color="red.7" />}>
						{listItems.map((key) => (
							<List.Item key={key} fz={isTablet ? 17 : 18} c="dark.4">
								{t(key)}
							</List.Item>
						))}
					</List>
					<Text c="dark.4" fz={isTablet ? 17 : 18}>
						{t("otherSection_quality_closing")}
					</Text>
				</Stack>
			</Card>
		</Card>
	);
}

function CareersCard({ isTablet }: { isTablet: boolean }) {
	const { t } = useTranslation();
	const listItems = useMemo(
		() => ["otherSection_careers_item1", "otherSection_careers_item2", "otherSection_careers_item3", "otherSection_careers_item4"],
		[]
	);
	const { scrollTo } = useScrollSections();

	return (
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="lime-slices-bg"></div>
			<Flex className="card-header" justify="space-between">
				<Text fz={22}>
					<Trans i18nKey="otherSection_careers_title" components={{ bold: <b />, br: <br /> }} />
				</Text>
			</Flex>
			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isTablet ? "lg" : "xl"}>
					<Text c="dark.4" fz={isTablet ? 17 : 18}>
						<Trans i18nKey="otherSection_careers_intro" />
					</Text>
					<List px={isTablet ? "md" : "xl"} spacing="md" fw={400} icon={<ListIcon color="green" />}>
						{listItems.map((key) => (
							<List.Item key={key} fz={isTablet ? 17 : 18} c="dark.4">
								{t(key)}
							</List.Item>
						))}
					</List>
					<Text c="dark.4" fz={isTablet ? 17 : 18}>
						{t("otherSection_careers_closing")}
					</Text>
					<Button radius="xl" color="green" w="fit-content" onClick={() => scrollTo("contact")}>
						{t("otherSection_careers_button")}
					</Button>
				</Stack>
			</Card>
		</Card>
	);
}

function NewsAndEventsCard({ isTablet }: { isTablet: boolean }) {
	const { t } = useTranslation();

	return (
		<Card className="other-card" w="100%" h="100%" pos="relative" shadow="xs" radius="xl" pt={0}>
			<div className="figs-bg"></div>
			<div className="figs2-bg"></div>
			<Box className="card-header">
				<Text fz={22}>
					<Trans i18nKey="otherSection_news_title" components={{ bold: <b />, br: <br /> }} />
				</Text>
			</Box>
			<Card radius="xl" h="100%" className="card-body" p={0} shadow="xs">
				<Stack gap="xl" p={isTablet ? "lg" : "xl"}>
					<Text c="dark.4" fz={isTablet ? 17 : 18}>
						{t("otherSection_news_text")}
					</Text>
				</Stack>
			</Card>
		</Card>
	);
}

function OtherSection({ isTablet }: { isTablet: boolean }) {
	const autoplay = useRef(Autoplay({ delay: 15000 }));

	if (isTablet) {
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
						<OurCompetitiveAdvantagesCard isTablet={true} />
					</Flex>
				</Carousel.Slide>
				<Carousel.Slide>
					<Flex gap="xl" h="100%" style={{ padding: "4rem 1rem" }} direction={{ base: "column", lg: "row" }}>
						<PrivateLabelAndIndustrialSolutionsCard isTablet={true} />
					</Flex>
				</Carousel.Slide>
				<Carousel.Slide>
					<Flex gap="xl" h="100%" style={{ padding: "4rem 1rem" }} direction={{ base: "column", lg: "row" }}>
						<ExportAndDistributionCard isTablet={true} />
					</Flex>
				</Carousel.Slide>
				<Carousel.Slide>
					<Flex gap="xl" h="100%" style={{ padding: "4rem 1rem" }} direction={{ base: "column", lg: "row" }}>
						<QualityAndCertificationsCard isTablet={true} />
					</Flex>
				</Carousel.Slide>
				<Carousel.Slide>
					<Flex gap="xl" h="100%" style={{ padding: "4rem 1rem" }} direction={{ base: "column", lg: "row" }}>
						<CareersCard isTablet={true} />
					</Flex>
				</Carousel.Slide>
				<Carousel.Slide>
					<Flex gap="xl" h="100%" style={{ padding: "4rem 1rem" }} direction={{ base: "column", lg: "row" }}>
						<NewsAndEventsCard isTablet={true} />
					</Flex>
				</Carousel.Slide>
			</Carousel>
		);
	}

	return (
		<Carousel
			withIndicators
			withControls
			bg="transparent"
			styles={{
				controls: {
					padding: "0 2rem",
				},
				control: {
					background: "white",
				},
			}}
			style={{ zIndex: 10, marginTop: -160 }}
			emblaOptions={{ align: "start", dragFree: false }}
			plugins={[autoplay.current]}
			classNames={{ indicator: "carousel-indicator" }}
			controlSize={30}
			mb="xl"
		>
			<Carousel.Slide>
				<Flex gap="xl" h="100%" style={{ padding: isTablet ? "4rem 2rem" : "4rem 6rem" }} direction={{ base: "column", md: "row" }}>
					<OurCompetitiveAdvantagesCard isTablet={false} />
					<PrivateLabelAndIndustrialSolutionsCard isTablet={false} />
					<ExportAndDistributionCard isTablet={false} />
				</Flex>
			</Carousel.Slide>
			<Carousel.Slide>
				<Flex gap="xl" h="100%" style={{ padding: isTablet ? "4rem 2rem" : "4rem 6rem" }} direction={{ base: "column", md: "row" }}>
					<QualityAndCertificationsCard isTablet={false} />
					<CareersCard isTablet={false} />
					<NewsAndEventsCard isTablet={false} />
				</Flex>
			</Carousel.Slide>
		</Carousel>
	);
}

export default OtherSection;
