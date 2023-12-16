const LogoSlide = () => {
	return (
		<div className="logos">
			<div className="logos-slide">
				{[...Array(10)].map((_, index) => (
					<p
						key={index}
						className="mx-10 text-base font-medium italic text-light lg:text-xl">
						OlonaGirl&trade;
					</p>
				))}
			</div>
			<div className="logos-slide">
				{[...Array(10)].map((_, index) => (
					<p
						key={index}
						className="mx-10 text-base font-medium italic text-light lg:text-xl">
						OlonaGirl&trade;
					</p>
				))}
			</div>
		</div>
	)
}

export default LogoSlide
