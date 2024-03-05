"use client"
import { ProductCollection } from "@chec/commerce.js/features/products"
import { useEffect, useState } from "react"

import { Loader, Pagination, ProductCard } from "@/app/_components"
import { commerce } from "@/app/_lib/commerce"
import { normalizeString } from "@/app/_lib"

interface Props {
	params: {
		id: string
	}
}

const Page = ({ params: { id } }: Props) => {
	const [collection, setCollection] = useState<ProductCollection | null>(null)
	const [page, setPage] = useState(1)

	const getProducts = async () =>
		setCollection(
			await commerce.products.list({ category_slug: id, page, limit: 20 })
		)

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
		getProducts()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, page])

	if (!collection) return <Loader />

	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl capitalize lg:text-4xl">{normalizeString(id)}</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="my-5 grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
				{collection.data.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</section>
			{handlePagination()}
		</main>
	)
}

export default Page
