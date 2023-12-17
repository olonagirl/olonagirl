"use client"
import { Bag, User } from "@phosphor-icons/react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

const NavLinks = [
	{ label: "home", href: "/" },
	{ label: "about us", href: "/about" },
	{ label: "shop", href: "/products" },
]

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	const handleScroll = () => setScrolled(window.scrollY > 700)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<nav
			className={`left-0 top-0 !z-[5] flex w-screen items-center justify-between bg-transparent bg-white px-5 py-4 lg:px-40 ${
				scrolled ? "fixed" : "static"
			}`}>
			<div className="flex items-center gap-4">
				<Link
					href="/"
					className="font-vanity text-xl font-extrabold text-main lg:text-3xl">
					OlonaGirl
				</Link>
			</div>
			<div className="hidden items-center gap-4 lg:flex">
				{NavLinks.map(({ href, label }, index) => (
					<Link
						key={index}
						href={href}
						prefetch
						className={`link text-xs font-semibold capitalize lg:text-sm ${
							pathname === href ? "text-main" : "text-dark"
						}`}>
						{label}
					</Link>
				))}
			</div>
			<div className="flex items-center gap-2 lg:gap-4">
				<button onClick={() => console.log(!isOpen)}>
					<User className="text-base lg:text-2xl" />
				</button>
				<button onClick={() => setIsOpen(!isOpen)}>
					<Bag className="text-base lg:text-2xl" />
				</button>
			</div>
		</nav>
	)
}

export default Navbar
