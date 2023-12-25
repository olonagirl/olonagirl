import React from "react"

const Loader = () => {
	return (
		<div className="grid h-[60vh] w-full place-items-center">
			<div className="aspect-square w-7 animate-spin rounded-full border-2 border-dark border-t-gray-400"></div>
		</div>
	)
}

export default Loader
