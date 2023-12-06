const Footer = () => {
	return (
		<footer className="bg-dark w-full px-5 py-6 lg:px-20">
			<div className="my-5 w-full">
				<p className="text-4xl text-white">Olonagirl</p>
			</div>
			<div className="flex w-full items-center justify-between border-t py-4">
				<p className="text-sm text-white">
					&copy; {new Date().getFullYear()} Olonagirl.
				</p>
				<div className="flex items-center gap-4 text-2xl text-white"></div>
			</div>
		</footer>
	)
}

export default Footer
