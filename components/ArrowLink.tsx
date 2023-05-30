import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";
import { NavLink } from "@/components/NavLink";
type Props = {
	nextPath: string;
	way: string;
};
export default function ArrowLink({ nextPath, way }: Props) {
	return (
		<div className="w-full h-10 py-1 flex justify-center xl:justify-end xl:pr-4">
			<NavLink href={nextPath}>
				{way === "up" ? (
					<TiArrowUpOutline className="text-4xl text-pink animate-pulse" />
				) : (
					<TiArrowDownOutline className="text-4xl text-pink animate-pulse" />
				)}
			</NavLink>
		</div>
	);
}
