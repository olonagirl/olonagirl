"use client"
import { useEffect, useState } from "react"
import Confetti from "react-confetti"

const Success = () => {
	const [dimension, setDimension] = useState({
		height: typeof window !== "undefined" ? window.innerHeight : 900,
		width: typeof window !== "undefined" ? window.innerWidth : 1440,
	})

	const handleWidthResize = () => {
		if (typeof window !== "undefined") {
			setDimension({ height: window.innerHeight, width: window.innerWidth })
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleWidthResize)
		return () => window.removeEventListener("resize", handleWidthResize)
	}, [])

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<Confetti
				height={dimension.height}
				width={dimension.width}
				numberOfPieces={5000}
				recycle={false}
			/>
		</main>
	)
}

export default Success
