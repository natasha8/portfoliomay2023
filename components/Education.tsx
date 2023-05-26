"use client";
import { Education } from "@/typing";
import { motion } from "framer-motion";
import EduCard from "./EduCard";
import { NavLink } from "./NavLink";
import { TiArrowDownOutline, TiArrowRightOutline } from "react-icons/ti";

type Props = {
	education: Education[];
};

export default function Edu({ education }: Props) {
	return (
		<motion.div
			initial={{ x: -200, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			transition={{ duration: 1.2 }}
			viewport={{ once: true }}
			className="relative h-full w-full flex flex-col justify-evenly items-center overflow-hidden text-left md:flex-row  px-10 mx-auto "
		>
			<div className="w-full h-full flex space-x-4 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-hide">
				{education?.map((edu) => (
					<EduCard key={edu._id} education={edu} />
				))}
				<NavLink href="/projects">
					<TiArrowRightOutline className="hidden xl:flex text-4xl text-pink animate-pulse mr-4" />
					<TiArrowDownOutline className="xl:hidden text-4xl text-pink animate-pulse mr-4" />
				</NavLink>
			</div>
		</motion.div>
	);
}
