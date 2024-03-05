import Link from "next/link"

import { TestimonialData } from "./_assets/testimonial-data"
import { CarouselData } from "./_assets/carousel-data"
import { MiscData } from "./_assets/misc-data"
import { commerce } from "./_lib/commerce"
import {
	// Card,
	Carousel,
	LogoSlide,
	ProductCard,
	Subscription,
	TestimonialCard,
} from "./_components"

const Home = async () => {
	const collection = await commerce.products.list().then((data) => data)
	const categories = await commerce.categories.list().then((data) => data)

	if (!collection || !categories) return null

	return (
		<main className="w-full bg-light">
			<section className="h-[95vh] w-full lg:h-[95vh]">
				<Carousel data={CarouselData} />
			</section>
			<LogoSlide />
			<section className="flex w-full flex-col items-center py-20">
				<p className="mb-5 text-2xl lg:text-4xl">Explore the store</p>
				{/* <div className="flex w-full flex-wrap items-center justify-center gap-4">
					{categories.data.map((category) => (
						<Card key={category.slug} {...category} />
					))}
				</div> */}
			</section>
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-20">
				<p className="mb-5 text-2xl lg:text-4xl">New Arrivals</p>
				<div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
					{collection.data
						.sort((a, b) => b.created - a.created)
						.map((product) => <ProductCard key={product.id} product={product} />)
						.slice(0, 8)}
				</div>
			</section>
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-20">
				<p className="mb-5 text-2xl lg:text-4xl">Shop with confidence</p>
				<div className="my-4 grid w-full grid-cols-2 gap-x-4 gap-y-8 lg:w-2/3 lg:self-end">
					{MiscData.map((item, index) => (
						<div key={index} className="relative flex w-full flex-col">
							<span className="absolute -left-4 -top-4 text-dark/20">{item.icon}</span>
							<p className="text-sm font-semibold lg:text-base">{item.heading}</p>
							<p className="w-full text-xs lg:w-2/3 lg:text-sm">{item.content}</p>
						</div>
					))}
				</div>
			</section>
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-20">
				<p className="mb-5 text-2xl lg:text-4xl">Testimonials</p>
				<p className="max-w-xl text-center text-base text-gray-500 lg:text-lg">
					See what our clients think of us
				</p>
				<div className="my-4 grid w-full grid-cols-1 gap-4 lg:grid-cols-4">
					{TestimonialData.map((item) => (
						<TestimonialCard key={item.id} {...item} />
					))}
				</div>
			</section>
			<section className="h-[50vh] w-full bg-dark/75 bg-fixed-1 bg-cover bg-fixed bg-center bg-blend-multiply"></section>
			<section className="h-[50vh] w-full bg-dark/75 bg-fixed-2 bg-cover bg-fixed bg-center bg-blend-multiply"></section>
			<section className="grid w-full place-items-center bg-dark px-5 py-20 lg:px-20">
				<div className="flex w-full flex-col items-center justify-center">
					<p className="my-5 text-center text-3xl text-light lg:text-5xl">
						Want to experience the best of Afro-fashion? Start shoppng now!
					</p>
					<Link
						href="/products"
						className="flex h-[40px] w-[200px] items-center justify-center gap-1 bg-light text-sm text-dark transition-all duration-300 hover:opacity-95 lg:w-[300px]">
						Shop Now
					</Link>
				</div>
			</section>
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-20">
				<p className="w-full text-center text-base lg:w-1/2 lg:text-xl">
					Subscribe to our newsletter and never miss a thing. We will bring you the
					latest in the world of fashion.
				</p>
				<Subscription />
			</section>
		</main>
	)
}

export default Home
