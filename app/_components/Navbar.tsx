"use client"
import { Fragment, useEffect, useState } from "react"
import { Cart } from "@chec/commerce.js/types/cart"
import { Dialog, Menu } from "@headlessui/react"
import { RiCloseLine } from "@remixicon/react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
	RiSearch2Line,
	RiShoppingBag3Line,
	RiUser3Line,
} from "@remixicon/react"

import { NavLinkData } from "../_assets/navlink-data"
import HamburgerButton from "./HamburgerButton"
import { commerce } from "../_lib/commerce"
import Input from "./Input"
import MyCart from "./Cart"

const MenuListItems = [
	{ label: "account", href: "/account/user" },
	{ label: "orders", href: "/orders" },
	{ label: "sign out", href: "/account/signout" },
]

const Navbar = () => {
	const [cart, setCart] = useState<Cart | null>(null)
	const [scrolled, setScrolled] = useState(false)
	const [cartOpen, setCartOpen] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const [loggedIn, setLoggedIn] = useState(false)
	const [open, setOpen] = useState(false)
	const pathname = usePathname()

	const handleScroll = () => setScrolled(window.scrollY > 300)

	const fetchCart = async () => setCart(await commerce.cart.retrieve())

	useEffect(() => {
		setLoggedIn(commerce.customer.isLoggedIn())
	}, [])

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	useEffect(() => {
		fetchCart()
	}, [cart])

	return (
		<>
			{cartOpen && (
				<MyCart cart={cart} onClose={() => setCartOpen(false)} setCart={setCart} />
			)}
			<Dialog open={open} onClose={() => setOpen(false)}>
				<Dialog.Panel className="fixed left-0 top-0 grid h-full w-full place-items-center bg-black/40 backdrop-blur-sm">
					<div className="flex w-[90%] flex-col rounded bg-white p-4 lg:w-[500px]">
						<div className="flex w-full items-center justify-between">
							<p className="text-sm font-medium lg:text-base">Search</p>
							<button onClick={() => setOpen(false)}>
								<RiCloseLine />
							</button>
						</div>
						<hr className="my-2 w-full bg-dark" />
						<Input typed="text" placeholder="Search shop..." />
					</div>
				</Dialog.Panel>
			</Dialog>
			<nav
				className={`left-0 top-0 !z-[5] flex w-screen items-center justify-between border-b border-dark bg-transparent bg-white px-5 py-4 lg:px-20 ${
					scrolled ? "fixed" : "relative"
				}`}>
				<div className="flex items-center gap-4">
					<HamburgerButton open={menuOpen} setOpen={setMenuOpen} />
					<Link href="/" className="text-xl font-semibold lg:text-2xl">
						OlonaGirl
					</Link>
				</div>
				<div className="hidden items-center gap-4 lg:flex">
					{NavLinkData.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							prefetch
							className={`link text-xs font-semibold capitalize lg:text-sm ${
								pathname === item.href ? "text-dark" : "text-gray-500"
							}`}>
							{item.label}
						</Link>
					))}
				</div>
				<div className="flex items-center">
					<button
						onClick={() => setOpen(true)}
						className="p-[10px] hover:bg-gray-200">
						<RiSearch2Line className="text-sm lg:text-2xl" />
					</button>
					{loggedIn ? (
						<Menu as="div" className="relative">
							<Menu.Button className="p-[10px] hover:bg-gray-200">
								<RiUser3Line className="text-sm lg:text-2xl" />
							</Menu.Button>
							<Menu.Items className="absolute left-0 top-full !z-10 flex flex-col gap-2 rounded border bg-white p-4 shadow-xl">
								{MenuListItems.map((item) => (
									<Menu.Item key={item.href} as={Fragment}>
										{({ active }) => (
											<Link
												href={item.href}
												prefetch
												className={`rounded px-2 py-1 text-xs capitalize lg:text-sm ${
													active ? "bg-gray-400 text-white" : "text-dark"
												}`}>
												{item.label}
											</Link>
										)}
									</Menu.Item>
								))}
							</Menu.Items>
						</Menu>
					) : (
						<Link
							href="/account/signin"
							prefetch
							className="p-[10px] hover:bg-gray-200">
							<RiUser3Line className="text-sm lg:text-2xl" />
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
							<RiShoppingBag3Line className="text-sm lg:text-2xl" />
						)}
					</button>
				</div>
				<div
					className={`absolute left-0 top-full block w-full gap-2 bg-white transition-all duration-300 lg:hidden ${
						menuOpen ? "h-auto" : "h-0"
					}`}>
					{menuOpen && (
						<div className="flex w-full flex-col gap-2 p-4">
							{NavLinkData.map((item, index) => (
								<Link
									key={index}
									href={item.href}
									prefetch
									onClick={() => setMenuOpen(false)}
									className="link text-xs font-semibold capitalize lg:text-sm">
									{item.label}
								</Link>
							))}
						</div>
					)}
				</div>
			</nav>
		</>
	)
}

export default Navbar
