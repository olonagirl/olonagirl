"use client"
import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"

interface Props {
	data: {
		id: string
		name: string
		image: StaticImageData
	}[]
}

const Carousel = (props: Props) => {
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((current + 1) % props.data.length)
		}, 10000)
		return () => clearInterval(interval)
	})

	return (
		<div className="flex h-full w-full items-center overflow-hidden">
			{props.data.map((item, index) => (
				<div
					key={item.id}
					className={`relative h-full w-full transform transition-all duration-500 ease-in-out ${
						index === current ? "block scale-[1.08] opacity-100" : "hidden opacity-0"
					}`}>
					<Image
						src={item.image}
						alt={item.name}
						className="object-cover"
						fill
						sizes="(max-width: 1024px) 100%,"
						priority
					/>
				</div>
			))}
		</div>
	)
}

export default Carousel
