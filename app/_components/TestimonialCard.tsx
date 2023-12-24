"use client"
import { RiDoubleQuotesL, RiStarSFill } from "@remixicon/react"
import React from "react"

import { TestimonialProps } from "../_types"

const TestimonialCard = (props: TestimonialProps) => {
	return (
		<div className="w-full border border-gray-400 p-4">
			<div className="flex items-end gap-2">
				<RiDoubleQuotesL className="text-xl lg:text-2xl" />
				<p className="text-sm font-semibold lg:text-base">{props.name}</p>
			</div>
			<p className="text-xs lg:text-sm">{props.comment}</p>
			<div className="mt-2 flex w-full items-center justify-center gap-1">
				{[...Array(props.rating)].map((_, index) => (
					<RiStarSFill key={index} className="text-xs text-amber-500 lg:text-sm" />
				))}
			</div>
		</div>
	)
}

export default TestimonialCard
