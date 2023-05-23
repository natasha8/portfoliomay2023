"use client";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default async function AboutPage() {
	const text = [
		"Hi there, I'm Natasha, a sharp full-stack web developer.",
		"I've honed my skills through tutoring and freelance projects.",
		"Eager for professional growth.",
		"I'm seeking my first full-time role in web development.",
		"Explore my portfolio and let's connect soon!",
	];
	return (
		<div className="w-full h-full flex justify-center items-center rounded-full">
			<div className="w-1/2">
				<AnimatedText
					text="Welcome to my portfolio!"
					style="text-6xl font-extrabold text-purple "
				/>
				{text.map((phrase, i) => (
					<AnimatedText
						key={i}
						text={phrase}
						style="text-purple text-4xl"
					/>
				))}
			</div>

			<div className="w-1/2">
				<Spline
					scene="https://prod.spline.design/4hXVcuqovDhKSpQU/scene.splinecode"
					className="rounded-full"
				/>
			</div>
		</div>
	);
}
