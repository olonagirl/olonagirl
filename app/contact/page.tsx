import Link from "next/link"

const Contact = () => {
	return (
		<main className="w-full px-5 py-10 lg:px-20 lg:py-20">
			<p className="my-4 text-2xl lg:text-4xl">Contact</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="mt-5 grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
				<p className="w-full text-sm lg:w-2/3 lg:text-base">
					We would love to hear from you. Please reach out to the OlonaGirl customer
					service team through email or phone. Please also check our{" "}
					<Link href="/customer-service" className="underline">
						Customer Service
					</Link>{" "}
					page for any information you might need.
				</p>
				<div className="flex flex-col gap-1">
					<a
						href="mailto:hello@olonagirl.com"
						className="link w-fit text-sm lg:text-base">
						hello@olonagirl.com
					</a>
					<a href="tel:+1800656624475" className="link w-fit text-sm lg:text-base">
						+1 800 6566 24475
					</a>
					<div className="mt-10 flex flex-col">
						OlonaGirl <br />
						100, W. Main St, 2nd Floor
						<br />
						Washington DC 20019-4600 <br />
						USA <br />
					</div>
				</div>
			</section>
		</main>
	)
}

export default Contact
