import Skills from "@/components/Skills";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const query = groq`
  *[_type == "skill"] | order(name)
`;
export default async function SkillsPage() {
	const skills = await client.fetch(query);
	return (
		<div className="w-full h-full bg-black/50 text-yellow shadow-pink ">
			<Skills skills={skills} />
		</div>
	);
}
