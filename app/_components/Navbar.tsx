import Link from "next/link"

const Navbar = () => {
	return (
		<nav className="flex w-full items-center justify-between px-5 py-4 lg:px-20">
			<div className="flex items-center">
				<Link href="/" className="text-2xl font-bold">
					Olonagirl
				</Link>
			</div>
			<div className="flex items-center"></div>
		</nav>
	)
}

export default Navbar
