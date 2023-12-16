"use client"
import { useFormik } from "formik"
import Link from "next/link"

import { Button, Input } from "../_components"
// import { commerce } from "../_lib/commerce"

const initialValues = {
	email: "",
	firstname: "",
	lastname: "",
	phone: "",
}

const Signup = () => {
	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (data) => console.log(data),
	})

	return (
		<div className="flex h-[100dvh] w-full items-center gap-4 lg:items-start">
			<section className="w-full lg:w-2/3"></section>
			<section className="grid w-full place-items-center lg:w-1/3">
				<div className="w-full">
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
						<Input
							typed="text"
							id="firstname"
							onChange={handleChange}
							label="First Name"
							error={String(errors.firstname)}
							placeholder="Password"
						/>
						<Input
							typed="text"
							id="lastname"
							onChange={handleChange}
							label="Last Name"
							error={String(errors.lastname)}
							placeholder="Password"
						/>
						<Input
							typed="email"
							id="email"
							onChange={handleChange}
							label="Email"
							error={String(errors.email)}
							placeholder="Email"
						/>
						<Input
							typed="tel"
							id="phone"
							onChange={handleChange}
							label="Email"
							error={String(errors.phone)}
							placeholder="Phone"
						/>
						<Button type="submit">Sign in</Button>
					</form>
					<p className="mt-10 flex items-center">
						Have an account already?{" "}
						<Link href="/signup" className="link text-main">
							Sign in
						</Link>
					</p>
				</div>
			</section>
		</div>
	)
}

export default Signup
