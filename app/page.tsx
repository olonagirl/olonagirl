import Link from "next/link"

import { Carousel, LogoSlide, ProductCard, Subscription } from "./_components"
import { commerce } from "./_lib/commerce"

const Home = async () => {
	const collection = await commerce.products.list().then((data) => data)

	if (!collection) return null

	return (
		<main className="w-full">
			<section className="h-[90dvh] w-full bg-transparent">
				<div className="flex h-full w-full flex-col items-center justify-center px-5 py-20 lg:px-20">
					<p className="font-vanity text-8xl font-extralight text-main lg:text-[250px]">
						OlonaGirl
					</p>
				</div>
			</section>
			<LogoSlide />
			<section className="flex w-full flex-col items-center py-20">
				<p className="font-extralignt mb-5 text-2xl italic lg:text-4xl">
					New Arrivals
				</p>
				<Carousel data={collection.data.slice(0, 10)} />
			</section>
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-20">
				<p className="font-extralignt mb-10 text-2xl italic lg:text-4xl">
					Top Products
				</p>
				<div className="grid w-full grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-5">
					{collection.data
						.sort((a, b) => b.price.raw - a.price.raw)
						.map((product) => <ProductCard key={product.id} {...product} />)
						.slice(0, 12)}
				</div>
				<Link href="/products" className="link mt-10 text-base lg:text-xl">
					View All &rarr;
				</Link>
			</section>
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-20">
				<p className="font-extralignt mb-5 text-2xl italic lg:text-4xl">
					Testimonials
				</p>
			</section>
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-20">
				<p className="w-full text-center text-base lg:w-1/3 lg:text-xl">
					Subscribe to our newsletter and never miss a thing. We will bring you the
					latest in the world of fashion.
				</p>
				<Subscription />
			</section>
		</main>
	)
}

export default Home
