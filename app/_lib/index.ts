export const normalizeString = (text: string) => {
	if (text.includes("-")) {
		return text.split("-").join(" & ")
	} else return text
}

export const capitalize = (text: string) => {
	const words = text.split(" ")
	return words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ")
}
