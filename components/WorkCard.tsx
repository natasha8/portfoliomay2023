"use client";
import urlFor from "@/lib/urlFor";
import { Experience } from "@/typing";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
	experience: Experience;
};
export default function ExpCard({ experience }: Props) {
	return (
		<motion.article
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.2 }}
			viewport={{ once: true }}
			className="w-11/12 h-full flex flex-col rounded-lg items-center space-y-4 
            flex-shrink-0 snap-center p-10 border border-pink shadow-md shadow-yellow opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden text-purple"
		>
			<div className="w-full flex flex-col space-y-10 mx-0 lg:mx-4 ">
				<div className="space-y-2">
					<h4 className="text-xl lg:text-4xl font-light text-pink">
						{experience.jobTitle}
					</h4>
					<p className="font-bold text-base xl:text-xl 2xl:text-2xl mt-1 text-yellow">
						{experience.company}
					</p>

					<p className="uppercase text-sm lg:text-base font-italic text-pink/80">
						{new Date(experience.dateStarted).toLocaleDateString()}{" "}
						-{" "}
						{experience.isCurrentlyWorkingHere
							? "Present"
							: new Date(
									experience.dateEnded
							  ).toLocaleDateString()}
					</p>
				</div>
				<div className="w-full h-[25vh] xl:h-[45vh] overflow-y-scroll z-0 scrollbar-hide">
					<ul className="list-disc space-y-4 ">
						{experience.points.map((point, i) => (
							<li key={i}>{point}</li>
						))}
					</ul>
				</div>

				<div className="flex space-x-2">
					{experience.technologies?.map((technology) => (
						// eslint-disable-next-line @next/next/no-img-element
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
