import React from "react"

import { ProductCard } from "../_components"
import { commerce } from "../_lib/commerce"
import { usePageTitle } from "../_hooks"

const Products = async () => {
	const collection = await commerce.products.list()
	usePageTitle("Products")

	if (!collection) return null

	return (
		<main className="w-full px-5 py-20 lg:px-20">
			<p></p>
			<section className="grid w-full grid-cols-2 gap-2 lg:grid-cols-5 lg:gap-5">
				{collection.data.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</section>
		</main>
	)
}

export default Products
