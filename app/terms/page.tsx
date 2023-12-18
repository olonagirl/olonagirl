import React from "react"

const Page = () => {
	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl lg:text-4xl">Terms & Conditions</p>
			<hr className="my-4 w-full bg-dark" />
			<div className="my-10 flex flex-col">
				<p className="text-sm font-light lg:text-base">
					Effective date: {new Date().toDateString()}
				</p>
				<p className="text-sm font-light lg:text-base">
					Last modified date: {new Date().toDateString()}
				</p>
			</div>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Introduction</p>
				<p className="text-sm lg:text-base"></p>
			</section>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Applicable Terms</p>
				<p className="text-sm lg:text-base"></p>
			</section>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Your account</p>
				<p className="text-sm lg:text-base"></p>
			</section>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Data Usage</p>
				<p className="text-sm lg:text-base"></p>
			</section>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Orders</p>
				<p className="text-sm lg:text-base"></p>
			</section>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Payment</p>
				<p className="text-sm lg:text-base"></p>
			</section>
		</main>
	)
}

export default Page
