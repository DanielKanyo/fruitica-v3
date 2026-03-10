import { useMemo } from "react";

import { Box, Stack, useMantineTheme, Text, List } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import ListIcon from "../../Components/ListIcon";
import MotionDiv from "../../Components/MotionDiv";
import { MOBILE_BREAKPOINT } from "../../constants";
import "./CoreIndustrialIngredientsPortfolio.css";

function CoreIndustrialIngredientsPortfolio() {
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);
	const theme = useMantineTheme();

	const textTitleStyle = useMemo(
		() => ({
			fontSize: isMobile ? 30 : 60,
			color: theme.white,
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
			<div className="coconut-bg"></div>
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
							<Text style={textTitleStyle}>
								Core Industrial Ingredients <b>Portfolio</b>
							</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.2}>
						<Stack gap="xl">
							<Text style={textStyle}>
								In addition to advanced beverage systems, we supply essential industrial raw materials:
							</Text>
							<Text style={textStyle}>
								<b>Dairy & Creamer Components</b>
							</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Palm-based fat powders</List.Item>
								<List.Item style={textStyle}>Coconut fat powders</List.Item>
								<List.Item style={textStyle}>Non-dairy creamers</List.Item>
								<List.Item style={textStyle}>Topping bases</List.Item>
								<List.Item style={textStyle}>Foaming agents</List.Item>
							</List>
							<Text style={textStyle}>
								<b>Hot Beverage Ingredients</b>
							</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Instant coffee</List.Item>
								<List.Item style={textStyle}>Matcha green tea powder</List.Item>
								<List.Item style={textStyle}>Black tea powder</List.Item>
							</List>
							<Text style={textStyle}>
								<b>Sweeteners & Cocoa</b>
							</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Sugar</List.Item>
								<List.Item style={textStyle}>Glucose powder</List.Item>
								<List.Item style={textStyle}>Maltodextrine</List.Item>
								<List.Item style={textStyle}>Dextrose</List.Item>
								<List.Item style={textStyle}>Cocoa powder</List.Item>
							</List>
							<Text style={textStyle}>
								<b>Functional Ingredients</b>
							</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Collagen</List.Item>
								<List.Item style={textStyle}>Protein ingredients</List.Item>
								<List.Item style={textStyle}>Specialty industrial components</List.Item>
							</List>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.3}>
						<Stack gap="xl">
							<Text style={textStyle}>
								<b>Nut Ingredients</b>
							</Text>
							<Text style={textStyle}>
								We supply high-quality peanut-based ingredients suitable for industrial food production:
							</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Peanut kernels (various grades and specifications)</List.Item>
								<List.Item style={textStyle}>Peanut paste (smooth or customized texture)</List.Item>
								<List.Item style={textStyle}>Pistachio paste</List.Item>
							</List>
							<Text style={textStyle}>Applications include:</Text>
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>Confectionery production</List.Item>
								<List.Item style={textStyle}>Bakery fillings</List.Item>
								<List.Item style={textStyle}>Creams and spreads</List.Item>
								<List.Item style={textStyle}>Protein and snack products</List.Item>
								<List.Item style={textStyle}>Industrial peanut-based formulations</List.Item>
							</List>
							<Text style={textStyle}>Available according to agreed specifications and quality requirements.</Text>
						</Stack>
					</MotionDiv>
				</Stack>
			</Box>
		</div>
	);
}

export default CoreIndustrialIngredientsPortfolio;
