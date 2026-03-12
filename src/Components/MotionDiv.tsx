import { ReactNode } from "react";

import { motion } from "framer-motion";

interface MotionDivProps {
	children: ReactNode;
}

function MotionDiv({ children }: MotionDivProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.3 }}
		>
			{children}
		</motion.div>
	);
}

export default MotionDiv;
