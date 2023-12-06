import { stripHtml } from "string-strip-html"
import Image from "next/image"
import Link from "next/link"

import { commerce } from "./_lib/commerce"

const Home = async () => {
	const collection = await commerce.products.list().then((data) => data)

	return (
		<>
			<section className="w-full"></section>
			<section className="grid w-full grid-cols-1 gap-5 px-5 py-20 lg:grid-cols-5 lg:px-20">
				{collection.data.map((product) => (
					<div
						key={product.id}
						className="hover:border-main w-full rounded border-2 p-2">
						<div className="relative aspect-[3/2] w-full">
							<Image
								src={product.assets[0].url}
								alt={product.name}
								fill
								sizes="(max-width: 1024px) 100%,"
								priority
							/>
						</div>
						<div className="mt-3 flex w-full items-center justify-between">
							<Link href={`/products/${product.id}`} className="link text-sm">
								{product.name}
							</Link>
							<p className="text-sm">{product.price.formatted_with_symbol}</p>
						</div>
						<p className="my-1 min-h-[32px] text-xs">
							{stripHtml(product.description).result}
						</p>
						<button className="bg-main flex items-center rounded px-2 py-1 text-white">
							Add to cart
						</button>
					</div>
				))}
			</section>
		</>
	)
}

export default Home
