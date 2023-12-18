"use client"
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react"
import Link from "next/link"

import { FooterData } from "../_assets/footer-data"

const Footer = () => {
	return (
		<footer className="flex w-full flex-col items-center bg-dark px-5 py-10 text-light lg:px-20 lg:py-20">
			<div className="flex w-full flex-wrap items-start justify-between gap-10 py-10">
				<div className="flex min-w-[300px] flex-col items-center">
					<Link
						href="/"
						prefetch
						className="font-vanity text-4xl uppercase lg:text-6xl">
						Olonagirl
					</Link>
					<div className="mt-7 flex items-center justify-center gap-4 text-xl lg:text-2xl">
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
				</div>
				<div className="flex flex-wrap items-start gap-10 lg:gap-5">
					{FooterData.map((item, index) => (
						<div key={index} className="flex min-w-[200px] flex-col gap-4">
							<p className="text-base font-light lg:text-lg">{item.header}</p>
							<div className="flex flex-col gap-2">
								{item.links.map((link, idx) => (
									<Link
										href={link.href}
										key={idx}
										className="text-xs text-gray-300 transition-colors duration-300 hover:text-gray-400 lg:text-sm">
										{link.label}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex w-full items-center justify-center border-t py-4 text-gray-300">
				<p className="text-center text-[10px] font-semibold uppercase lg:text-xs">
					&copy; {new Date().getFullYear()} Olonagirl &bull; All rights reseerved
					&bull; Powered by Chec-Commerce.
				</p>
			</div>
		</footer>
	)
}

export default Footer
