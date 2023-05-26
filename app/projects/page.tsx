"use client";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import WinMockup from "@/components/WinMockup";
import { motion } from "framer-motion";
import ArrowLink from "@/components/ArrowLink";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

export default async function ProjectsPage() {
	const project = await client.fetch(query);

	return (
		<motion.div
			initial={{ y: 500, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", duration: 1.2 }}
			viewport={{ once: true }}
			className="w-full h-full max-w-[80vw] bg-black/50 shadow-pink flex flex-col border"
		>
			<WinMockup projects={project} />
			<ArrowLink nextPath="/skills" />
		</motion.div>
	);
}
