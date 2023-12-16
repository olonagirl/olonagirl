"use client"
import Link from "next/link"

import { ButtonProps } from "../_types"

const Button = (props: ButtonProps) => {
	if (props.as === "link") {
		return (
			<Link
				className={`flex h-[40px] items-center justify-center gap-1 rounded bg-accent text-sm text-light ${
					props.width ? props.width : "w-full"
				}`}
				{...props}>
				{props.children}
			</Link>
		)
	}

	return (
		<button
			className={`flex h-[40px] items-center justify-center gap-1 rounded bg-accent text-sm text-light ${
				props.width ? props.width : "w-full"
			}`}
			{...props}>
			{props.children}
		</button>
	)
}

export default Button
