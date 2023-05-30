"use client";
import { motion } from "framer-motion";
import WinMockup from "@/components/WinMockup";
import ArrowLink from "@/components/ArrowLink";
import { Project } from "@/typing";

type Props = {
	project: Project[];
};
export default function Projects({ project }: Props) {
	return (
		<motion.div
			initial={{ y: 500, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", duration: 1.2 }}
			viewport={{ once: true }}
			className="w-full h-full bg-black/50 shadow-pink flex flex-col"
		>
			<WinMockup projects={project} />
			<ArrowLink nextPath="/skills" />
		</motion.div>
	);
}
