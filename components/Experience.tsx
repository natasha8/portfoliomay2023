"use client";

import { Experience } from "@/typing";
import { motion } from "framer-motion";
import WorkCard from "@/components/WorkCard";

type Props = {
	experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
	return (
		<motion.div
			initial={{ x: -200, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			transition={{ duration: 1.2 }}
			viewport={{ once: true }}
			className="relative h-full w-full flex flex-col justify-evenly items-center overflow-hidden text-left md:flex-row  px-10 mx-auto "
		>
			<div className="w-full h-full flex space-x-4 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-hide">
				{experiences?.map((experience) => (
					<WorkCard key={experience._id} experience={experience} />
				))}
			</div>
		</motion.div>
	);
}