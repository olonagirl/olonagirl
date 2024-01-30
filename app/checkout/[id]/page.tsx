import { LineItemCard, Loader } from "@/app/_components"
import { commerce } from "@/app/_lib/commerce"
import Shipping from "../Shipping"
import PaypalProvider from "../PaypalProvider"

interface Props {
	params: {
		id: string
	}
}

const Checkout = async ({ params: { id } }: Props) => {
	const token = await commerce.checkout.generateToken(id, { type: "cart" })
	const cart = await commerce.cart.retrieve(id)

	if (!token || !cart) return <Loader />

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl lg:text-4xl">Checkout</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="flex w-full flex-col items-center gap-5 lg:flex-row lg:items-start lg:gap-10">
				<div className="h-full w-full lg:w-1/2">
					<PaypalProvider>
						<Shipping cart={cart} checkoutToken={token} />
					</PaypalProvider>
				</div>
				<div className="flex h-full w-full flex-col gap-3 lg:w-1/2">
					{cart.line_items.map((item) => (
						<LineItemCard key={item.id} item={item} />
					))}
					<div className="flex w-full items-center justify-between">
						<p className="text-sm font-semibold lg:text-base">Total</p>
						<p className="text-sm font-semibold lg:text-base">
							{cart.subtotal.formatted_with_symbol}
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Checkout
