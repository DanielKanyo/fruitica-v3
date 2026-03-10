import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Box, List, Stack, Text, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import ListIcon from "../../Components/ListIcon";
import MotionDiv from "../../Components/MotionDiv";
import { MOBILE_BREAKPOINT } from "../../constants";
import "./QualityAndProductSafetyPolicy.css";

function QualityAndProductSafetyPolicy() {
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

	const textStyle = useMemo(
		() => ({
			fontSize: isMobile ? 17 : 18,
			color: theme.colors.gray[2],
		}),
		[isMobile, theme]
	);

	return (
		<div className="page">
			<div className="quality-bg"></div>
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
							<Text style={textTitleStyle}>{t("qualityAndProductSafetyPolicy")}</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.2}>
						<Stack gap="xl">
							<Text style={textStyle}>
								Only satisfied customers return to purchase again - and through regular purchases of our products they
								ensure the long-term sustainability of Fruitica d.o.o., thereby providing a stable foundation for the
								livelihood of all employees in the company.
							</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.3}>
						<Stack gap="xl">
							<Text style={textStyle}>
								Therefore, meeting not only the stated requirements but also the unstated expectations of customers, i.e.,
								ensuring product quality and safety, is a priority obligation of employees at all levels of activity within
								Fruitica d.o.o.
							</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.4}>
						<Stack gap="xl">
							<Text style={textStyle}>
								The achievement of the above objectives is accomplished through the implementation of a Quality and Product
								Safety Management System in accordance with the requirements of ISO 9001, IFS Food, and the HACCP system,
								which includes:
							</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.5}>
						<Stack gap="xl">
							<List spacing="sm" px={isMobile ? "md" : "xl"} fw={400} icon={<ListIcon color="teal.8" />}>
								<List.Item style={textStyle}>
									Compliance with all relevant regulations related to the company's operations
								</List.Item>
								<List.Item style={textStyle}>
									The commitment of management to define business objectives that support this policy and to ensure an
									internal environment in which employees can fully participate in achieving the company's goals
								</List.Item>
								<List.Item style={textStyle}>Involvement of all employees in achieving company objectives</List.Item>
								<List.Item style={textStyle}>
									Continuous efforts to identify and meet customer requirements and expectations in order to ensure their
									satisfaction
								</List.Item>
								<List.Item style={textStyle}>Understanding and managing activities as processes</List.Item>
								<List.Item style={textStyle}>
									Understanding, recognizing, and utilizing the interrelationships between different processes, i.e.,
									applying a systematic approach for more efficient and effective achievement of objectives
								</List.Item>
								<List.Item style={textStyle}>
									Conscious and continuous improvement of product safety and quality, as well as the overall performance
									of the organization
								</List.Item>
								<List.Item style={textStyle}>
									Understanding and ensuring product health safety, quality, legality, and authenticity
								</List.Item>
								<List.Item style={textStyle}>Decision-making based on facts</List.Item>
								<List.Item style={textStyle}>
									Building mutually beneficial, partnership-based relationships with suppliers
								</List.Item>
							</List>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.6}>
						<Stack gap="xl">
							<Text style={textStyle}>
								The Quality and Food Safety Policy is available to all employees and interested parties.
							</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.7}>
						<Stack gap="xl">
							<Text style={textStyle}>
								All employees are obliged to comply with the principles stated in the Quality and Food Safety Policy.
							</Text>
						</Stack>
					</MotionDiv>
					<MotionDiv delay={0.8}>
						<Stack gap="xl">
							<Text style={textStyle}>Čantavir, 01.12.2025</Text>
							<Text style={textStyle}>
								General Director <br />
								Kornel Feješ
							</Text>
							<Text style={textStyle}>PO 01.01; v2-01.12.2025.</Text>
						</Stack>
					</MotionDiv>
				</Stack>
			</Box>
		</div>
	);
}

export default QualityAndProductSafetyPolicy;
