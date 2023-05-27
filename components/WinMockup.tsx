"use client";
import { Project } from "@/typing";
import {
	RxArrowLeft,
	RxArrowRight,
	RxAvatar,
	RxDownload,
	RxEnter,
	RxHamburgerMenu,
	RxReload,
} from "react-icons/rx";
import { RiCloseCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { useState } from "react";

type Props = {
	projects: Project[];
};
export default function WinMockup({ projects }: Props) {
	const [show, setShow] = useState(false);

	const showHandler = () => {
		setShow(!show);
	};
	return (
		<div className="w-full h-full flex space-x-4 overflow-x-scroll p-5 xl:p-10 snap-x snap-mandatory scrollbar-hide ">
			{projects?.map((pro, i) => (
				<div key={pro._id} className="w-full xl:w-[80vw] h-[75vh]">
					<div className="relative">
						<div className="w-full h-full">
							<div className="bg-black/10 border border-gray-400 rounded-t-lg flex">
								<div className="px-4 pt-4 pb-3 mr-4 text-sm flex-0 text-gray-400 whitespace-no-wrap">
									<i className="mx-1 rounded-full w-3 h-3 bg-yellow shadow-pink shadow-lg inline-block"></i>
									<i className="mx-1 rounded-full w-3 h-3 bg-yellow shadow-pink shadow-lg inline-block"></i>
									<i className="mx-1 rounded-full w-3 h-3 bg-yellow shadow-pink shadow-lg inline-block"></i>
								</div>
								<div className="relative px-1 xl:px-4 xl:py-2 mt-2 -mb-px flex-0 border-t border-gray-400 bg-purple rounded-t-lg">
									<div className="text-sm overflow-hidden pt-1 w-56 whitespace-no-wrap ">
										<h6 className="capitalize ">
											Case Study {i + 1} of{" "}
											{projects.length}:
										</h6>
										<h6 className="font-bold">
											{pro.title}
										</h6>
									</div>
									<div className="text-gray-500 absolute top-0 right-0 pt-3 pr-2 text-xs">
										<RiCloseCircleLine />
									</div>
								</div>
							</div>
							<div className="bg-black/50 border-l border-r border-b border-gray-400 flex flex-row py-2">
								<div className="px-4 py-2 flex-0 text-gray-400 whitespace-no-wrap flex space-x-2 items-center">
									<RxArrowLeft />
									<RxArrowRight />
									<RxReload />
								</div>
								<div className="px-4 py-2 my-auto flex-1 border border-gray-400 bg-white rounded-md whitespace-no-wrap overflow-hidden">
									<a href={pro.linkToBuild} target="_blank">
										{pro.linkToBuild}
									</a>
								</div>
								<div className="px-4 py-2 flex items-center flex-0 space-x-2 text-gray-400 whitespace-no-wrap text-xl">
									<RxDownload />
									<RxAvatar />
									<RxHamburgerMenu />
								</div>
							</div>
						</div>
						<div className="absolute left-0 border-l border-r border-gray-400 h-full w-full"></div>
					</div>

					<div className="w-full h-[60vh] border border-pink shadow-md shadow-yellow flex flex-col justify-between items-center rounded-b-lg">
						{!show && (
							<motion.img
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 2 }}
								src={urlFor(pro?.image).url()}
								alt="project"
								className="h-full w-full object-contain px-4 relative"
								onClick={showHandler}
							/>
						)}

						{show && (
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 2, delay: 1 }}
								className="px-4 overflow-y-auto h-full overflow-x-hidden z-0 scrollbar-hide scrollbar-thin scrollbar-track-yellow scrollbar-thumb-yellow/80"
								onClick={showHandler}
							>
								<pre className=" text-justify text-xs whitespace-pre-wrap xl:flex xl:text-lg px-4 lg:p-4  text-purple">
									{pro.summary}
								</pre>
							</motion.div>
						)}
						<div className="w-full h-[8vh] flex items-center justify-end rounded-lg bg-black/20 px-4 py-2 ">
							<div className="flex items-center justify-between ">
								{pro.technologies?.map((technology) => (
									<Image
										alt="technologies"
										width={45}
										height={45}
										className="rounded-full w-1/6 object-scale-down"
										key={technology._id}
										src={urlFor(technology?.image).url()}
									/>
								))}
							</div>
							<a
								href={pro.linkToBuild}
								target="_blank"
								rel="noreferrer noopener"
								className="flex items-center justify-end uppercase lg:w-[6rem] px-8 py-2"
							>
								<RxEnter className="text-4xl text-pink" />
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
