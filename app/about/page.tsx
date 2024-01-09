import React from "react"

const About = () => {
	return (
		<main className="flex w-full flex-col">
			<section className="my-5 flex w-full flex-col px-5 py-10 lg:w-1/2 lg:px-20">
				<p className="my-4 text-2xl lg:text-4xl">OlonaGirl</p>
				<hr className="my-4 w-full bg-dark" />
				<p className="text-sm lg:text-base">
					Olonagirl in a black owned business based in Nigeria. All our items are
					produced in Nigeria with raw materials locally and internationally sourced.
					Our brand is dedicated to bringing out the style and beauty in our
					today&apos;s African woman.
				</p>
			</section>
			<section className="h-[50vh] w-full bg-dark/75 bg-fixed-1 bg-cover bg-fixed bg-center bg-blend-multiply"></section>
			<section className="h-[50vh] w-full bg-dark/75 bg-fixed-2 bg-cover bg-fixed bg-center bg-blend-multiply"></section>
		</main>
	)
}

export default About
