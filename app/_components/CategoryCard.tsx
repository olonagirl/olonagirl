"use client"
import { Category } from "@chec/commerce.js/types/category"
import Link from "next/link"
import React from "react"

const CategoryCard = (props: Category) => {
	return (
		<Link
			href={`/categories/${props.id}`}
			className="aspect-square w-full border transition-all duration-300 hover:border-dark">
			<div className="mt-3 flex w-full flex-col items-center">
				<p className="link w-fit text-sm font-semibold italic lg:text-base">
					{props.name}
				</p>
			</div>
		</Link>
	)
}

export default CategoryCard
