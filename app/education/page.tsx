import ArrowLink from "@/components/ArrowLink";
import Edu from "@/components/Education";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "education"] | order(dateEnded desc){
    ...,
    technologies[]->
  }
`;

export default async function EducationPage() {
	const education = await client.fetch(query);
	return (
		<div className="w-full h-full flex flex-col justify-between">
			<ArrowLink nextPath="/experience" way="up" />

			<Edu education={education} />
			<ArrowLink nextPath="/contact" way="downs" />
		</div>
	);
}
