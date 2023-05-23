"use client";
import urlFor from "@/lib/urlFor";
import { Project } from "@/typing";
import { motion } from "framer-motion";
import Image from "next/image";
import { ImEnter } from "react-icons/im";

type Props = {
	projects: Project[];
};

export default function Projects({ projects }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="w-full h-full flex relative flex-col justify-center items-center overflow-hidden scrollbar-hide"
		>
			<h3 className="text-left uppercase tracking-[20px] text-lg lg:text-2xl pl-5 text-pink bg-yellow">
				Projects
			</h3>
			<div
				className="relative w-full h-full flex  overflow-x-scroll overflow-y-hidden scrollbar-thin
		       scrollbar-track-[#6b576b] scrollbar-thumb-[#fcdef8] snap-x snap-mandatory z-50 "
			>
				{projects &&
					projects.map((pro, i) => (
						<div
							key={pro._id}
							className="w-full h-full flex-shrink-0 snap-center flex flex-col xl:flex-row xl:justify-center items-center space-y-5 xl:space-y-0 xl:px-10"
						>
							<div className="flex flex-col">
								<div className="flex xl:h-24 xl:items-center justify-center space-x-8">
									<h4 className="text-base lg:text-2xl font-semibold text-left tracking-widest uppercase text-pink">
										<span className="underline decoration-[#fcdef8]/50 capitalize text-yellow">
											Case Study {i + 1} of{" "}
											{projects.length}
										</span>
										: {pro.title}
									</h4>
								</div>
								<div className="flex justify-center ">
									<motion.img
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 2 }}
										src={urlFor(pro?.image).url()}
										alt="project"
										className="w-full h-full object-contain px-4"
									/>
								</div>
								<div className="w-full flex items-center justify-between rounded-lg bg-black/40 px-4 py-2 ">
									<div className="flex items-center justify-between ">
										{pro.technologies?.map((technology) => (
											<Image
												alt="technologies"
												width={45}
												height={45}
												className="rounded-full w-1/6 object-scale-down"
												key={technology._id}
												src={urlFor(
													technology?.image
												).url()}
											/>
										))}
									</div>
									<a
										href={pro.linkToBuild}
										target="_blank"
										rel="noreferrer noopener"
										className="flex items-center justify-end uppercase lg:w-[8rem] px-8 py-2"
									>
										<ImEnter className="text-4xl text-pink" />
									</a>
								</div>
							</div>

							<div className="w-full overflow-y-auto overflow-x-hidden z-0 scrollbar-thin scrollbar-track-[#474547] scrollbar-thumb-[#fcdef8]/80">
								<pre className="text-justify text-xs whitespace-pre-wrap lg:flex lg:text-lg  lg:text-left px-4 lg:px-2  text-purple">
									{pro.summary}
								</pre>
							</div>
						</div>
					))}
			</div>
			<div className="w-full absolute top-[30%] bg-[#fcdef8]/10 left-0 h-[500px] -skew-y-12"></div>
		</motion.div>
	);
}
