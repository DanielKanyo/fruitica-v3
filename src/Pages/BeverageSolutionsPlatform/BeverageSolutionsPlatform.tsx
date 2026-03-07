import { Box, Stack, useMantineTheme, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import MotionDiv from "../../Components/MotionDiv";
import { MOBILE_BREAKPOINT } from "../../constants";

function BeverageSolutionsPlatform() {
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);
	const theme = useMantineTheme();

	return (
		<div className="page">
			<Box
				style={{
					padding: isMobile ? "8rem 1rem 4rem 1rem" : "14rem 0 7rem 0",
					maxWidth: isMobile ? "100%" : "60%",
					margin: isMobile ? "0 16px" : "0 auto",
				}}
			>
				<Stack gap="xl">
					<MotionDiv delay={0.1}>
						<Text
							style={{
								fontSize: isMobile ? 30 : 60,
								color: theme.white,
							}}
						>
							Beverage Solutions <b>Platform</b>
						</Text>
					</MotionDiv>
				</Stack>
			</Box>
		</div>
	);
}

export default BeverageSolutionsPlatform;
