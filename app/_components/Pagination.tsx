"use client"
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react"
import React from "react"

interface Props {
	current: number
	onPageChange: (value: number) => void
	pageSize: number
	total: number
}

const Pagination = (props: Props) => {
	const totalPages = Math.ceil(props.total / props.pageSize)

	const goToPrev = () => {
		if (props.current > 1) {
			props.onPageChange(props.current - 1)
		}
	}

	const goToNext = () => {
		if (props.current < totalPages) {
			props.onPageChange(props.current + 1)
		}
	}

	return (
		<div className="my-5 flex w-full items-center justify-center gap-2 lg:gap-5">
			<button
				onClick={goToPrev}
				className="rounded bg-dark px-2 py-1 text-sm text-light lg:text-base"
				disabled={props.current === 1}>
				<RiArrowLeftSLine />
			</button>
			<p className="text-sm font-light lg:text-base">
				{props.current} / {totalPages}
			</p>
			<button
				onClick={goToNext}
				className="rounded bg-dark px-2 py-1 text-sm text-light lg:text-base"
				disabled={props.current === totalPages}>
				<RiArrowRightSLine />
			</button>
		</div>
	)
}

export default Pagination
