import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Box, Stack, useMantineTheme, Text, List } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import ListIcon from "../../Components/ListIcon";
import MotionDiv from "../../Components/MotionDiv";
import { MOBILE_BREAKPOINT } from "../../constants";
import "./BeverageSolutionsPlatform.css";

function BeverageSolutionsPlatform() {
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);
	const theme = useMantineTheme();
	const { t } = useTranslation();

	const textTitleStyle = useMemo(
		() => ({
			fontSize: isMobile ? 30 : 60,
			color: theme.white,
		}),
		[isMobile, theme]
	);

	const textSubTitleStyle = useMemo(
		() => ({
			fontSize: isMobile ? 22 : 40,
			color: theme.colors.gray[1],
		}),
		[isMobile, theme]
	);

	const textStyle = useMemo(
		() => ({
			fontSize: isMobile ? 17 : 18,
			color: theme.colors.gray[2],
		}),
		[isMobile, theme]
	);

	return (
		<div className="page">
			<div className="candy-bg"></div>
			<Box
				style={{
					padding: isMobile ? "8rem 1rem 4rem 1rem" : "14rem 0 7rem 0",
					maxWidth: isMobile ? "100%" : "60%",
					margin: isMobile ? "0 16px" : "0 auto",
				}}
			>
				<Stack gap="xl">
					<MotionDiv delay={0.1}>
						<Stack gap="xl">
							<Text style={textTitleStyle}>{t("beverageSolutionsPlatform")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.2}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								Turnkey Beverage Flavor <b>Systems</b>
							</Text>
							<Text style={textStyle}>
								<b>Complete Beverage Bases</b>
							</Text>
							<Text style={textStyle}>
								We offer complete "turnkey" flavor systems - integrated solutions that combine multiple components into one
								easy-to-dose system.
							</Text>
							<Text style={textStyle}>These systems may include:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Flavor</List.Item>
								<List.Item style={textStyle}>Color</List.Item>
								<List.Item style={textStyle}>Extracts</List.Item>
								<List.Item style={textStyle}>Functional ingredients</List.Item>
								<List.Item style={textStyle}>Juice components</List.Item>
							</List>
							<Text style={textStyle}>Typical applications:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Still drinks</List.Item>
								<List.Item style={textStyle}>Syrups</List.Item>
								<List.Item style={textStyle}>Fruit drinks with vitamins</List.Item>
								<List.Item style={textStyle}>Popular blends (e.g., ACE concepts)</List.Item>
								<List.Item style={textStyle}>Custom beverage developments</List.Item>
							</List>
							<Text style={textStyle}>
								Turnkey systems enable faster product development, simplified formulation and optimized production
								processes.
							</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.3}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								Flavors: Natural Flavors, Extracts, Distillates & <b>Concentrates</b>
							</Text>
							<Text style={textStyle}>We provide a broad flavor portfolio suitable for beverage applications:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Natural flavors</List.Item>
								<List.Item style={textStyle}>Extracts</List.Item>
								<List.Item style={textStyle}>Distillates</List.Item>
								<List.Item style={textStyle}>Flavor concentrates</List.Item>
							</List>
							<Text style={textStyle}>Available Formats:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Liquid flavors</List.Item>
								<List.Item style={textStyle}>Emulsified flavors</List.Item>
								<List.Item style={textStyle}>Concentrated flavor preparations</List.Item>
							</List>
							<Text style={textStyle}>Adapted To:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Powdered beverages</List.Item>
								<List.Item style={textStyle}>RTD drinks</List.Item>
								<List.Item style={textStyle}>Syrups</List.Item>
								<List.Item style={textStyle}>Functional beverages</List.Item>
							</List>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.4}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								Citrus <b>Platform</b>
							</Text>
							<Text style={textStyle}>
								<b>Advanced Citrus Solutions for Beverages</b>
							</Text>
							<Text style={textStyle}>Designed for:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Powdered beverages</List.Item>
								<List.Item style={textStyle}>RTD formats</List.Item>
								<List.Item style={textStyle}>Alcoholic beverages</List.Item>
							</List>
							<Text style={textStyle}>Our citrus ingredient toolbox includes:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Terpenes (including d-limonene)</List.Item>
								<List.Item style={textStyle}>Folded oils</List.Item>
								<List.Item style={textStyle}>Terpeneless / clear-cut oils</List.Item>
								<List.Item style={textStyle}>
									Fractions & isolates (decanal, linalool, nootkatone, valencene, etc.)
								</List.Item>
							</List>
							<Text style={textStyle}>Ideal for developing premium and refreshing citrus profiles.</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.5}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								Mint Oils & Mint <b>Flavors</b>
							</Text>
							<Text style={textStyle}>Our portfolio includes:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Mint oils</List.Item>
								<List.Item style={textStyle}>Mint flavor solutions</List.Item>
							</List>
							<Text style={textStyle}>Common beverage applications:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Mint lemonades</List.Item>
								<List.Item style={textStyle}>Mojito-style drinks</List.Item>
								<List.Item style={textStyle}>Iced tea refreshers</List.Item>
								<List.Item style={textStyle}>Functional beverages with fresh sensory profiles</List.Item>
							</List>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.6}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								Fruit Juice Concentrates & <b>Blends</b>
							</Text>
							<Text style={textStyle}>Fruit juice concentrates and blends provide:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Authentic fruit character</List.Item>
								<List.Item style={textStyle}>Improved body and mouthfeel</List.Item>
								<List.Item style={textStyle}>Labeling advantages (real fruit positioning)</List.Item>
							</List>
							<Text style={textStyle}>Used in:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Fruit beverages</List.Item>
								<List.Item style={textStyle}>Syrups</List.Item>
								<List.Item style={textStyle}>Vitamin drinks</List.Item>
								<List.Item style={textStyle}>Functional drink concepts</List.Item>
							</List>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.7}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								Natural Colors for <b>Beverages</b>
							</Text>
							<Text style={textStyle}>Naturally derived color solutions available in multiple formats:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Liquid</List.Item>
								<List.Item style={textStyle}>Powder</List.Item>
								<List.Item style={textStyle}>Micronized powder</List.Item>
								<List.Item style={textStyle}>Emulsions</List.Item>
							</List>
							<Text style={textStyle}>Selected based on:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Product pH</List.Item>
								<List.Item style={textStyle}>Processing conditions</List.Item>
								<List.Item style={textStyle}>Light exposure</List.Item>
								<List.Item style={textStyle}>Required stability</List.Item>
							</List>
							<Text style={textStyle}>Designed to meet clean-label and modern consumer expectations.</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.8}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								Sweetening Systems & Sugar Reduction <b>Support</b>
							</Text>
							<Text style={textStyle}>Advanced solutions for:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Sugar reduction</List.Item>
								<List.Item style={textStyle}>Sweetness optimization</List.Item>
								<List.Item style={textStyle}>Off-note masking</List.Item>
								<List.Item style={textStyle}>Taste modulation</List.Item>
							</List>
							<Text style={textStyle}>Especially relevant for:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Functional beverages</List.Item>
								<List.Item style={textStyle}>Protein drinks</List.Item>
								<List.Item style={textStyle}>Reduced-calorie formulations</List.Item>
							</List>
							<Text style={textStyle}>We support balanced sensory profiles without compromising consumer acceptance.</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.9}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								Specialty Functional <b>Ingredients</b>
							</Text>
							<Text style={textStyle}>As part of complete beverage solutions, systems may incorporate:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Proteins</List.Item>
								<List.Item style={textStyle}>Fiber</List.Item>
								<List.Item style={textStyle}>Probiotics</List.Item>
								<List.Item style={textStyle}>Tea and botanical extracts</List.Item>
								<List.Item style={textStyle}>Functional beverage components</List.Item>
							</List>
							<Text style={textStyle}>Tailored for modern RTD and functional beverage concepts.</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={1}>
						<Stack gap="xl">
							<Text style={textSubTitleStyle}>
								Fermentation <b>Technologies</b>
							</Text>
							<Text style={textStyle}>Advanced fermentation-based ingredient platforms including:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Bio-based components</List.Item>
								<List.Item style={textStyle}>Fermentation-derived actives</List.Item>
								<List.Item style={textStyle}>Specialty functional ingredients</List.Item>
							</List>
							<Text style={textStyle}>Relevant for:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Innovative beverage concepts</List.Item>
								<List.Item style={textStyle}>Functional product development</List.Item>
								<List.Item style={textStyle}>Clean-label and next-generation formulations</List.Item>
							</List>
						</Stack>
					</MotionDiv>
				</Stack>
			</Box>
		</div>
	);
}

export default BeverageSolutionsPlatform;
