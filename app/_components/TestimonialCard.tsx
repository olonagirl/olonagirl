"use client"
import { RiDoubleQuotesL, RiStarSFill } from "@remixicon/react"
import React from "react"

import { TestimonialProps } from "../_types"

interface Props {
	comment: TestimonialProps["comment"]
	id: TestimonialProps["id"]
	image: TestimonialProps["image"]
	name: TestimonialProps["name"]
	rating: TestimonialProps["rating"]
}

const TestimonialCard = ({ comment, name, rating }: Props) => {
	return (
		<div className="w-full border border-gray-400 p-4">
			<div className="flex items-end gap-2">
				<RiDoubleQuotesL className="text-xl lg:text-2xl" />
				<p className="text-sm font-semibold lg:text-base">{name}</p>
			</div>
			<p className="text-xs lg:text-sm">{comment}</p>
			<div className="mt-2 flex w-full items-center justify-center gap-1">
				{[...Array(rating)].map((_, index) => (
					<RiStarSFill key={index} className="text-xs text-amber-500 lg:text-sm" />
				))}
			</div>
		</div>
	)
}

export default TestimonialCard
