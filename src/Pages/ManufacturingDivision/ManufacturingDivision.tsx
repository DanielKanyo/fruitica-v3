import { Box, Card, Flex, List, Stack, Text, ThemeIcon, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCheck } from "@tabler/icons-react";

import MotionDiv from "../../Components/MotionDiv";
import { MOBILE_BREAKPOINT } from "../../constants";
import "./ManufacturingDivision.css";

interface ProductItem {
	title: string;
	listItems: string[];
	bgClass: string;
}

const PRODUCTS: ProductItem[] = [
	{
		title: "Instant Coffee Mixes",
		listItems: ["3 in 1", "2 in 1", "Sugar-free options", "Custom formulations"],
		bgClass: "product-coffee-beans-bg",
	},
	{
		title: "Matcha Latte Range",
		listItems: ["Classic", "Collagen", "Probiotic", "Vegan options", "Light (No Added Sugar, Stevia)"],
		bgClass: "product-matcha-bg",
	},
	{
		title: "Other Instant Beverages",
		listItems: ["Cappuccino", "Chai Latte", "Hot Chocolate", "Functional powdered drinks"],
		bgClass: "product-hot-chocolate-bg",
	},
];

interface ProductCardProps extends ProductItem {
	isMobile: boolean;
}

function ProductCard({ title, listItems, bgClass, isMobile }: ProductCardProps) {
	return (
		<Card p="xl" className="product-card" w="100%" pos="relative" shadow="xs" radius="xl">
			<div className={`product-bg ${bgClass}`} />
			<Text fz={22} mb={50}>
				{title}
			</Text>

			<List
				spacing="sm"
				fw={400}
				icon={
					<ThemeIcon color="dark.4" size={24} radius="xl">
						<IconCheck size={16} />
					</ThemeIcon>
				}
			>
				{listItems.map((item) => (
					<List.Item key={item} fz={isMobile ? 17 : 18} c="gray.7">
						{item}
					</List.Item>
				))}
			</List>
		</Card>
	);
}

function ManufacturingDivision() {
	const theme = useMantineTheme();
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);

	const textStyle = {
		fontSize: isMobile ? 17 : 18,
		color: theme.colors.gray[2],
	};

	const textSubTitleStyle = {
		fontSize: isMobile ? 22 : 40,
		color: theme.colors.gray[1],
	};

	const textTitleStyle = {
		fontSize: isMobile ? 30 : 60,
		color: theme.white,
	};

	return (
		<div className="page">
			<Box
				style={{
					margin: isMobile ? "0 16px" : "0 auto",
				}}
			>
				<Box
					style={{
						margin: "0 auto",
						padding: isMobile ? "8rem 1rem 0 1rem" : "14rem 0 0 0",
						maxWidth: isMobile ? "100%" : "60%",
					}}
				>
					<Stack gap="xl">
						<MotionDiv delay={0.1}>
							<Text style={textTitleStyle}>
								Manufacturing <b>Division</b>
							</Text>
						</MotionDiv>

						<MotionDiv delay={0.2}>
							<Text style={textSubTitleStyle}>
								Instant Powdered <b>Beverages</b>
							</Text>
						</MotionDiv>
						<MotionDiv delay={0.3}>
							<Text style={textStyle}>
								Our production facility in Čantavir operates under strict food safety standards and modern technological
								processes.
							</Text>
						</MotionDiv>
					</Stack>
				</Box>

				<MotionDiv delay={0.4}>
					<Flex
						gap="xl"
						style={{ padding: isMobile ? "3rem 0 3rem 0" : "4rem 6rem 4rem 6rem" }}
						direction={{ base: "column", xl: "row" }}
					>
						{PRODUCTS.map((product, index) => (
							<ProductCard key={index} {...product} isMobile={isMobile} />
						))}
					</Flex>
				</MotionDiv>

				<Box
					style={{
						margin: "0 auto",
						maxWidth: isMobile ? "100%" : "60%",
						padding: isMobile ? "0 1rem 4rem 1rem" : "0 0 7rem 0",
					}}
				>
					<Stack gap="xl">
						<MotionDiv delay={0.5}>
							<Text style={textSubTitleStyle}>
								Production <b>Capabilities</b>
							</Text>
						</MotionDiv>
						<MotionDiv delay={0.6}>
							<List
								spacing="sm"
								px="xl"
								fw={400}
								icon={
									<ThemeIcon color="teal.8" size={24} radius="xl">
										<IconCheck size={16} />
									</ThemeIcon>
								}
							>
								<List.Item style={textStyle}>Mixing systems</List.Item>
								<List.Item style={textStyle}>Sachet packaging lines</List.Item>
								<List.Item style={textStyle}>Multipack retail boxes</List.Item>
								<List.Item style={textStyle}>Display & promotional packaging</List.Item>
								<List.Item style={textStyle}>Custom batch production</List.Item>
							</List>
						</MotionDiv>
						<MotionDiv delay={0.7}>
							<Text style={textSubTitleStyle}>
								Quality & <b>Safety</b>
							</Text>
						</MotionDiv>
						<MotionDiv delay={0.8}>
							<List
								spacing="sm"
								px="xl"
								fw={400}
								icon={
									<ThemeIcon color="teal.8" size={24} radius="xl">
										<IconCheck size={16} />
									</ThemeIcon>
								}
							>
								<List.Item style={textStyle}>ISO compliant</List.Item>
								<List.Item style={textStyle}>HACCP implemented</List.Item>
								<List.Item style={textStyle}>Full traceability system</List.Item>
								<List.Item style={textStyle}>Controlled supplier network</List.Item>
							</List>
						</MotionDiv>
						<MotionDiv delay={0.9}>
							<Text style={textStyle}>Each batch is monitored to ensure consistent quality and safety.</Text>
						</MotionDiv>
					</Stack>
				</Box>
			</Box>
		</div>
	);
}

export default ManufacturingDivision;
