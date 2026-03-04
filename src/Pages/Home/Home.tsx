import { useMediaQuery } from "@mantine/hooks";

import { MOBILE_BREAKPOINT } from "../../constants";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

function Home() {
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);

	return (
		<>
			<HeroSection isMobile={isMobile} />
			<AboutSection isMobile={isMobile} />
		</>
	);
}

export default Home;
