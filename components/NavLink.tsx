"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
};
export const NavLink = ({ href, children }: NavLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href}>
			<button
				className={`tracking-wider hover:text-purple ${
					isActive ? "text-pink text-3xl" : "text-yellow text-xl"
				}`}
			>
				{children}
			</button>
		</Link>
	);
};
