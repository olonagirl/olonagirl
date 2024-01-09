import React from "react"

import { SizeGuideData } from "../_assets/size-guide"

const Page = () => {
	return (
		<main className="w-full">
			<section className="my-5 w-full px-5 py-10 lg:w-1/2 lg:px-20">
				<p className="my-4 text-2xl lg:text-4xl">Size Guide</p>
				<hr className="my-4 w-full bg-dark" />
				<div className="w-full rounded border text-center text-sm lg:text-base">
					<div className=" grid w-full grid-cols-4 rounded-t bg-dark px-2 py-3 font-semibold uppercase text-light">
						<p>Intl</p>
						<p>US Size</p>
						<p>UK Size</p>
						<p>EU Size</p>
					</div>
					{SizeGuideData.map((guide, index) => (
						<div
							key={index}
							className="grid w-full grid-cols-4 border-b px-2 py-3 last:border-b-0 even:bg-gray-200">
							<p className="uppercase">{guide.intl}</p>
							<p>{guide.usSize}</p>
							<p>{guide.ukSize}</p>
							<p>{guide.euSize}</p>
						</div>
					))}
				</div>
			</section>
			<section className="h-[50vh] w-full bg-dark/75 bg-fixed-1 bg-cover bg-fixed bg-center bg-blend-multiply"></section>
			<section className="h-[50vh] w-full bg-dark/75 bg-fixed-2 bg-cover bg-fixed bg-center bg-blend-multiply"></section>
		</main>
	)
}

export default Page
