"use client"
import { useEffect } from "react"

const usePageTitle = (title: string) => {
	useEffect(() => {
		document.title = `${title} - Olonagirl`
	}, [title])
}

export default usePageTitle
