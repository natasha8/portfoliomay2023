"use client";
import { Social } from "@/typing";
import { groq } from "next-sanity";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineGithub } from "react-icons/ai";
import { NavLink } from "./NavLink";
import AnimatedText from "./AnimatedText";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {
	socials: Social[];
};

const Sidebar = ({ socials }: Props) => {
	return (
		<div className="w-full h-full pl-4 flex flex-col justify-between">
			<div className="w-full">
				<AnimatedText
					style="text-2xl text-pink uppercase"
					text="Natasha Parisella"
				/>
				<AnimatedText
					style="text-purple py-2"
					text="Fullstack Web Developer"
				/>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
				className="flex flex-col justify-end space-y-1"
			>
				<div className="w-full">
					<NavLink href="/about">
						<h1 className=" uppercase">About</h1>{" "}
					</NavLink>
				</div>{" "}
				<div className="w-full ">
					<NavLink href="/projects">
						<h1 className=" uppercase">Projects</h1>
					</NavLink>
				</div>{" "}
				<div className="w-full ">
					<NavLink href="/skills">
						<h1 className="uppercase">Skills</h1>
					</NavLink>
				</div>
				<div className="w-full ">
					<NavLink href="/experience">
						<h1 className="uppercase">Experience</h1>
					</NavLink>
				</div>
				<div className="w-full ">
					<NavLink href="/education">
						<h1 className="uppercase">Education</h1>
					</NavLink>
				</div>
				<div className="w-full ">
					<NavLink href="/contact">
						<h1 className="uppercase">Contact</h1>
					</NavLink>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 5 }}
				className="w-1/2 flex justify-start items-end space-x-4"
			>
				{/*Social Icons*/}
				{socials.map((social) => (
					<SocialIcon
						key={social._id}
						url={social.url}
						fgColor="#ea38a8"
						bgColor="transparent"
						target="_blank"
					/>
				))}
			</motion.div>
		</div>
	);
};

export default Sidebar;
