import Link from "next/link"

const Contact = () => {
	return (
		<main className="w-full px-5 py-10 lg:px-20 lg:py-20">
			<p className="my-4 text-2xl lg:text-4xl">Contact</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="mb-16 mt-5 grid h-[50vh] w-full grid-cols-1 gap-10 lg:h-auto lg:grid-cols-2 lg:gap-0">
				<p className="w-full text-sm lg:w-2/3 lg:text-base">
					We would love to hear from you. Please reach out to the OlonaGirl customer
					service team through email or phone. Please also check our{" "}
					<Link href="/customer-service" className="underline">
						Customer Service
					</Link>{" "}
					page for any information you might need.
				</p>
				<div className="flex flex-col gap-1 text-sm lg:text-base">
					<a href="mailto:info@olonagirl.com" className="link w-fit">
						info@olonagirl.com
					</a>
					<a href="tel:+2348027599400 " className="link w-fit">
						+234 802 759 9400
					</a>
					<div className="mt-10 flex flex-col">
						22 Alhaji Musa Ibraheem Street ,
						<br />
						Idimu, Lagos,
						<br />
						Nigeria. <br />
					</div>
				</div>
			</section>
		</main>
	)
}

export default Contact
