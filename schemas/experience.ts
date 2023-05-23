import { defineField, defineType } from "sanity";

export default defineType({
	name: "experience",
	title: "Experience",
	type: "document",
	fields: [
		defineField({
			name: "jobTitle",
			title: "JobTitle",
			type: "string",
		}),

		defineField({
			name: "company",
			title: "Company",
			type: "text",
		}),
		defineField({ name: "city", title: "City", type: "string" }),
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
			name: "isCurrentlyWorkingHere",
			title: "IsCurrentlyWorkingHere",
			type: "boolean",
		}),
		defineField({
			name: "technologies",
			title: "Technologies",
			type: "array",
			of: [{ type: "reference", to: { type: "skill" } }],
		}),
		defineField({
			name: "points",
			title: "Points",
			type: "array",
			of: [{ type: "string" }],
		}),
		defineField({
			name: "order",
			title: "Order",
			type: "number",
			hidden: true,
		}),
	],
	orderings: [
		{
			title: "Manual order",
			name: "manualOrder",
			by: [{ field: "order", direction: "asc" }],
		},
	],
});
