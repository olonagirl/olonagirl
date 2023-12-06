"use client"
import {} from "string-strip-html"
import Image from "next/image"
import Link from "next/link"

import type { Product } from "../_types"

const Card = (props: Product) => {
	return (
		<div className="hover:border-main w-full rounded border-2 p-2">
			<div className="relative aspect-[3/2] w-full">
				<Image
					src={props.assets[0].url}
					alt={props.assets[0].filename}
					fill
					sizes="(max-width: 1024px) 100%,"
					priority
				/>
			</div>
			<div className="mt-3 flex w-full items-center justify-between">
				<Link href={`/products/${props.id}`} className="link text-sm">
					{props.name}
				</Link>
				<p className="text-sm">{props.price.formatted_with_symbol}</p>
			</div>
			<p className="text-xs">{props.description}</p>
			<button onClick={() => console.log(props)} className="">
				Add to cart
			</button>
		</div>
	)
}

export default Card
