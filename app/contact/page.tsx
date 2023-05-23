import ContactForm from "@/components/ContactForm";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const query = groq`
*[_type == "pageInfo"][0]
`;
export default async function ContactPage() {
	const pageInfo = await client.fetch(query);
	return (
		<div className="w-full h-full flex justify-center items-center bg-black/50">
			<ContactForm pageInfo={pageInfo} />
		</div>
	);
}
