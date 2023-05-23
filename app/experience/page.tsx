import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import WorkExperience from "@/components/Experience";

const query = groq`
  *[_type == "experience"]| order(dateEnded desc) {
    ...,
    technologies[]->
  } 
`;

export default async function ExperiencePage() {
	const experiences = await client.fetch(query);
	return (
		<div className="w-full h-full overflow-hidden">
			<WorkExperience experiences={experiences} />
		</div>
	);
}
