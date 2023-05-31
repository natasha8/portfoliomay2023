"use client";
import { Education } from "@/typing";
import Image from "next/image";
import { motion } from "framer-motion";
import urlFor from "@/lib/urlFor";

type Props = {
	education: Education;
};

function EduCard({ education }: Props) {
	//console.log('education', education)

	return (
		<motion.article
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.2 }}
			viewport={{ once: true }}
			className="w-full h-full flex flex-col rounded-lg items-center font-bold
            flex-shrink-0 snap-center xl:px-5 xl:border border-yellow xl:shadow-md shadow-pink opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden text-purple"
		>
			<div className="w-full flex justify-center items-center">
				<motion.img
					src={urlFor(education.logo).url()}
					alt=""
					className="w-[200px] h-[200px] object-scale-down object-center"
				/>
			</div>

			<div className="px-5 pt-4 xl:px-10 bg-black/60 xl:bg-pink/20  rounded-xl h-full xl:h-auto">
				<p className="font-bold text-center text-2xl mt-1">
					{education.schoolName}
				</p>
				<p className="text-center uppercase py-5 text-sm xl:text-md  text-pink font-italic">
					{new Date(education.dateStarted).toLocaleDateString()} -{" "}
					{new Date(education.dateEnded).toLocaleDateString()}
				</p>

				<div className="flex xl:justify-center space-x-2 my-2   text-justify">
					{education.description}
				</div>

				<div className="flex flex-wrap space-x-2 lg:my-2 justify-center pt-10">
					{education.technologies?.map((technology) => (
						<Image
							alt="technologies"
							width={30}
							height={30}
							key={technology._id}
							src={urlFor(technology.image).url()}
						/>
					))}
				</div>
			</div>
		</motion.article>
	);
}
export default EduCard;
