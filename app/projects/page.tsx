import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import WinMockup from "@/components/WinMockup";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

export default async function ProjectsPage() {
	const project = await client.fetch(query);

	return (
		<div className="w-full h-full bg-black/50 shadow-pink overflow-y-scroll scrollbar-hide flex justify-center items-center xl:justify-end">
			<WinMockup projects={project} />
		</div>
	);
}
