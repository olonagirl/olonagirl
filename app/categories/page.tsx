import React from "react"

const Page = () => {
	return (
		<main className="flex w-full flex-col px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl lg:text-4xl">Categories</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="my-5 grid w-full grid-cols-2 gap-4 lg:grid-cols-4"></section>
		</main>
	)
}

export default Page
