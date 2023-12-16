"use client"
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react"

const Footer = () => {
	return (
		<footer className="flex w-full flex-col items-center bg-gradient-to-br from-main via-accent to-sky-500 px-5 pb-6 pt-20 lg:px-20">
			<p className="font-vanity text-7xl uppercase text-light lg:text-[200px]">
				Olonagirl
			</p>
			<div className="my-7 flex items-center justify-center gap-4 text-xl text-light lg:text-3xl">
				<a
					href="https://facebook.com/"
					target="_blank"
					className="transition-all duration-300 hover:scale-125">
					<FacebookLogo />
				</a>
				<a
					href="https://instagram.com/"
					target="_blank"
					className="transition-all duration-300 hover:scale-110">
					<InstagramLogo />
				</a>
			</div>
			<div className="flex w-full items-center justify-center border-t py-4">
				<p className="text-xs font-semibold uppercase text-light">
					&copy; {new Date().getFullYear()} Olonagirl &bull; All rights reseerved
					&bull; Powered by Chec-Commerce.
				</p>
			</div>
		</footer>
	)
}

export default Footer
