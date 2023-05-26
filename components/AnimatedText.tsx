"use client";
import { motion } from "framer-motion";

type Props = { text: string; style: string };

export default function AnimatedText({ text, style }: Props) {
	const letters: string[] = text.split("");

	return (
		<div className={`text-pink ${style}`}>
			{letters.map((letter: string, i: number) => {
				const isLineBreak = letter === ".";
				return (
					<motion.span
						key={i}
						initial={{ opacity: 0, y: 20 }} // Stato iniziale delle lettere
						animate={{ opacity: 1, y: 0 }} // Stato finale delle lettere
						transition={{ delay: i * 0.1 }} // Ritardo graduale tra le animazioni delle lettere
						className={isLineBreak ? "block" : "inline"}
					>
						{letter}
					</motion.span>
				);
			})}
		</div>
	);
}
