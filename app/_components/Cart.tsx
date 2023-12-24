"use client"
import { Minus, Plus, X } from "@phosphor-icons/react"
import { Cart } from "@chec/commerce.js/types/cart"
import { Dispatch, SetStateAction } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { commerce } from "../_lib/commerce"

interface Props {
	cart: Cart | null
	onClose: () => void
	setCart: Dispatch<SetStateAction<Cart | null>>
}

const Cart = (props: Props) => {
	const handleRemoveFromCart = async (productId: string) => {
		const { cart } = await commerce.cart.remove(productId)
		props.setCart(cart)
	}

	const handleUpdateCart = async (productId: string, quantity: number) => {
		const { cart } = await commerce.cart.update(productId, { quantity })
		props.setCart(cart)
	}

	if (!props.cart) return null

	return (
		<div
			onScroll={(e) => e.stopPropagation()}
			onClick={props.onClose}
			className="fixed left-0 top-0 !z-[6] flex h-[100dvh] w-screen items-start justify-end overflow-hidden bg-dark/60">
			<motion.div
				initial={{ x: "100%" }}
				animate={{
					x: 0,
					transition: { delay: 0.3, duration: 0.8, type: "spring", bounce: 0.1 },
				}}
				exit={{ x: "100%" }}
				onClick={(e) => e.stopPropagation()}
				className="h-full w-4/5 bg-white p-4 lg:w-1/4">
				<div className="flex w-full items-center justify-between">
					<p className="text-lg font-medium lg:text-xl">Shopping Cart</p>
					<button onClick={props.onClose}>
						<X className="text-xl lg:text-3xl" />
					</button>
				</div>
				<hr className="my-4 w-full bg-dark" />
				{!props.cart.total_items && (
					<div className="flex h-full w-full flex-col items-center justify-center gap-2">
						<p className="text-center text-base lg:text-lg">Your cart is empty</p>
						<Link
							href="/products"
							prefetch
							onClick={props.onClose}
							className="flex h-[40px] w-full items-center justify-center bg-accent text-sm text-light">
							Continue shopping
						</Link>
						<p className="text-center text-sm lg:text-base">
							Have an account?{" "}
							<Link href="/account/signin" className="underline">
								Signin
							</Link>{" "}
							to checkout faster.
						</p>
					</div>
				)}
				{props.cart.total_items > 0 && (
					<>
						<div className="flex h-[62dvh] w-full flex-col gap-4 overflow-y-scroll lg:h-[70vh]">
							{props.cart.line_items.map((item) => (
								<div key={item.id} className="flex w-full items-start gap-2">
									<div className="relative aspect-square w-[75px]">
										<Image
											src={String(item.image?.url)}
											alt={String(item.image?.filename)}
											className=""
											fill
											sizes="(max-width: 1024px) 100%,"
											priority
										/>
									</div>
									<div className="flex flex-1 flex-col gap-1">
										<p className="text-xs font-semibold lg:text-sm">{item.name}</p>
										<p className="text-xs font-light lg:text-sm">
											{item.line_total.formatted_with_symbol}
										</p>
										<div className="flex items-center gap-2">
											<button
												onClick={() => handleUpdateCart(item.id, item.quantity - 1)}
												className="rounded-full bg-dark p-1 text-white">
												<Minus className="text-10px] lg:text-xs" />
											</button>
											<p className="text-[10px] lg:text-xs">{item.quantity}</p>
											<button
												onClick={() => handleUpdateCart(item.id, item.quantity + 1)}
												className="rounded-full bg-dark p-1 text-white">
												<Plus className="text-10px] lg:text-xs" />
											</button>
											<button
												onClick={() => handleRemoveFromCart(item.id)}
												className="text-[10px] underline lg:text-xs">
												Remove
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
						<hr className="my-4 w-full bg-dark" />
						<div className="flex w-full flex-col gap-2">
							<div className="flex w-full items-center justify-between">
								<p className="text-sm font-semibold lg:text-base">Subtotal</p>
								<p className="text-sm font-semibold lg:text-base">
									{props.cart.subtotal.formatted_with_symbol}
								</p>
							</div>
							<p className="text-xs text-gray-500 lg:text-sm">
								Tax included. Shipping is calculated at checkout.
							</p>
							<Link
								href={`/cart/${props.cart.id}`}
								prefetch
								onClick={props.onClose}
								className="flex h-[40px] w-full items-center justify-center border border-accent text-sm text-accent">
								View cart
							</Link>
							<Link
								href={`/checkout/${props.cart.id}`}
								prefetch
								onClick={props.onClose}
								className="flex h-[40px] w-full items-center justify-center bg-accent text-sm text-light">
								Proceed to checkout
							</Link>
						</div>
					</>
				)}
			</motion.div>
		</div>
	)
}

export default Cart
