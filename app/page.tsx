"use client";
import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import ArrowLink from "@/components/ArrowLink";
import Spline from "@splinetool/react-spline";

import { PacmanLoader } from "react-spinners";
import { motion } from "framer-motion";

export default function Home() {
	const [isLoading, setIsloading] = useState(true);
	
	const loaded = () => {
		setTimeout(() => {
			setIsloading(false);
		}, 500);
	};
	return (
		<div className=" w-full h-full rounded-3xl flex flex-col justify-center items-center">
			{isLoading && (
				<motion.div
					initial={{ x: -500, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ type: "spring", duration: 1.2 }}
					viewport={{ once: true }}
					className="w-full h-full flex justify-center items-center"
				>
					<PacmanLoader size={50} loading color="#ea38a8" />
				</motion.div>
			)}

			<Spline
				onLoad={loaded}
				scene="https://prod.spline.design/tX6RieIKm-eOSLJI/scene.splinecode"
			/>

			<ArrowLink nextPath="/about" />
		</div>
	);
}
