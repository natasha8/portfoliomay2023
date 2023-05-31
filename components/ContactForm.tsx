"use client";

import { PageInfo } from "@/typing";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { AiFillMail } from "react-icons/ai";

type Props = {
	pageInfo: PageInfo;
};
export default function ContactForm({ pageInfo }: Props) {
	const [state, handleSubmit] = useForm("xdovvorv");
	if (state.succeeded) {
		console.log("INVIATOOOOOOOOOOOOOOOOOO");
		return (
			<motion.div
				initial={{ y: 500, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", duration: 1.2 }}
				viewport={{ once: true }}
				className=" w-11/12 flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
			>
				<p className="text-yellow">
					Thanks for your email, We'll keep on touch shortly
				</p>
			</motion.div>
		);
	}
	return (
		<motion.div
			initial={{ y: 500, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", duration: 1.2 }}
			viewport={{ once: true }}
			className=" w-full xl:w-11/12 flex relative flex-col text-center xl:text-left md:flex-row max-w-7xl px-2 xl:px-10 h-screen justify-evenly mx-auto items-center"
		>
			<form
				onSubmit={handleSubmit}
				className="w-full h-full flex flex-col justify-center items-center space-y-4 text-purple"
			>
				<div className="w-full flex flex-col space-y-10">
					<div className="space-y-4">
						<h4 className="text-xl lg:text-4xl font-semibold text-center ">
							I have got just what you need.
						</h4>
						<h4 className="text-center text-xl lg:text-4xl font-bold text-pink decoration-pink/50 underline pl-2 uppercase">
							Lets Talk
						</h4>
					</div>

					<div className="hidden lg:inline space-y-4">
						<div className="flex items-center justify-center space-x-5">
							<AiFillMail className="h-7 w-7 " />
							<p className="text-2xl">{pageInfo.email}</p>
						</div>
					</div>
				</div>
				<div className="border border-yellow p-4 rounded-md space-y-6 w-full shadow-lg shadow-pink">
					<div>
						<label htmlFor="email" className="p-1">
							Email Address
						</label>
						<input
							id="email"
							type="email"
							name="email"
							className="rounded-md w-full p-1"
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
					</div>
					<div>
						<label htmlFor="message" className="p-1">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="rounded-md h-52 w-full p-1 text-black"
						/>
						<ValidationError
							prefix="Message"
							field="message"
							errors={state.errors}
						/>
					</div>
					<button
						type="submit"
						disabled={state.submitting}
						className="rounded-md bg-yellow text-pink font-bold uppercase tracking-wider w-full"
					>
						Submit
					</button>
				</div>
			</form>
		</motion.div>
	);
}
