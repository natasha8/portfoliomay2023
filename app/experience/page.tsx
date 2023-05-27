import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import WorkExperience from "@/components/Experience";
import ArrowLink from "@/components/ArrowLink";

const query = groq`
  *[_type == "experience"]| order(dateEnded desc) {
    ...,
    technologies[]->
  } 
`;

export default async function ExperiencePage() {
	const experiences = await client.fetch(query);
	return (
		<div className="w-full h-full flex flex-col justify-between overflow-hidden">
			<WorkExperience experiences={experiences} />
			<ArrowLink nextPath="/education" />
		</div>
	);
}
