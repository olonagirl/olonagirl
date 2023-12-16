"use client"
import Confetti from "react-confetti"
import React from "react"

const Success = () => {
	return (
		<main className="h-[100dvh] w-full">
			<Confetti height={1000} numberOfPieces={1500} recycle={false} width={1000} />
		</main>
	)
}

export default Success
