import React from "react"

import { ProductCard } from "../_components"
import { commerce } from "../_lib/commerce"

const Products = async () => {
	const collection = await commerce.products.list()

	if (!collection) return null

	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl lg:text-4xl">Shop</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="my-5 grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
				{collection.data.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</section>
		</main>
	)
}

export default Products
