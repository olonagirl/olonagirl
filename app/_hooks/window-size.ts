"use client"
import { useEffect, useState } from "react"

interface WindowSize {
	height: number
	width: number
}

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<WindowSize>({
		height: window.innerHeight,
		width: window.innerWidth,
	})

	const handleWindowResize = () => {
		setWindowSize({
			height: window.innerHeight,
			width: window.innerWidth,
		})
	}

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize)
		return () => window.removeEventListener("resize", handleWindowResize)
	}, [])

	return windowSize
}

export default useWindowSize
