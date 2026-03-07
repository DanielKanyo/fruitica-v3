import { ReactNode } from "react";

import { motion } from "framer-motion";

interface MotionDivProps {
	delay: number;
	children: ReactNode;
}

function MotionDiv({ delay, children }: MotionDivProps) {
	return (
		<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay }}>
			{children}
		</motion.div>
	);
}

export default MotionDiv;
