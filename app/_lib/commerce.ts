import Commerce from "@chec/commerce.js"

export const commerce = new Commerce(
	String(process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY),
	true
)
