"use client"
import { ProductCollection } from "@chec/commerce.js/features/products"
import { useEffect, useState } from "react"

import { Loader, Pagination, ProductCard } from "../_components"
import { commerce } from "../_lib/commerce"

const Products = () => {
	const [collection, setCollection] = useState<ProductCollection | null>(null)
	const [page, setPage] = useState(1)

	const getCollection = async () =>
		setCollection(await commerce.products.list({ page, limit: 20 }))

	const onPageChange = (page: number) => setPage(page)

	const handlePagination = () => {
		if (collection && collection.meta.pagination.total > 20) {
			return (
				<Pagination
					current={page}
					onPageChange={onPageChange}
					pageSize={20}
					total={collection.meta.pagination.total}
				/>
			)
		} else return null
	}

	useEffect(() => {
		getCollection()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page])

	if (!collection) return <Loader />

	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl lg:text-4xl">Shop</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="my-5 grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
				{collection.data.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						image={product.image}
						name={product.name}
						price={product.price}
					/>
				))}
			</section>
			{handlePagination()}
		</main>
	)
}

export default Products
