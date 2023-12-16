import { stripHtml } from "string-strip-html"
import Image from "next/image"

import { commerce } from "../../_lib/commerce"

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
			<section className="flex w-full flex-col items-start gap-4 px-5 py-10 lg:flex-row lg:px-20">
				<div>
					<div className="relative aspect-[2/3] w-full rounded border-2 border-dark lg:w-[500px]">
						<Image
							src={product.assets[0].url}
							alt={product.assets[0].filename}
							fill
							sizes="(max-width: 1024px) 100%,"
							className="rounded object-cover"
							priority
						/>
					</div>
					<div className="mt-5 flex items-center gap-1">
						{product.assets.map((asset, index) => (
							<div
								key={index}
								className="relative aspect-[2/3] w-[50px] cursor-pointer rounded border border-dark">
								<Image
									src={asset.url}
									alt={asset.filename}
									fill
									sizes="(max-width: 1024px) 100%,"
									className="rounded object-cover"
									priority
								/>
							</div>
						))}
					</div>
				</div>
				<div className="flex w-full flex-col gap-2 lg:w-3/4">
					<p className="text-lg lg:text-2xl">{product.name}</p>
					<p className="text-base font-semibold lg:text-xl">
						{product.price.formatted_with_symbol}
					</p>
					<p className="text-xs lg:text-base">
						{stripHtml(product.description).result}
					</p>
				</div>
			</section>
		</>
	)
}

export default Product
