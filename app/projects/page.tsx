"use client";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import WinMockup from "@/components/WinMockup";
import { motion } from "framer-motion";
import ArrowLink from "@/components/ArrowLink";
import Projects from "@/components/Projects";

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
