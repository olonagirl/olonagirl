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

export const getFileFromUrl = async (url: string, name: string) => {
	const blob = await fetch(url).then((res) => res.blob())
	return new File([blob], name, { type: "image/webp" })
}
