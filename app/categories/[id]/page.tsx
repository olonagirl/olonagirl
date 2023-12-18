import { stripHtml } from "string-strip-html"
import Image from "next/image"

import { ProductCard } from "../../_components"
import { commerce } from "../../_lib/commerce"

interface Props {
	params: {
		id: string
		slug: string
	}
}

const Category = async ({ params: { id } }: Props) => {
	const category = await commerce.categories.retrieve(id)
	const products = await commerce.products.list({ category: category.id })

	if (!category) return null

	return (
		<>
			<section className="flex w-full flex-col items-start gap-4 px-5 py-10 lg:flex-row lg:px-20">
				<div className="relative aspect-[3/2] w-full lg:w-1/4">
					<Image
						src=""
						alt={category.name}
						fill
						sizes="(max-width: 1024px) 100%,"
						priority
					/>
				</div>
				<div className="flex w-full flex-col gap-2 lg:w-3/4">
					<p className="text-lg lg:text-2xl">{category.name}</p>
					<p className="text-xs lg:text-base">
						{stripHtml(category.description).result}
					</p>
				</div>
			</section>
			<section className="grid w-full grid-cols-2 gap-2 px-5 py-20 lg:grid-cols-5 lg:gap-5 lg:px-20">
				{products.data.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</section>
		</>
	)
}

export default Category
