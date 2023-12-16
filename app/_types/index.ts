import React, { ComponentProps } from "react"
import { LinkProps } from "next/link"

export type InputProps =
	| (Omit<ComponentProps<"input">, "type"> & {
			as?: "input"
			label?: React.ReactNode
			icon?: JSX.Element
			error?: string
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
			typed: React.InputHTMLAttributes<HTMLInputElement>["type"]
	  })
	| (ComponentProps<"textarea"> & {
			as: "textarea"
			label?: React.ReactNode
			icon?: JSX.Element
			error?: string
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
	  })
	| (ComponentProps<"select"> & {
			as: "select"
			label?: React.ReactNode
			icon?: JSX.Element
			error?: string
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
	  })

export type ButtonProps =
	| (ComponentProps<"button"> & {
			as?: "button"
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
	  })
	| (LinkProps & {
			as: "link"
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
			children?: React.ReactNode
	  })
