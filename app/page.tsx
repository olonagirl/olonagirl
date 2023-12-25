import Link from "next/link"

import { TestimonialData } from "./_assets/testimonial-data"
import { CarouselData } from "./_assets/carousel-data"
import { MiscData } from "./_assets/misc-data"
import { commerce } from "./_lib/commerce"
import {
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
			<section className="relative h-[95dvh] w-full bg-transparent lg:h-[95dvh]">
				<Carousel data={CarouselData} />
				<div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black/50 py-20">
					<p className="font-vanity text-8xl font-extralight text-main lg:text-[250px]">
						OlonaGirl
					</p>
				</div>
			</section>
			<LogoSlide />
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-20">
				<p className="mb-5 text-2xl lg:text-4xl">Explore the store</p>
				<div className="flex w-full flex-wrap items-center justify-center gap-4">
					{categories.data.map((category) => (
						<Link
							href={`/categories/${category.slug}`}
							key={category.slug}
							prefetch
							className="rounded p-2 text-lg capitalize hover:bg-gray-300 lg:text-xl">
							{category.name}
						</Link>
					))}
				</div>
			</section>
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-20">
				<p className="mb-5 text-2xl lg:text-4xl">New Arrivals</p>
				<div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
					{collection.data
						.sort((a, b) => b.created - a.created)
						.map((product) => <ProductCard key={product.id} {...product} />)
						.slice(0, 8)}
				</div>
			</section>
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-20">
				<p className="mb-5 text-2xl lg:text-4xl">Shop with confidence</p>
				<div className="my-4 grid w-full grid-cols-2 gap-x-4 gap-y-8 lg:w-2/3 lg:self-end">
					{MiscData.map((item, index) => (
						<div key={index} className="flex w-full flex-col">
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
			<section className="h-[75vh] w-full bg-dark/75 bg-fixed-1 bg-cover bg-fixed bg-center bg-blend-multiply"></section>
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
