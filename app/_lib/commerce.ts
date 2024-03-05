import Commerce from "@chec/commerce.js"

const apiKey =
	process.env.CHEC_PUBLIC_KEY ?? process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY

export const commerce = new Commerce(apiKey, true)
