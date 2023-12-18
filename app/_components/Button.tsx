"use client"
import Link from "next/link"

import { ButtonProps } from "../_types"

const Button = (props: ButtonProps) => {
	if (props.as === "link") {
		return (
			<Link
				className={`flex h-[40px] items-center justify-center gap-1 text-sm text-light transition-all duration-300 hover:bg-accent/[0.75] disabled:bg-accent/[0.6] ${
					props.width ? props.width : "w-full"
				} ${props.background ? props.background : "bg-accent"}`}
				{...props}>
				{props.children}
			</Link>
		)
	}

	return (
		<button
			className={`flex h-[40px] items-center justify-center gap-1 text-sm text-light transition-all duration-300 hover:bg-accent/[0.75] disabled:bg-accent/[0.6] ${
				props.width ? props.width : "w-full"
			} ${props.background ? props.background : "bg-accent"}`}
			{...props}>
			{props.children}
		</button>
	)
}

export default Button
