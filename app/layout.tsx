import Navbar from "@/components/Navbar";
import "./globals.css";
import { Orbitron } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { NavLink } from "@/components/NavLink";
import { TiArrowDownOutline } from "react-icons/ti";

const orbi = Orbitron({ weight: ["400"], subsets: ["latin"] });
export const metadata = {
	title: "Natascia Parisella",
	description: "Portfolio",
};

const query = groq`
  *[_type == "social"]`;

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const social = await client.fetch(query);

	return (
		<html lang="en">
			<body className={orbi.className}>
				<div className="relative h-screen w-screen flex flex-col xl:justify-center items-center bg-space shadow-lg shadow-pink tracking-widest">
					<div className="xl:hidden w-full border border-purple bg-black ">
						<Navbar />
					</div>
					<div className="relative w-[95vw] h-full xl:h-[90vh] rounded-3xl shadow-md shadow-yellow">
						<div className="absolute top-0 left-0 w-full h-full  z-10" />
						<div className="relative z-20 h-full w-full flex flex-col xl:flex-row xl:justify-between xl:shadow-md shadow-pink/50">
							<div className="hidden xl:flex w-1/4 bg-black/50 pt-5 ">
								<Sidebar socials={social} />
							</div>
							<div className="w-full h-full flex justify-center items-center ">
								<div
									className="w-full h-full mx-auto overflow-y-scroll scrollbar-hide flex justify-center items-center bg-black/50 
							                xl:pr-4  xl:max-h-50"
								>
									{children}
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
