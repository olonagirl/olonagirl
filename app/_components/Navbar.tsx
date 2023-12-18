"use client"
import { Bag, MagnifyingGlass, User } from "@phosphor-icons/react"
import { Cart } from "@chec/commerce.js/types/cart"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

import { commerce } from "../_lib/commerce"
import SearchModal from "./SearchModal"
import { store } from "../_store"
import MyCart from "./Cart"

const NavLinks = [
	{ label: "home", href: "/" },
	{ label: "about us", href: "/about" },
	{ label: "shop", href: "/products" },
]

const Navbar = () => {
	const [cart, setCart] = useState<Cart | null>(null)
	const [modalOpen, setModalOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [cartOpen, setCartOpen] = useState(false)
	const { isAuthenticated } = store()
	const pathname = usePathname()

	const handleScroll = () => setScrolled(window.scrollY > 300)

	const fetchCart = async () => setCart(await commerce.cart.retrieve())

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	useEffect(() => {
		fetchCart()
	}, [cart])

	return (
		<>
			{modalOpen && <SearchModal onClose={() => setModalOpen(false)} />}
			{cartOpen && (
				<MyCart cart={cart} onClose={() => setCartOpen(false)} setCart={setCart} />
			)}
			<nav
				className={`left-0 top-0 !z-[5] flex w-screen items-center justify-between border-b border-dark bg-transparent bg-white px-5 py-4 lg:px-20 ${
					scrolled ? "fixed" : "static"
				}`}>
				<div className="flex items-center gap-4">
					<Link href="/" className="text-xl font-semibold lg:text-2xl">
						OlonaGirl&trade;
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
				<div className="flex items-center">
					<button
						className="p-[10px] hover:bg-gray-200"
						onClick={() => setModalOpen(true)}>
						<MagnifyingGlass className="text-base lg:text-2xl" />
					</button>
					{isAuthenticated ? (
						<button
							className="p-[10px] hover:bg-gray-200"
							onClick={() => console.log(cartOpen)}>
							<User className="text-base lg:text-2xl" />
						</button>
					) : (
						<Link
							href="/account/signin"
							prefetch
							className="p-[10px] hover:bg-gray-200">
							<User className="text-base lg:text-2xl" />
						</Link>
					)}
					<button
						className="p-[10px] hover:bg-gray-200"
						onClick={() => setCartOpen(!cartOpen)}>
						{cart?.total_items ? (
							<p className="bg-dark px-3 py-1 text-xs text-light lg:text-sm">
								{cart?.total_items}
							</p>
						) : (
							<Bag className="text-base lg:text-2xl" />
						)}
					</button>
				</div>
			</nav>
		</>
	)
}

export default Navbar
