"use client";
import ArrowLink from "@/components/ArrowLink";
import Skills from "@/components/Skills";
import { client } from "@/lib/sanity.client";
import { motion } from "framer-motion";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "skill"] | order(name)
`;
export default async function SkillsPage() {
	const skills = await client.fetch(query);
	return (
		<motion.div
			initial={{ y: 500, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", duration: 1.2 }}
			viewport={{ once: true }}
			className="w-full h-full flex flex-col "
		>
			<div className="w-full h-full bg-black/50 flex justify-center items-center">
				<Skills skills={skills} />
			</div>
			<ArrowLink nextPath="/experience" />
		</motion.div>
	);
}
