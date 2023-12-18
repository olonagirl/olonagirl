import React from "react"

import { CategoryCard } from "../_components"
import { commerce } from "../_lib/commerce"

const Categories = async () => {
	const categories = await commerce.categories.list()

	return (
		<main className="">
			<p></p>
			<section className="grid w-full grid-cols-2 gap-2 px-5 py-20 lg:grid-cols-5 lg:gap-5 lg:px-20">
				{categories.data.map((category) => (
					<CategoryCard key={category.id} {...category} />
				))}
			</section>
		</main>
	)
}

export default Categories
