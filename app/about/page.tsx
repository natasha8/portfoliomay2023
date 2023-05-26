"use client";
import AnimatedText from "@/components/AnimatedText";
import { NavLink } from "@/components/NavLink";
import { motion } from "framer-motion";
import { TiArrowDownOutline, TiArrowRightOutline } from "react-icons/ti";

export default async function AboutPage() {
	const text = `Hi there,I'm Natasha, a sharp full-stack web developer.
	 I've honed my skills through tutoring and freelance projects.
	 Eager for professional growth.
	 I'm seeking my first full-time role in web development.
	 Explore my portfolio and let's connect soon!`;

	return (
		<motion.div
			initial={{ y: 500, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", duration: 1.2 }}
			viewport={{ once: true }}
			className="w-full h-full flex flex-col justify-center items-center rounded-full"
		>
			<div className="w-full h-full flex justify-center items-center">
				<AnimatedText
					text={text}
					style="text-purple text-2xl text-text"
				/>
			</div>
			<div className="w-full h-10 pb-1 flex justify-end">
				<NavLink href="/projects">
					<TiArrowDownOutline className="text-4xl text-pink animate-pulse " />
				</NavLink>
			</div>
		</motion.div>
	);
}
