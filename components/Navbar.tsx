"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	// console.log('open', open)

	const divVariants = {
		initial: { opacity: 0, y: -200 },
		animate: { opacity: 1, y: 50 },
		exit: { opacity: 0, y: -200 },
	};

	const handler = () => {
		setOpen(!open);
	};
	return (
		<div className="w-full h-12 flex items-center justify-between px-2 ">
			<Link href="/">
				<h1 className="text-4xl text-pink">NP</h1>
			</Link>

			{open && (
				<>
					<AiOutlineClose
						className="text-pink text-4xl"
						onClick={handler}
					/>
					<div
						className="absolute w-full h-full flex z-50 inset-0"
						onClick={handler}
					>
						<motion.div
							variants={divVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ type: "spring", stiffness: 50 }}
							className="w-full h-screen lg:h-auto lg:w-44 text-yellow rounded font-extrabold bg-black flex flex-col items-center space-y-4 uppercase pt-10"
						>
							<Link href="/">home</Link>
							<Link href="/about">about</Link>
							<Link href="/skills">skills</Link>
							<Link href="/projects">projects</Link>
							<Link href="/experience">experience</Link>
							<Link href="/education">education</Link>
							<Link href="/contact">contact</Link>
						</motion.div>
					</div>
				</>
			)}
			{!open && (
				<AiOutlineMenu
					className="text-pink text-4xl"
					onClick={handler}
				/>
			)}
		</div>
	);
};

export default Navbar;
