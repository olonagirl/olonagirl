"use client"
import { Category } from "@chec/commerce.js/types/category"
import { Asset } from "@chec/commerce.js/types/asset"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type CategoryProps = Category & {
	assets: Asset[]
}

const Card = (props: Category) => {
	const category = props as CategoryProps

	return (
		<Link
			href={`/categories/${category.slug}`}
			className="group w-full lg:w-[450px]">
			<div className="relative aspect-[3/2] w-full overflow-hidden">
				<p className="absolute left-4 top-4 !z-[2] text-xl capitalize text-light lg:text-2xl">
					{category.name}
				</p>
				<div className="absolute left-0 top-0 !z-[1] h-full w-full bg-dark/40"></div>
				{category.assets && (
					<Image
						src={category.assets[0].url}
						alt={category.assets[0].filename}
						className="object-cover transition-all duration-300 group-hover:scale-105"
						fill
						sizes="(max-width: 1024px) 100%,"
						priority
					/>
				)}
			</div>
		</Link>
	)
}

export default Card
