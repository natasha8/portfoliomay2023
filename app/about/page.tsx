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
		<div className="w-full h-full flex flex-col xl:flex-row justify-center items-center rounded-full">
			<div className="w-3/4">
				<AnimatedText
					text={text}
					style="text-purple text-2xl text-text"
				/>
			</div>
			<NavLink href="/projects">
				<TiArrowRightOutline className="hidden xl:block text-4xl text-pink animate-pulse mr-4" />
				<TiArrowDownOutline className="xl:hidden text-4xl text-pink animate-pulse mr-4" />
			</NavLink>
		</div>
	);
}
