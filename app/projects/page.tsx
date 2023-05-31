import Projects from "@/components/Projects";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";

export const metadata = {
	title: "NP - PROJECTS",
};

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

export default async function ProjectsPage() {
	const project = await client.fetch(query);

	return <Projects project={project} />;
}
