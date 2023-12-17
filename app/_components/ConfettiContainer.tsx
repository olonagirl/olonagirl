"use client"
import Confetti from "react-confetti"

import { useWindowSize } from "../_hooks"

const ConfettiContainer = () => {
	const { height, width } = useWindowSize()

	return (
		<div className="fixed top-0 left-0">
			<Confetti
				height={height}
				numberOfPieces={1500}
				recycle={false}
				width={width}
			/>
		</div>
	)
}

export default ConfettiContainer
