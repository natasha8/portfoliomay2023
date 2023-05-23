/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				purple: "#9580ff",
				green: "#33ffe2",
				pink: "#ea38a8",
				yellow: "#ffff80",
				salmon: "#ff9580",
			},
		},
		backgroundImage: {
			space: "url('https://i.ibb.co/BsVSphy/bgportfolio.jpg')",
		},
	},
	plugins: [require("tailwind-scrollbar-hide", "tailwind-scrollbar")],
};
