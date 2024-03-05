"use client"
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Props {
	data: {
		id: string
		name: string
		image: StaticImageData
		text: string
	}[]
}

const Carousel = ({ data }: Props) => {
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((current + 1) % data.length)
		}, 5000)
		return () => clearInterval(interval)
	})

	return (
		<div className="relative flex h-full w-full items-center justify-center overflow-hidden">
			{data.map((item, index) => (
				<motion.div
					key={item.id}
					initial={{ scale: 1 }}
					whileInView={{ scale: 1.05 }}
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
			<div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-dark/40">
				<div className="flex w-[90%] items-center justify-center overflow-hidden lg:w-fit">
					{data.map((item, index) => (
						<motion.p
							key={index}
							initial={{ y: "-100%" }}
							whileInView={{ y: 0 }}
							transition={{ type: "spring", delay: 0.1, duration: 1 }}
							className={`text-center text-2xl font-semibold uppercase text-light lg:text-5xl ${
								index === current ? "block" : "hidden"
							}`}>
							{item.text}
						</motion.p>
					))}
				</div>
			</div>
		</div>
	)
}

export default Carousel
