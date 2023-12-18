"use client"
import { LineItem } from "@chec/commerce.js/types/line-item"
import Image from "next/image"
import React from "react"

interface Props {
	item: LineItem
}

const LineItemCard = ({ item }: Props) => {
	return (
		<div key={item.id} className="flex w-full items-center gap-2">
			<div className="relative aspect-square w-[75px] bg-gray-400 p-4">
				<Image
					src={String(item.image?.url)}
					alt={String(item.image?.filename)}
					className=""
					fill
					sizes="(max-width: 1024px) 100%,"
					priority
				/>
				<span className="absolute right-0 top-0">{item.quantity}</span>
			</div>
			<div className="flex flex-1 flex-col gap-1">
				<div className="flex w-full items-center justify-between">
					<p className="text-xs font-semibold lg:text-sm">{item.name}</p>
					<p className="text-xs font-semibold lg:text-sm">
						{item.line_total.formatted_with_symbol}
					</p>
				</div>
				<p className="text-xs font-light lg:text-sm">
					{item.price.formatted_with_symbol}
				</p>
			</div>
		</div>
	)
}

export default LineItemCard
