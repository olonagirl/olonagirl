"use client"
import { Asset } from "@chec/commerce.js/types/asset"
import { useState } from "react"
import Image from "next/image"

interface Props {
	images: Asset[]
}

const Imagearray = (props: Props) => {
	const [current, setCurrent] = useState(0)

	return (
		<div className="flex w-full items-center gap-5">
			<div className="relative aspect-[2/3] w-[300px] lg:w-[500px]">
				<Image
					src={props.images[current].url}
					alt={props.images[current].filename}
					fill
					sizes="(max-width: 1024px) 100%,"
					className="object-cover"
					priority
				/>
			</div>
			<div className="mt-5 flex flex-col items-center gap-1">
				{props.images.map((asset, index) => (
					<div
						key={index}
						onClick={() => setCurrent(index)}
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
	)
}

export default Imagearray
