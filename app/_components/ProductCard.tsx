"use client"
import { Product } from "@chec/commerce.js/types/product"
import Image from "next/image"
import Link from "next/link"

interface Props {
	id: Product["id"]
	image: Product["image"]
	name: Product["name"]
	price: Product["price"]
}

const ProductCard = ({ id, image, name, price }: Props) => {
	return (
		<Link href={`/products/${id}`} prefetch className="w-full">
			<div className="group relative aspect-[2/3] w-full overflow-hidden">
				<Image
					src={String(image?.url)}
					alt={String(image?.filename)}
					className="object-cover transition-all duration-300 hover:scale-105"
					fill
					sizes="(max-width: 1024px) 100%,"
					priority
				/>
			</div>
			<div className="w-full py-2">
				<div className="flex w-full items-center justify-between">
					<p className="text-xs font-light capitalize lg:text-sm">{name}</p>
					<p className="text-xs font-medium lg:text-sm">
						{price.formatted_with_symbol}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
