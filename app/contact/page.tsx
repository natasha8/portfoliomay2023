import ContactForm from "@/components/ContactForm";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { TiArrowUpOutline } from "react-icons/ti";
import ArrowLink from "@/components/ArrowLink";

export const metadata = {
	title: "CONTACT",
};

const query = groq`
*[_type == "pageInfo"][0]
`;
export default async function ContactPage() {
	const pageInfo = await client.fetch(query);
	return (
		<div className="w-full h-full flex flex-col justify-center items-center bg-black/50">
			<ContactForm pageInfo={pageInfo} />
			<ArrowLink nextPath="/" way="up" />
		</div>
	);
}
