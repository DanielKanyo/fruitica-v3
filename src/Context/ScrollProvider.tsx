import React, { createContext, useContext, useMemo, useRef } from "react";

import { useScrollIntoView } from "@mantine/hooks";

type Keys = "contact" | "divisions";

type ScrollContextValue = {
	scrollTo: (key: Keys) => void;
	setTargetRef: (key: Keys) => (node: HTMLElement | null) => void;
};

const ScrollContext = createContext<ScrollContextValue | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
	const refs = useRef<Record<Keys, ReturnType<typeof useScrollIntoView<HTMLDivElement>>>>({
		divisions: useScrollIntoView<HTMLDivElement>({ offset: 64 }),
		contact: useScrollIntoView<HTMLDivElement>({ offset: 64 }),
	});

	const value = useMemo<ScrollContextValue>(
		() => ({
			scrollTo: (key) => refs.current[key].scrollIntoView({ alignment: "start" }),
			setTargetRef: (key) => (node) => {
				// Mantine expects React ref object, but we can assign underlying current manually:
				// @ts-expect-error private field
				refs.current[key].targetRef.current = node;
			},
		}),
		[]
	);

	return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
}

export function useScrollSections() {
	const ctx = useContext(ScrollContext);
	if (!ctx) throw new Error("useScrollSections must be used within ScrollProvider");
	return ctx;
}
