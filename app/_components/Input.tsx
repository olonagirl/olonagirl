"use client"
import { Eye, EyeSlash } from "@phosphor-icons/react"
import { useState } from "react"

import { InputProps } from "../_types"
const Input = (props: InputProps) => {
	const [revealed, setRevealed] = useState(false)

	if (props.as === "textarea") {
		return (
			<div className={`flex flex-col ${props.width ? props.width : "w-full"}`}>
				{props.label && (
					<label htmlFor={props.id} className="text-xs font-semibold">
						{props.label}
					</label>
				)}
				<textarea
					className="min-h-[150px] w-full resize-none border-2 border-gray-500 px-1 text-sm transition-all duration-300 focus:border-accent"
					{...props}></textarea>
				{props.error && <p className="text-xs text-red-600">{props.error}</p>}
			</div>
		)
	}

	if (props.as === "select") {
		return (
			<div
				className={`flex flex-col ${
					props.width ? props.width : "w-full min-w-[150px]"
				}`}>
				{props.label && (
					<label htmlFor={props.id} className="text-xs font-semibold">
						{props.label}
					</label>
				)}
				<select
					className="flex h-[40px] w-full cursor-pointer items-center gap-2 border-2 border-gray-500 px-1 py-1 text-sm capitalize transition-all duration-300 focus-within:border-accent"
					{...props}>
					{props.children}
				</select>
				{props.error && <p className="text-xs text-red-600">{props.error}</p>}
			</div>
		)
	}

	if (props.as === "input" && props.typed === "checkbox") {
		return (
			<>
				<label htmlFor={props.id} className="mt-3 flex items-center gap-1 text-sm">
					<input
						type="checkbox"
						className="peer sr-only rounded accent-accent"
						{...props}
					/>
					<div className="relative h-4 w-4 cursor-pointer rounded border-2 border-accent transition-opacity after:absolute after:left-1/2 after:top-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-sm after:bg-accent after:opacity-0 peer-checked:after:opacity-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2" />
					<span className="w-fit break-words">{props.label}</span>
				</label>
				{props.error && <p className="text-xs text-red-600">{props.error}</p>}
			</>
		)
	}

	return (
		<div className={`flex flex-col ${props.width ? props.width : "w-full"}`}>
			{props.label && (
				<label htmlFor={props.id} className="text-xs font-semibold">
					{props.label}
				</label>
			)}
			<div className="flex w-full items-center gap-2 border-2 border-gray-500 px-1 text-sm transition-all duration-300 focus-within:border-accent">
				{props.icon && <span>{props.icon}</span>}
				<input
					type={revealed ? "text" : props.typed}
					className="w-full border-none bg-transparent px-1 py-2"
					{...props}
				/>
				{props.typed === "password" && (
					<button onClick={() => setRevealed(!revealed)} type="button">
						{revealed ? <EyeSlash /> : <Eye />}
					</button>
				)}
			</div>
			{props.error && <p className="text-xs text-red-600">{props.error}</p>}
		</div>
	)
}

export default Input
