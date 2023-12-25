import React, { ComponentProps } from "react"
import { StaticImageData } from "next/image"
import { LinkProps } from "next/link"

export type LoadingProps = "remove" | "update" | "empty" | "none"

export interface TestimonialProps {
	id: string
	name: string
	image: StaticImageData | string
	comment: string
	rating: number
}

export interface ShippingProps {
	id: string
	label: string
}

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
			/** Tailwind color e.g., bg-red-500, bg-black, bg-white/[0.5] */
			background?: string
	  })
	| (LinkProps & {
			as: "link"
			/** Tailwind width e.g., w-5, w-[200px] */
			width?: string
			/** Tailwind color e.g., bg-red-500, bg-black, bg-white/[0.5] */
			background?: string
			children?: React.ReactNode
	  })
