import React from "react"

import { ProductCard } from "../_components"
import { commerce } from "../_lib/commerce"

const Products = async () => {
	const collection = await commerce.products.list()

	if (!collection) return null

	return (
		<main className="flex w-full flex-col items-center px-5 py-40 lg:px-40">
			<p className="mb-10 w-full border-b border-dark text-center font-vanity text-4xl text-main lg:w-2/3 lg:text-7xl">
				Shop
			</p>
			<section className="grid w-full grid-cols-2 gap-2 lg:grid-cols-5 lg:gap-5">
				{collection.data.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</section>
		</main>
	)
}

export default Products
