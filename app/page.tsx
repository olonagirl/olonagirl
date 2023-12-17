import { Carousel, LogoSlide, ProductCard, Subscription } from "./_components"
import { CarouselData } from "./_assets/carousel-data"
import { commerce } from "./_lib/commerce"

const Home = async () => {
	const collection = await commerce.products.list().then((data) => data)

	if (!collection) return null

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
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-40">
				<p className="mb-5 text-2xl lg:text-4xl">New Arrivals</p>
				<div className="grid w-full grid-cols-2 gap-2 lg:grid-cols-4">
					{collection.data
						.sort((a, b) => b.price.raw - a.price.raw)
						.map((product) => <ProductCard key={product.id} {...product} />)
						.slice(0, 20)}
				</div>
			</section>
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-40">
				<p className="mb-5 text-2xl lg:text-4xl">Testimonials</p>
				<p className="max-w-xl text-center text-sm text-gray-400 lg:text-base">
					See what our clients think of us
				</p>
			</section>
			<section className="h-[75vh] w-full bg-dark/75 bg-fixed-1 bg-cover bg-fixed bg-center bg-blend-multiply"></section>
			<section className="flex w-full flex-col items-center px-5 py-20 lg:px-40">
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
