"use client";

import ArrowLink from "@/components/ArrowLink";
import Skills from "@/components/Skills";
import { Skill } from "@/typing";
import { motion } from "framer-motion";

type Props = {
	skills: Skill[];
};
export default function SkillsContainer({ skills }: Props) {
	return (
		<motion.div
			initial={{ y: 500, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", duration: 1.2 }}
			viewport={{ once: true }}
			className="w-full h-full flex flex-col "
		>
			<ArrowLink nextPath="/projects" way="up" />
			<div className="w-full h-full bg-black/50 flex justify-center items-center">
				<Skills skills={skills} />
			</div>
			<ArrowLink nextPath="/experience" way="down" />
		</motion.div>
	);
}
