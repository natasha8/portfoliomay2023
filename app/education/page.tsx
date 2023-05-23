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
	return <Edu education={education} />;
}
