"use client";
import AnimatedText from "@/components/AnimatedText";
import ArrowLink from "@/components/ArrowLink";
import { motion } from "framer-motion";

const text = `Hi there, I'm Natasha, a sharp full-stack web developer.
	 I've honed my skills through tutoring and freelance projects.
	 Eager for professional growth.
	 I'm seeking my first full-time role in web development.
	 Explore my portfolio and let's connect soon!`;

export default function About() {
	return (
		<motion.div
			initial={{ y: 500, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", duration: 1.2 }}
			viewport={{ once: true }}
			className="w-full h-full flex flex-col justify-center items-center rounded-full"
		>
			<ArrowLink nextPath="/" way="up" />

			<div className="w-full h-full flex justify-center text-center xl:text-left items-center space-y-4 bg-black xl:bg-transparent px-4">
				<AnimatedText
					text={text}
					style="text-purple text-2xl space-y-8 font-bold"
				/>
			</div>
			<ArrowLink nextPath="/projects" way="down" />
		</motion.div>
	);
}
