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
			initial={{ y: 500, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", duration: 1.2 }}
			viewport={{ once: true }}
			className="relative h-[82vh] w-full flex flex-col justify-evenly items-center overflow-hidden text-left xl:flex-row mx-auto pt-10"
		>
			<div className="w-full h-full flex space-x-4 overflow-x-scroll snap-x snap-mandatory scrollbar-hide">
				{experiences?.map((experience) => (
					<WorkCard key={experience._id} experience={experience} />
				))}
			</div>
		</motion.div>
	);
}
