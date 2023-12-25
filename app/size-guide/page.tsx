import React from "react"

import { SizeGuideData } from "../_assets/size-guide"

const Page = () => {
	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl lg:text-4xl">Size Guide</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="my-5 w-full lg:w-1/2">
				<div className="w-full rounded border text-center">
					<div className=" grid w-full grid-cols-3 rounded-t bg-dark px-2 py-3 text-base font-semibold uppercase text-light lg:text-lg">
						<p>Size</p>
						<p>UK Size</p>
						<p>US Size</p>
					</div>
					{SizeGuideData.map((guide) => (
						<div
							key={guide.size}
							className="grid w-full grid-cols-3 border-b px-2 py-3 text-sm last:border-b-0 even:bg-gray-200 lg:text-base">
							<p>{guide.size}</p>
							<p>{guide.ukSize}</p>
							<p>{guide.usSize}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}

export default Page
