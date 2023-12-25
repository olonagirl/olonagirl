"use client"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"
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
		<div className="flex w-full flex-col items-center gap-4">
			<div className="group relative aspect-square w-full overflow-hidden">
				{props.assets.map((asset, index) => (
					<Image
						src={asset.url}
						alt={asset.filename}
						key={asset.id}
						fill
						sizes="(max-width: 1024px) 100%,"
						priority
						className={`object-cover transition-all duration-300 ${
							index === current ? "block scale-105 opacity-100" : "hidden opacity-0"
						}`}
					/>
				))}
			</div>
			<div className="flex w-full items-center justify-center gap-4 px-2 lg:gap-6">
				<button
					onClick={handlePrev}
					className="bg-dark p-1 text-sm text-light lg:p-2 lg:text-base">
					<ArrowLeft />
				</button>
				<p className="text-sm font-light lg:text-base">
					{current + 1} / {props.assets.length}
				</p>
				<button
					onClick={handleNext}
					className="bg-dark p-1 text-sm text-light lg:p-2 lg:text-base">
					<ArrowRight />
				</button>
			</div>
		</div>
	)
}

export default ImageSlider
