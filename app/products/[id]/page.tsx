"use client"
import { Product } from "@chec/commerce.js/types/product"
import { RiShareLine } from "@remixicon/react"
import { stripHtml } from "string-strip-html"
import { Info } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import Link from "next/link"

import { Button, Input, Loader, Spinner } from "@/app/_components"
import { commerce } from "@/app/_lib/commerce"
import ImageSlider from "../ImageSlider"
import { capitalize } from "@/app/_lib"

interface Props {
	params: {
		id: string
	}
}

const Product = ({ params: { id } }: Props) => {
	const [variants, setVariants] = useState<{ [name: string]: string }>({})
	const [product, setProduct] = useState<Product | null>(null)
	const [loading, setLoading] = useState(false)

	const getProduct = async () => setProduct(await commerce.products.retrieve(id))

	const handleAddToCart = async (productId: string, quantity: number) => {
		if (product && product.variant_groups.length > 0 && !variants)
			return alert("Please select a variant")
		setLoading(true)
		await commerce.cart.add(productId, quantity, variants)
		setLoading(false)
	}

	const handleVariant = (variantId: string, optionId: string) => {
		setVariants((variants) => ({ ...variants, [variantId]: optionId }))
	}

	const share = () => {
		if (product && navigator.share) {
			navigator.share({
				title: capitalize(product.name),
				text: capitalize(product.name),
				url: window.location.href,
				files: [],
			})
		}
	}

	useEffect(() => {
		getProduct()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!product) return <Loader />

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<section className="flex w-full flex-col items-center gap-4">
				<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
					<div className="flex w-full flex-col">
						<ImageSlider assets={product.assets} />
					</div>
					<div className="flex w-full flex-col">
						<p className="text-xs capitalize text-gray-400 lg:text-sm">
							{product.categories[0].name} /
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
									<Input
										as="select"
										onChange={(e) => handleVariant(group.id, e.target.value)}
										width="w-1/3 lg:w-[200px]">
										{group.options.map((option) => (
											<option key={option.id} value={option.id}>
												{option.name}
											</option>
										))}
									</Input>
								</div>
							))}
							<div className="my-2 flex w-full items-center justify-end">
								<Link
									href="/size-guide"
									prefetch
									className="flex items-center gap-1 text-xs underline lg:text-sm">
									<Info className="text-sm lg:text-base" />
									Size Guide
								</Link>
							</div>
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
						</div>
						<hr className="my-3 w-full bg-dark" />
						<p className="text-sm font-semibold lg:text-base">Description</p>
						<p className="text-xs lg:text-sm">
							{stripHtml(product.description).result}
						</p>
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
				<div className="my-4 flex min-h-[300px] w-full items-center py-5"></div>
			</section>
		</main>
	)
}

export default Product
