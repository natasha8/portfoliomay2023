import { defineField, defineType } from "sanity";

export default defineType({
	name: "education",
	title: "Education",
	type: "document",
	fields: [
		defineField({
			name: "schoolName",
			title: "SchoolName",
			type: "string",
		}),
		defineField({
			name: "logo",
			title: "Logo",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
		}),
		defineField({
			name: "dateStarted",
			title: "DateStarted",
			type: "date",
		}),
		defineField({
			name: "dateEnded",
			title: "DateEnded",
			type: "date",
		}),
		defineField({
			name: "technologies",
			title: "Technologies",
			type: "array",
			of: [{ type: "reference", to: { type: "skill" } }],
		}),
	],
	orderings: [
		{
			title: "dateEnded",
			name: "dateEnded",
			by: [{ field: "dateEnded", direction: "desc" }],
		},
	],
});
