import React from "react"

interface Props {
	/**
	 * @prop color - border color of the spinner. Only Tailwind colors are supported.
	 */
	color?: string
}

const Spinner = (props: Props) => {
	return (
		<div
			className={`aspect-square w-6 animate-spin rounded-full border-2 border-t-transparent ${
				props.color ? props.color : "border-light"
			}`}></div>
	)
}

export default Spinner
