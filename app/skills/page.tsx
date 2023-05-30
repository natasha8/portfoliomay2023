import SkillsContainer from "@/components/SkillsContainer";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "skill"] | order(name)
`;
export default async function SkillsPage() {
	const skills = await client.fetch(query);
	return <SkillsContainer skills={skills} />;
}
