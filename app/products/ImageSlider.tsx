"use client"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import { Asset } from "@chec/commerce.js/types/asset"
import { useState } from "react"
import Image from "next/image"

interface Props {
	assets: Asset[]
}

const ImageSlider = (props: Props) => {
	const [current, setCurrent] = useState(0)

	const handleNext = () =>
		current === props.assets.length - 1 ? setCurrent(0) : setCurrent(current + 1)

	const handlePrev = () =>
		current === 0 ? setCurrent(props.assets.length - 1) : setCurrent(current - 1)

	return (
		<div className="group relative aspect-square w-full">
			{props.assets.map((asset, index) => (
				<Image
					src={asset.url}
					alt={asset.filename}
					key={asset.id}
					layout="fill"
					objectFit="cover"
					className={`transition-all duration-300 ${
						index === current ? "block scale-105 opacity-100" : "hidden opacity-0"
					}`}
				/>
			))}
			<div className="absolute left-0 top-0 hidden h-full w-full flex-col items-center justify-center bg-black/30 px-2 group-hover:flex">
				<div className="flex w-full items-center justify-between">
					<button
						onClick={handlePrev}
						className="bg-white px-2 py-3 text-sm lg:text-base">
						<RiArrowLeftSLine />
					</button>
					<button
						onClick={handleNext}
						className="bg-white px-2 py-3 text-sm lg:text-base">
						<RiArrowRightSLine />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ImageSlider
