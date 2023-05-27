"use client";

import { Skill } from "@/typing";
import { motion } from "framer-motion";
import SingleSkill from "./Skill";

type Props = {
	skills: Skill[];
};
export default function Skills({ skills }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			//   viewport={{ once: true }}
			transition={{ duration: 1.5 }}
			className="w-11/12 h-11/12 flex relative flex-col text-center md:text-left xl:flex-row justify-center xl:space-y-0 mx-auto items-center border border-pink p-12 rounded-md shadow-purple shadow-lg"
		>
			{/* <h3 className="absolute top-36 uppercase tracking-[3px] text-sm italic">
                hover
            </h3> */}
			<div className="grid grid-cols-3 xl:grid-cols-6 gap-6 ">
				{/* Get first half of skills and map */}
				{skills?.slice(0, skills.length / 2).map((skill) => (
					<SingleSkill key={skill._id} skill={skill} />
				))}

				{/* Get second half of skills and map with direction left */}
				{skills
					?.slice(skills.length / 2, skills.length)
					.map((skill) => (
						<SingleSkill key={skill._id} skill={skill} />
					))}
			</div>
		</motion.div>
	);
}
