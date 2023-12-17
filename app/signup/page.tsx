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
		<div className="flex w-full items-center gap-4 py-40 lg:items-start">
			<section className="w-full lg:w-2/3"></section>
			<section className="grid w-full place-items-center px-5 lg:w-1/3 lg:px-10">
				<div className="w-full">
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
						<Input
							typed="text"
							id="firstname"
							onChange={handleChange}
							label="First Name"
							error={errors.firstname}
							placeholder="Password"
						/>
						<Input
							typed="text"
							id="lastname"
							onChange={handleChange}
							label="Last Name"
							error={errors.lastname}
							placeholder="Password"
						/>
						<Input
							typed="email"
							id="email"
							onChange={handleChange}
							label="Email"
							error={errors.email}
							placeholder="Email"
						/>
						<Input
							typed="tel"
							id="phone"
							onChange={handleChange}
							label="Email"
							error={errors.phone}
							placeholder="Phone"
						/>
						<Button type="submit">Sign Up</Button>
					</form>
					<p className="mt-10 flex items-center">
						Have an account already?
						<Link href="/signin" prefetch className="link ml-1 text-main">
							Sign in
						</Link>
					</p>
				</div>
			</section>
		</div>
	)
}

export default Signup
