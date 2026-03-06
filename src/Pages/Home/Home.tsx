import { useMediaQuery } from "@mantine/hooks";

import { MOBILE_BREAKPOINT } from "../../constants";
import AboutSection from "./Sections/AboutSection";
import DivisionsSection from "./Sections/DivisionsSection";
import Footer from "./Sections/FooterSection";
import HeroSection from "./Sections/HeroSection";
import OtherSection from "./Sections/OtherSection";

function Home() {
	const isMobile = useMediaQuery(`(max-width: ${MOBILE_BREAKPOINT}px)`);

	return (
		<>
			<HeroSection isMobile={isMobile} />
			<AboutSection isMobile={isMobile} />
			<DivisionsSection isMobile={isMobile} />
			<OtherSection isMobile={isMobile} />
			<Footer isMobile={isMobile} />
		</>
	);
}

export default Home;
