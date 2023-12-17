import { stripHtml } from "string-strip-html"

import { Button, Input } from "@/app/_components"
import { commerce } from "../../_lib/commerce"
import ImageArray from "./ImageArray"

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
			<section className="flex w-full flex-col items-center gap-4 px-5 py-40 lg:px-40">
				<p className="mb-10 w-full border-b border-dark text-center text-xl font-semibold uppercase lg:w-2/3 lg:text-3xl">
					{product.name}
				</p>
				<div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
					<ImageArray images={product.assets} />
					<div className="flex w-full flex-col gap-4">
						<Input typed="text" label="Size" width="w-full lg:w-[300px]" />
						<Input typed="text" label="Color" width="w-full lg:w-[300px]" />
						<Input typed="text" label="Length" width="w-full lg:w-[300px]" />

						<Button type="button" width="w-full lg:w-[300px]">
							Add to Cart
						</Button>
						<hr className="my-3 w-full bg-dark" />
						<p className="text-base lg:text-lg">
							{stripHtml(product.description).result}
						</p>
					</div>
				</div>
			</section>
			<section className="flex w-full flex-col items-center gap-4 px-5 py-10 lg:px-40">
				<p className="text-sm font-semibold lg:text-lg">More in this collection</p>
			</section>
		</>
	)
}

export default Product
