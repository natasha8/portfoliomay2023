"use client";

import Spline from "@splinetool/react-spline";
import { TiArrowRightOutline } from "react-icons/ti";
import { NavLink } from "./../components/NavLink";

export default function Home() {
	return (
		<div className="rounded-3xl absolute  flex justify-end items-center ">
			<Spline
				scene="https://prod.spline.design/M40r4GlAGwMd-wnl/scene.splinecode"
				className="rounded-full z-0 relative"
			/>

			<NavLink href="/about">
				<TiArrowRightOutline className="text-4xl text-pink animate-pulse mr-12 " />
			</NavLink>
		</div>
	);
}
