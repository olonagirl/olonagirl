"use client"
import { ShoppingCartSimple } from "@phosphor-icons/react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

import { store } from "../_store"

const NavLinks = [
	{ label: "home", href: "/" },
	{ label: "about us", href: "/about" },
	{ label: "shop", href: "/products" },
]

const Navbar = () => {
	const { isAuthenticated, totalItems } = store()
	const [scrolled, setScrolled] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 700)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<nav
			className={`left-0 top-0 !z-[5] flex w-full items-center justify-between border-b-2 bg-white px-5 py-6 transition-all duration-300 lg:px-20 ${
				scrolled ? "fixed" : "static"
			}`}>
			<div className="flex items-center gap-4">
				<Link
					href="/"
					className="font-vanity text-2xl font-extrabold text-main lg:text-4xl">
					OlonaGirl
				</Link>
			</div>
			<div className="hidden items-center gap-4 lg:flex">
				{NavLinks.map(({ href, label }, index) => (
					<Link
						key={index}
						href={href}
						className={`link text-xs font-semibold capitalize lg:text-sm ${
							pathname === href ? "text-main" : "text-dark"
						}`}>
						{label}
					</Link>
				))}
			</div>
			{isAuthenticated ? (
				<div className="flex items-center gap-5">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="relative grid h-7 w-7 place-items-center rounded-full lg:h-10 lg:w-10">
						<span className="absolute -top-1 right-0 text-xs lg:top-0">
							{totalItems}
						</span>
						<ShoppingCartSimple className="text-base text-main lg:text-xl" />
					</button>
					<button className="h-7 w-7 rounded-full border lg:h-10 lg:w-10"></button>
				</div>
			) : (
				<div className="flex items-center gap-5">
					<Link
						href="/signup"
						className="rounded-full bg-main px-3 py-2 text-xs text-white lg:text-sm">
						Create Account
					</Link>
					<button className="relative grid h-7 w-7 place-items-center rounded-full lg:h-10 lg:w-10">
						<span className="absolute -top-1 right-0 text-xs text-main lg:top-0">
							{totalItems}
						</span>
						<ShoppingCartSimple className="text-base text-main lg:text-xl" />
					</button>
				</div>
			)}
		</nav>
	)
}

export default Navbar
