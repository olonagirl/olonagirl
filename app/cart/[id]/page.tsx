"use client"
import { Minus, Plus } from "@phosphor-icons/react"
import { Cart } from "@chec/commerce.js/types/cart"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button, Loader, Spinner } from "../../_components"
import { commerce } from "../../_lib/commerce"
import { LoadingProps } from "../../_types"

interface Props {
	params: {
		id: string
	}
}

const Cart = ({ params: { id } }: Props) => {
	const [loading, setLoading] = useState<LoadingProps>("none")
	const [cart, setCart] = useState<Cart | null>(null)

	const getCart = async () => setCart(await commerce.cart.retrieve(id))

	const handleRemoveFromCart = async (productId: string) => {
		setLoading("remove")
		const { cart } = await commerce.cart.remove(productId)
		setCart(cart)
		setLoading("none")
	}

	const handleUpdateCart = async (productId: string, quantity: number) => {
		setLoading("update")
		const { cart } = await commerce.cart.update(productId, { quantity })
		setCart(cart)
		setLoading("none")
	}

	const handleEmptyCart = async () => {
		setLoading("empty")
		const { cart } = await commerce.cart.empty()
		setCart(cart)
		setLoading("none")
	}

	useEffect(() => {
		getCart()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!cart) return <Loader />

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
								<Button
									type="button"
									onClick={handleEmptyCart}
									background="bg-dark"
									width="w-1/2 lg:w-[300px]">
									{loading === "empty" ? <Spinner /> : "Clear cart"}
								</Button>
							</div>
							{cart.line_items.map((item) => (
								<div key={item.id} className="mt-5 flex w-full items-center gap-3">
									<div className="relative aspect-square w-[80px]">
										<Image
											src={String(item.image?.url)}
											alt={String(item.image?.filename)}
											className="object-cover"
											fill
											sizes="(max-width: 1024px) 100%,"
											priority
										/>
									</div>
									<div className="flex w-full flex-1 flex-col gap-2">
										<div className="flex w-full items-center justify-between">
											<p className="text-base font-semibold capitalize lg:text-lg">
												{item.product_name}
											</p>
											<p className="text-base font-semibold lg:text-lg">
												{item.line_total.formatted_with_symbol}
											</p>
										</div>
										<div className="flex items-center gap-1">
											{item.selected_options.map((option, index) => (
												<p
													key={option.group_id}
													className="text-xs font-medium capitalize lg:text-sm">
													{option.option_name}{" "}
													{index === item.selected_options.length - 1 ? "" : "/"}
												</p>
											))}
										</div>
										<div className="flex items-center gap-4">
											<div className="flex items-center gap-3">
												<button
													onClick={() => handleUpdateCart(item.id, item.quantity - 1)}
													className="rounded-full bg-dark p-1 text-white">
													<Minus className="text-[10px] lg:text-xs" />
												</button>
												<p className="text-xs lg:text-sm">
													{loading === "update" ? (
														<Spinner color="border-dark" />
													) : (
														item.quantity
													)}
												</p>
												<button
													onClick={() => handleUpdateCart(item.id, item.quantity + 1)}
													className="rounded-full bg-dark p-1 text-white">
													<Plus className="text-[10px] lg:text-xs" />
												</button>
											</div>
											<button
												onClick={() => handleRemoveFromCart(item.id)}
												className="text-xs underline lg:text-sm">
												{loading === "remove" ? <Spinner color="border-dark" /> : "Remove"}
											</button>
										</div>
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
