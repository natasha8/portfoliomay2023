import urlFor from "@/lib/urlFor";
import { Skill } from "@/typing";
import { motion } from "framer-motion";

type Props = {
	skill: Skill;
};

export default function SingleSkill({ skill }: Props) {
	return (
		<div className="relative flex cursor-pointer">
			<motion.img
				initial={{
					opacity: 0,
				}}
				transition={{ duration: 2, delay: 0.5 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src={urlFor(skill.image).url()}
				alt=""
				className="w-20 h-20 object-contain object-center filter
                transition duration-300 ease-in-out rounded-xl "
			/>
		</div>
	);
}
