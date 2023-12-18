"use client"
import { KeyboardEvent } from "react"

import Input from "./Input"

interface Props {
	onClose: () => void
}

const SearchModal = (props: Props) => {
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			if (!e.currentTarget.value) return
			console.log(e.currentTarget.value)
			e.currentTarget.value = ""
		}
	}

	return (
		<div
			onClick={props.onClose}
			className="fixed left-0 top-0 !z-[7] flex h-[100dvh] w-screen flex-col items-center bg-dark/60 px-5 py-20 backdrop-blur-sm lg:py-40">
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-full rounded bg-light p-4 lg:w-3/5">
				<Input
					typed="text"
					placeholder="Search products..."
					onKeyDown={handleKeyDown}
				/>
				<p className="my-4 text-sm lg:text-base">Recent results</p>
			</div>
		</div>
	)
}

export default SearchModal
