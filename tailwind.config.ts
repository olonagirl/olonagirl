import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"fixed-1": "url('/images/fixed-1.jpg')",
				"fixed-2": "url('/images/fixed-2.jpg')",
			},
			colors: {
				main: "#A72B83",
				accent: "#C360A3",
				light: "#f5f5f8",
				mid: "#dde0e7",
				dark: "#29292b",
			},
		},
	},
	plugins: [],
}

export default config
