"use client"
import { Product } from "@chec/commerce.js/types/product"
import Image from "next/image"
import Link from "next/link"

const ProductCard = (props: Product) => {
	return (
		<Link href={`/products/${props.id}`} prefetch className="w-full">
			<div className="group relative aspect-[2/3] w-full overflow-hidden">
				<Image
					src={props.assets[0].url}
					alt={props.assets[0].filename}
					className="object-cover transition-all duration-300 hover:scale-105"
					fill
					sizes="(max-width: 1024px) 100%,"
					priority
				/>
			</div>
			<div className="w-full py-2">
				<div className="flex w-full items-center justify-between">
					<p className="text-xs font-light capitalize lg:text-sm">{props.name}</p>
					<p className="text-xs font-medium lg:text-sm">
						{props.price.formatted_with_symbol}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
