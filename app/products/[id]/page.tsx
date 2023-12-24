"use client"
import { RiAddLine, RiShareLine, RiSubtractLine } from "@remixicon/react"
import { Product } from "@chec/commerce.js/types/product"
import { Disclosure } from "@headlessui/react"
import { stripHtml } from "string-strip-html"
import { useEffect, useState } from "react"

import { Button, Loader, Spinner } from "@/app/_components"
import { commerce } from "../../_lib/commerce"
import ImageSlider from "../ImageSlider"

interface Props {
	params: {
		id: string
	}
}

const Product = ({ params: { id } }: Props) => {
	const [product, setProduct] = useState<Product | null>(null)
	const [loading, setLoading] = useState(false)

	const getProduct = async () => setProduct(await commerce.products.retrieve(id))

	const handleAddToCart = async (productId: string, quantity: number) => {
		setLoading(true)
		await commerce.cart.add(productId, quantity)
		setLoading(false)
	}

	const share = () => {
		if (navigator.share) {
			navigator.share({
				title: product?.name,
				text: stripHtml(product?.description || "").result,
				url: window.location.href,
			})
		}
	}

	useEffect(() => {
		getProduct()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (product) {
			console.log(product.variant_groups)
		}
	}, [product])

	if (!product) return <Loader />

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<section className="flex w-full flex-col items-center gap-4">
				<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
					<div className="flex w-full flex-col">
						<ImageSlider assets={product.assets} />
					</div>
					<div className="flex w-full flex-col">
						<p className="text-xs capitalize text-gray-400 lg:text-sm">
							{product.categories[0].name}
						</p>
						<div className="flex w-full items-center justify-between">
							<p className="my-3 text-base capitalize lg:text-2xl">{product.name}</p>
							<p className="my-3 text-base font-medium lg:text-2xl">
								{product.price.formatted_with_symbol}
							</p>
						</div>
						<hr className="my-3 w-full bg-dark" />
						<div className="my-5 flex w-full flex-col gap-4">
							{product.variant_groups.map((group) => (
								<div
									key={group.id}
									className="flex w-full items-center justify-between">
									<p className="text-xs font-semibold uppercase lg:text-sm">
										{group.name}
									</p>
									<div className="flex items-center gap-2">
										{group.options.map((option) => (
											<label
												key={option.id}
												className="flex items-center gap-1 font-light capitalize text-[8p] lg:text-[10px]">
												<input type="radio" name={group.name} value={option.name} id="" />
												{option.name}
											</label>
										))}
									</div>
								</div>
							))}
							<Button
								type="button"
								onClick={() => handleAddToCart(product.id, 1)}
								width="w-full"
								disabled={!product.inventory.available}>
								{product.inventory.available ? (
									loading ? (
										<Spinner />
									) : (
										"Add to Cart"
									)
								) : (
									"Sold out"
								)}
							</Button>
							{!product.inventory.available && (
								<Button
									type="button"
									onClick={() => console.log("notify")}
									width="w-full"
									background="bg-black">
									Notify me when available
								</Button>
							)}
						</div>
						<hr className="my-3 w-full bg-dark" />
						<Disclosure as="div" className="flex w-full flex-col gap-4">
							{({ open }) => (
								<>
									<Disclosure.Button
										className={`flex w-full items-center justify-between p-2 ${
											open ? "bg-transparent text-dark" : "bg-dark text-light"
										}`}>
										<p>Description</p>
										<span>{open ? <RiSubtractLine /> : <RiAddLine />}</span>
									</Disclosure.Button>
									<Disclosure.Panel className="px-3 text-xs lg:text-sm">
										{stripHtml(product.description).result}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
						<hr className="my-3 w-full bg-dark" />
						<div className="flex w-full items-center justify-between">
							<p className="text-xs lg:text-sm">Share</p>
							<div className="flex items-center gap-2">
								<button onClick={() => share()} className="text-base lg:text-xl">
									<RiShareLine />
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mt-10 flex w-full flex-col gap-4 lg:mt-20">
				<p className="text-sm font-semibold lg:text-xl">Related products</p>
				<div className="my-4 flex min-h-[500px] w-full items-center py-5"></div>
			</section>
		</main>
	)
}

export default Product
