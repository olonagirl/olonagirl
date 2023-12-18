import Image from "next/image"
import Link from "next/link"
import React from "react"

import { commerce } from "../../_lib/commerce"
import { Button } from "../../_components"

interface Props {
	params: {
		id: string
	}
}
const Cart = async ({ params: { id } }: Props) => {
	const cart = await commerce.cart.retrieve(id)

	if (!cart) return null

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			{cart.total_items > 0 ? (
				<>
					<p className="my-4 text-2xl lg:text-4xl">Shopping Cart</p>
					<hr className="my-4 w-full bg-dark" />
					<section className="my-5 flex w-full flex-col items-start gap-10 lg:my-10 lg:flex-row lg:gap-40">
						<div className="flex w-full flex-col lg:w-2/3">
							<div className="flex w-full items-center justify-between">
								<p className="text-lg font-semibold lg:text-xl">Cart items</p>
								<Button type="button" background="bg-dark">
									Clear cart
								</Button>
							</div>
							{cart.line_items.map((item) => (
								<div key={item.id} className="mt-5 flex w-full items-center gap-3">
									<div className="relative aspect-square w-[80px]">
										<Image
											src={String(item.image?.url)}
											alt={String(item.image?.filename)}
											className=""
											fill
											sizes="(max-width: 1024px) 100%,"
											priority
										/>
									</div>
									<div className="flex w-full flex-1 flex-col gap-2">
										<div className="flex w-full items-center justify-between">
											<p className="text-base font-semibold lg:text-lg">
												{item.product_name}
											</p>
											<p className="text-base font-semibold lg:text-lg">
												{item.line_total.formatted_with_symbol}
											</p>
										</div>
										<p className="text-sm lg:text-base">
											Unit Price: {item.price.formatted_with_symbol}
										</p>
										<p className="text-sm lg:text-base">Quantity: {item.quantity}</p>
									</div>
								</div>
							))}
						</div>
						<div className="flex w-full flex-col items-start lg:w-1/3 lg:items-end">
							<div className="mb-10 flex w-full items-center justify-between">
								<p className="text-lg font-semibold lg:text-xl">Subtotal</p>
								<p className="text-lg font-semibold lg:text-xl">
									{cart.subtotal.formatted_with_symbol}
								</p>
							</div>
							<p className="mb-5 text-xs text-gray-500 lg:text-sm">
								Tax included. Shipping is calculated at checkout.
							</p>
							<Link
								href={`/checkout/${cart.id}`}
								prefetch
								className="flex h-[40px] w-full items-center justify-center bg-accent text-sm text-light">
								Proceed to checkout
							</Link>
						</div>
					</section>
				</>
			) : (
				<>
					<p className="my-4 text-2xl lg:text-4xl">Your cart is empty</p>
					<hr className="my-4 w-full bg-dark" />
					<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
						<Link
							href="/products"
							prefetch
							className="flex h-[40px] w-[300px] items-center justify-center bg-accent text-sm text-light">
							Continue shopping
						</Link>
						<p className="text-sm lg:text-base">
							Have an account?{" "}
							<Link href="/account/signin" className="underline">
								Signin
							</Link>{" "}
							to checkout faster.
						</p>
					</section>
				</>
			)}
			<section className="mt-10 flex w-full flex-col gap-4 lg:mt-20">
				<p className="text-sm font-semibold lg:text-xl">View collections</p>
				<div className="my-4 flex min-h-[300px] w-full items-center py-5"></div>
			</section>
		</main>
	)
}

export default Cart
