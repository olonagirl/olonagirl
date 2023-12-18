"use client"
import { Product } from "@chec/commerce.js/types/product"
import { stripHtml } from "string-strip-html"
import { useEffect, useState } from "react"
import Image from "next/image"

import { commerce } from "../../_lib/commerce"
import { Button } from "@/app/_components"

interface Props {
	params: {
		id: string
	}
}

const Product = ({ params: { id } }: Props) => {
	const [product, setProduct] = useState<Product | null>(null)

	const getProduct = async () => setProduct(await commerce.products.retrieve(id))

	const handleAddToCart = async (productId: string, quantity: number) =>
		await commerce.cart.add(productId, quantity)

	useEffect(() => {
		getProduct()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!product) return null

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<section className="flex w-full flex-col items-center gap-4">
				<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
					<div className="flex w-full flex-col">
						{product.assets.map((asset) => (
							<div key={asset.id} className="relative aspect-square w-full">
								<Image
									src={asset.url}
									alt={asset.filename}
									fill
									sizes="(max-width: 1024px) 100%,"
									className="object-cover"
									priority
								/>
							</div>
						))}
					</div>
					<div className="flex w-full flex-col">
						<p className="text-xs capitalize text-gray-400 lg:text-sm">
							{product.categories[0].name}
						</p>
						<div className="flex w-full items-center justify-between">
							<p className="my-3 text-base lg:text-2xl">{product.name}</p>
							<p className="my-3 text-base font-semibold lg:text-2xl">
								{product.price.formatted_with_symbol}
							</p>
						</div>
						<hr className="my-3 w-full bg-dark" />
						<div className="my-5 flex w-full flex-col gap-4">
							<div className="flex w-full items-center justify-between">
								<p className="text-xs font-semibold uppercase lg:text-sm">color</p>
							</div>
							<div className="flex w-full items-center justify-between">
								<p className="text-xs font-semibold uppercase lg:text-sm">size</p>
							</div>
							<div className="flex w-full items-center justify-between">
								<p className="text-xs font-semibold uppercase lg:text-sm">length</p>
							</div>
							<Button
								type="button"
								onClick={() => handleAddToCart(product.id, 1)}
								width="w-full"
								disabled={!product.inventory.available}>
								{product.inventory.available ? "Add to Cart" : "Sold out"}
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
						<p className="text-xs lg:text-sm">
							{stripHtml(product.description).result}
						</p>
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
