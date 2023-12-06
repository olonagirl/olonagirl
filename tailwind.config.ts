import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				main: "#17a2b8",
				accent: "#012060",
				highlight: "#b6fe5e",
				light: "#f5f5f8",
				mid: "#dde0e7",
				dark: "#29292b",
			},
		},
	},
	plugins: [],
}
export default config
