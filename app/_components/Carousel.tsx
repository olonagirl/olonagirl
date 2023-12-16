"use client"
import { Product } from "@chec/commerce.js/types/product"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper/modules"
import { stripHtml } from "string-strip-html"
import Image from "next/image"

import "swiper/css"
import "swiper/css/effect-coverflow"

import "./carousel.css"

interface Props {
	data: Product[]
}

const Carousel = (props: Props) => {
	return (
		<div className="container">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow]}
				className="mySwiper">
				{props.data.map((item) => (
					<SwiperSlide key={item.id}>
						<div className="mx-1 h-full w-full border-2 border-dark bg-white">
							<div className="relative aspect-[2/3] w-full">
								<Image
									src={item.assets[0].url}
									alt={item.name}
									className="object-cover"
									fill
									sizes="(max-width: 1024px) 100%,"
									priority
								/>
							</div>
							<div className="mt-3 flex w-full flex-col items-center">
								<p className="text-sm text-main lg:text-base">{item.name}</p>
								<p className="h-12 w-full text-center text-xs lg:h-8 lg:text-[10px]">
									{stripHtml(item.description).result}
								</p>
								<p className="text-sm font-semibold lg:text-base">
									{item.price.formatted_with_symbol}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Carousel
