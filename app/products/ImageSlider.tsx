"use client"
import { Asset } from "@chec/commerce.js/types/asset"
import { Dialog } from "@headlessui/react"
import { useState } from "react"
import Image from "next/image"

interface Props {
	assets: Asset[]
}

const ImageSlider = (props: Props) => {
	const [fullscreen, setFullscreen] = useState<number | null>(null)
	const [current, setCurrent] = useState(0)

	return (
		<>
			{fullscreen !== null && (
				<Dialog open={fullscreen !== null} onClose={() => setFullscreen(null)}>
					<Dialog.Panel
						onClick={() => setFullscreen(null)}
						className="fixed left-0 top-0 !z-20 grid h-full w-full place-items-center bg-black/40 py-10 backdrop-blur-sm">
						<div className="relative aspect-[2/3] h-full">
							<Image
								src={props.assets[fullscreen].url}
								alt={props.assets[fullscreen].filename}
								fill
								sizes="(max-width: 1024px) 100%,"
								priority
								className="object-fit"
							/>
						</div>
					</Dialog.Panel>
				</Dialog>
			)}
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
								onClick={() => setFullscreen(index)}
								className={`cursor-zoom-in object-cover transition-all duration-300 ${
									index === current ? "block scale-105 opacity-100" : "hidden opacity-0"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ImageSlider
