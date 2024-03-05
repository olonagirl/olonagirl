"use client"
import { Asset } from "@chec/commerce.js/types/asset"
import { motion } from "framer-motion"
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
				<motion.div
					initial={{ scale: 1 }}
					animate={{ scale: 1.02 }}
					transition={{
						type: "tween",
						delay: 0.1,
						duration: 1,
						easings: ["easeIn", "easeOut"],
					}}
					className="relative aspect-[5/6] w-full overflow-hidden">
					<Image
						src={props.assets[current].url}
						alt={props.assets[current].filename}
						fill
						sizes="(max-width: 1024px) 100%,"
						priority
						className="object-cover"
					/>
				</motion.div>
			</div>
		</div>
	)
}

export default ImageSlider
