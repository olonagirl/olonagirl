const LogoSlide = () => {
	return (
		<div className="logos">
			<div className="logos-slide">
				{[...Array(10)].map((_, index) => (
					<p
						key={index}
						className="mx-10 font-vanity text-base font-medium italic text-light lg:text-xl">
						OlonaGirl
					</p>
				))}
			</div>
			<div className="logos-slide">
				{[...Array(10)].map((_, index) => (
					<p
						key={index}
						className="mx-10 font-vanity text-base font-medium italic text-light lg:text-xl">
						OlonaGirl
					</p>
				))}
			</div>
		</div>
	)
}

export default LogoSlide
