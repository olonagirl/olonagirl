"use client"
import { Asset } from "@chec/commerce.js/types/asset"
import { useState } from "react"
import Image from "next/image"

interface Props {
	assets: Asset[]
}

const ImageSlider = (props: Props) => {
	const [current, setCurrent] = useState(0)

	return (
		<div className="flex w-full items-start gap-2">
			<div className="flex w-[50px] flex-col items-center gap-1 lg:w-[75px]">
				{props.assets.map((asset, index) => (
					<div
						key={asset.id}
						className="relative aspect-[2/3] w-full overflow-hidden">
						<Image
							src={asset.url}
							alt={asset.filename}
							key={asset.id}
							fill
							id={`product-image-${index}`}
							sizes="(max-width: 1024px) 100%,"
							priority
							onClick={() => setCurrent(index)}
							className="object-fit cursor-pointer"
						/>
					</div>
				))}
			</div>
			<div className="flex flex-1 flex-col items-center gap-4">
				<div className="relative aspect-[5/6] w-full overflow-hidden">
					{props.assets.map((asset, index) => (
						<Image
							src={asset.url}
							alt={asset.filename}
							key={asset.id}
							fill
							sizes="(max-width: 1024px) 100%,"
							priority
							className={`object-cover ${index === current ? "block" : "hidden"}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default ImageSlider
