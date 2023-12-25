export const normalizeString = (text: string) => {
	if (text.includes("-")) {
		return text.split("-").join(" & ")
	} else return text
}
