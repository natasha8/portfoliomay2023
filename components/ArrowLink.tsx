import { TiArrowDownOutline } from "react-icons/ti";
import { NavLink } from "@/components/NavLink";
type Props = {
	nextPath: string;
};
export default function ArrowLink({ nextPath }: Props) {
	return (
		<div className="w-full h-10 pb-1 flex justify-center xl:justify-end xl:pr-4">
			<NavLink href={nextPath}>
				<TiArrowDownOutline className="text-4xl text-pink animate-pulse" />
			</NavLink>
		</div>
	);
}
