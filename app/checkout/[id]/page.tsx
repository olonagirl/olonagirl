import { LineItemCard } from "../../_components"
import { commerce } from "../../_lib/commerce"
import Shipping from "../Shipping"

interface Props {
	params: {
		id: string
	}
}

const Checkout = async ({ params: { id } }: Props) => {
	const token = await commerce.checkout.generateToken(id, { type: "cart" })
	const cart = await commerce.cart.retrieve(token.id)

	if (!token || !cart) return null

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl lg:text-4xl">Checkout</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-start lg:gap-10">
				<div className="h-full w-full lg:w-1/2">
					<Shipping checkoutToken={token} />
				</div>
				<div className="flex h-full w-full flex-col gap-3 lg:w-1/2 border">
					{cart.line_items.map((item) => (
						<LineItemCard key={item.id} item={item} />
					))}
				</div>
			</section>
		</main>
	)
}

export default Checkout
