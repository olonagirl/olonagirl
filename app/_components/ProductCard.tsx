"use client"
import { Product } from "@chec/commerce.js/types/product"
import { stripHtml } from "string-strip-html"
import Image from "next/image"
import Link from "next/link"

const ProductCard = (props: Product) => {
	return (
		<Link
			href={`/products/${props.id}`}
			className="w-full bg-white p-2 transition-all duration-300 hover:shadow-2xl">
			<div className="relative aspect-[2/3] w-full">
				<Image
					src={props.assets[0].url}
					alt={props.assets[0].filename}
					className="object-cover"
					fill
					sizes="(max-width: 1024px) 100%,"
					priority
				/>
			</div>
			<div className="mt-3 flex w-full flex-col items-center">
				<p className="text-sm font-semibold text-main lg:text-base">{props.name}</p>
				<p className="h-12 w-full text-center text-xs lg:h-8 lg:text-[10px]">
					{stripHtml(props.description).result}
				</p>
				<p className="text-sm font-semibold lg:text-base">
					{props.price.formatted_with_symbol}
				</p>
			</div>
		</Link>
	)
}

export default ProductCard
