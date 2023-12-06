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

	const renderPageNumbers = () => {
		const pageNumbers = []
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<li
					key={i}
					onClick={() => props.onPageChange(i)}
					className={`flex cursor-pointer items-center justify-center rounded px-1 font-light ${
						props.current === i ? "bg-dark text-light" : "text-dark"
					}`}>
					{i}
				</li>
			)
		}
		return pageNumbers
	}

	return (
		<div className="flex w-full items-center justify-between">
			<button onClick={goToPrev} className=""></button>
			<ul className="flex items-center gap-1">{renderPageNumbers()}</ul>
			<button onClick={goToNext} className=""></button>
		</div>
	)
}

export default Pagination
