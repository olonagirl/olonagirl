"use client"
import { ShoppingCartSimple } from "@phosphor-icons/react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

import { store } from "../_store"

const NavLinks = [
	{ label: "home", href: "/" },
	{ label: "about us", href: "/about" },
	{ label: "shop", href: "/products" },
]

const Navbar = () => {
	const { isAuthenticated, totalItems } = store()
	const [isOpen, setIsOpen] = useState(false)
	const pathname = usePathname()

	return (
		<nav className="fixed left-0 top-4 !z-[5] w-screen bg-transparent px-5 lg:px-40">
			<div className="flex w-full items-center justify-between rounded-lg bg-white px-2 py-4 shadow-2xl">
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
				{isAuthenticated ? (
					<div className="flex items-center gap-2 lg:gap-5">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="relative grid h-7 w-7 place-items-center rounded-full lg:h-10 lg:w-10">
							<span className="absolute -top-1 right-0 text-xs text-main lg:top-0">
								{totalItems}
							</span>
							<ShoppingCartSimple className="text-sm text-main lg:text-lg" />
						</button>
						<button className="h-7 w-7 rounded-full border lg:h-10 lg:w-10"></button>
					</div>
				) : (
					<div className="flex items-center gap-5">
						<Link
							href="/signup"
							prefetch
							className="rounded-full bg-main px-3 py-2 text-[10px] text-white lg:text-xs">
							Create Account
						</Link>
						<button className="relative grid h-7 w-7 place-items-center rounded-full lg:h-10 lg:w-10">
							<span className="absolute -top-1 right-0 text-xs text-main lg:top-0">
								{totalItems}
							</span>
							<ShoppingCartSimple className="text-sm text-main lg:text-lg" />
						</button>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
