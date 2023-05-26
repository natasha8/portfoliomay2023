"use client";

import Spline from "@splinetool/react-spline";
import { TiArrowDownOutline, TiArrowRightOutline } from "react-icons/ti";
import { NavLink } from "./../components/NavLink";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";

export default function Home() {
	const [loading, setLoading] = useState(true);
	const load = () => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};
	return (
		<div className=" w-full h-full rounded-3xl flex flex-col justify-center items-center">
			{loading && <PacmanLoader color="#ea38a8" />}
			<Spline
				onLoad={load}
				scene="https://prod.spline.design/tX6RieIKm-eOSLJI/scene.splinecode"
				className="rounded-full z-0 relative"
			/>
			<div className="w-full h-10 pb-1 flex justify-end">
				<NavLink href="/about">
					<TiArrowDownOutline className="text-4xl text-pink animate-pulse " />
				</NavLink>
			</div>
		</div>
	);
}
