import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import WorkExperience from "@/components/Experience";
import ArrowLink from "@/components/ArrowLink";

export const metadata = {
	title: "NP - EXPERIENCE",
};
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
			<ArrowLink nextPath="/skills" way="up" />

			<WorkExperience experiences={experiences} />
			<ArrowLink nextPath="/education" way="down" />
		</div>
	);
}
