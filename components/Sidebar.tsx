"use client";
import { Social } from "@/typing";
import { NavLink } from "./NavLink";
import AnimatedText from "./AnimatedText";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {
	socials: Social[];
};

const Sidebar = ({ socials }: Props) => {
	return (
		<div className="w-full h-full pl-4 flex flex-col justify-between rounded-3xl">
			<div className="w-full bg-black-50">
				<motion.h1
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
					className="text-4xl text-pink uppercase"
				>
					Natasha Parisella
				</motion.h1>
				<motion.h3
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.1 }}
					viewport={{ once: true }}
					className="text-xl text-purple"
				>
					Web Developer
				</motion.h3>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
				className="flex flex-col justify-end space-y-1"
			>
				<div className="w-full">
					<NavLink href="/">
						<h1 className=" uppercase">home</h1>{" "}
					</NavLink>
				</div>{" "}
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
