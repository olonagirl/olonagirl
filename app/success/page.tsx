"use client"
import Confetti from "react-confetti"
import React from "react"

import { useWindowSize } from "../_hooks"

const Success = () => {
	const { height, width } = useWindowSize()

	return (
		<main className="h-[100dvh] w-full">
			<Confetti
				height={height}
				numberOfPieces={1000}
				recycle={false}
				width={width}
			/>
		</main>
	)
}

export default Success
