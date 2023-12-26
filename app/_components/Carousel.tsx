"use client"
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

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
		}, 5000)
		return () => clearInterval(interval)
	})

	return (
		<div className="flex h-full w-full items-center justify-center overflow-hidden">
			{props.data.map((item, index) => (
				<motion.div
					key={item.id}
					initial={{ opacity: 0, scale: 1 }}
					whileInView={{ opacity: 1, scale: 1.05 }}
					transition={{
						type: "tween",
						delay: 0.1,
						duration: 1,
						easings: ["easeIn", "easeOut"],
					}}
					className={`relative h-full w-full ${
						index === current ? "block" : "hidden"
					}`}>
					<Image
						src={item.image}
						alt={item.name}
						className="object-cover"
						fill
						sizes="(max-width: 1024px) 100%,"
						priority
					/>
				</motion.div>
			))}
		</div>
	)
}

export default Carousel
