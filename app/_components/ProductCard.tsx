"use client"
import { Product } from "@chec/commerce.js/types/product"
import Image from "next/image"
import Link from "next/link"

const ProductCard = (props: Product) => {
	return (
		<Link href={`/products/${props.id}`} prefetch className="w-full">
			<div className="group relative aspect-square w-full overflow-hidden">
				<Image
					src={props.assets[0].url}
					alt={props.assets[0].filename}
					className="object-cover transition-all duration-300 group-hover:scale-[1.02]"
					fill
					sizes="(max-width: 1024px) 100%,"
					priority
				/>
			</div>
			<div className="w-full py-2">
				<div className="flex w-full items-center justify-between">
					<p className="text-xs font-light lg:text-sm">{props.name}</p>
					<p className="text-xs font-light lg:text-sm">
						{props.price.formatted_with_symbol}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
