"use client"
import { Quotes, Star } from "@phosphor-icons/react"
import React from "react"

import { TestimonialProps } from "../_types"

const TestimonialCard = (props: TestimonialProps) => {
	return (
		<div className="w-full border border-gray-400 p-4">
			<div className="flex items-end gap-1">
				<Quotes className="text-xl lg:text-2xl" />
				<p className="text-sm font-semibold lg:text-base">{props.name}</p>
			</div>
			<p className="text-xs lg:text-sm">{props.comment}</p>
			<div className="mt-2 flex w-full items-center justify-center gap-1">
				{[...Array(props.rating)].map((_, index) => (
					<Star
						key={index}
						weight="fill"
						className="text-sm text-amber-500 lg:text-base"
					/>
				))}
			</div>
		</div>
	)
}

export default TestimonialCard
