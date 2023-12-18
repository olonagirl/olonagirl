import { commerce } from "@/app/_lib/commerce"

const User = async () => {
	const customer = await commerce.customer.about()

	if (!customer) return null

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<section className="w-full"></section>
		</main>
	)
}

export default User
