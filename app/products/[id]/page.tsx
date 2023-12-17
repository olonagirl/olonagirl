import { stripHtml } from "string-strip-html"
import Image from "next/image"

import { commerce } from "../../_lib/commerce"
import { Button } from "@/app/_components"

interface Props {
	params: {
		id: string
	}
}

const Product = async ({ params: { id } }: Props) => {
	const product = await commerce.products.retrieve(id)

	if (!product) return null

	return (
		<>
			<section className="flex w-full flex-col items-center gap-4 px-5 py-10 lg:px-40">
				<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
					<div className="flex w-full flex-col">
						{product.assets.map((asset) => (
							<div key={asset.id} className="relative aspect-square w-full">
								<Image
									src={asset.url}
									alt={asset.filename}
									fill
									sizes="(max-width: 1024px) 100%,"
									className="object-cover"
									priority
								/>
							</div>
						))}
					</div>
					<div className="flex w-full flex-col">
						<p className="text-xs capitalize text-gray-400 lg:text-sm">
							{product.categories[0].name}
						</p>
						<div className="flex w-full items-center justify-between">
							<p className="my-3 text-base lg:text-2xl">{product.name}</p>
							<p className="my-3 text-base font-semibold lg:text-2xl">
								{product.price.formatted_with_symbol}
							</p>
						</div>
						<hr className="my-3 w-full bg-dark" />
						<div className="my-5 flex w-full flex-col gap-4">
							<div className="flex w-full items-center justify-between">
								<p className="text-xs font-semibold uppercase lg:text-sm">color</p>
							</div>
							<div className="flex w-full items-center justify-between">
								<p className="text-xs font-semibold uppercase lg:text-sm">size</p>
							</div>
							<div className="flex w-full items-center justify-between">
								<p className="text-xs font-semibold uppercase lg:text-sm">length</p>
							</div>
							<Button type="button" width="w-full">
								Add to Cart
							</Button>
						</div>
						<hr className="my-3 w-full bg-dark" />
						<p className="text-xs lg:text-sm">
							{stripHtml(product.description).result}
						</p>
					</div>
				</div>
			</section>
			<section className="flex w-full flex-col gap-4 px-5 py-10 lg:px-40">
				<p className="text-sm font-semibold lg:text-lg">Related products</p>
				<div className="my-4 flex w-full items-center py-5"></div>
			</section>
		</>
	)
}

export default Product
