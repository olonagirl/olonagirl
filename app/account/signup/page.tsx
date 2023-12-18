"use client"
import { useFormik } from "formik"
import Link from "next/link"

import { Button, Input } from "../../_components"
import { SignupSchema } from "../../_lib/schema"
// import { commerce } from "../_lib/commerce"

const initialValues = {
	email: "",
	firstname: "",
	lastname: "",
	phone: "",
	password: "",
}

const Signup = () => {
	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: SignupSchema,
		onSubmit: (data) => console.log(data),
	})

	return (
		<main className="flex w-full items-center gap-4 px-5 py-10 lg:px-20 lg:py-20">
			<section className="h-full w-full">
				<p className="my-4 text-2xl lg:text-4xl">Create account</p>
				<hr className="my-4 w-full bg-dark" />
				<div className="my-10 w-full">
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
						<Input
							typed="text"
							id="firstname"
							onChange={handleChange}
							label="First Name"
							error={errors.firstname}
							placeholder="Password"
							width="w-full lg:w-[350px]"
						/>
						<Input
							typed="text"
							id="lastname"
							onChange={handleChange}
							label="Last Name"
							error={errors.lastname}
							placeholder="Password"
							width="w-full lg:w-[350px]"
						/>
						<Input
							typed="email"
							id="email"
							onChange={handleChange}
							label="Email"
							error={errors.email}
							placeholder="Email"
							width="w-full lg:w-[350px]"
						/>
						<Input
							typed="tel"
							id="phone"
							onChange={handleChange}
							label="Phone"
							error={errors.phone}
							placeholder="Phone"
							width="w-full lg:w-[350px]"
						/>
						<Input
							typed="password"
							id="password"
							onChange={handleChange}
							label="Password"
							error={errors.password}
							placeholder="Password"
							width="w-full lg:w-[350px]"
						/>
						<Button type="submit" width="w-full lg:w-[350px]">
							Sign Up
						</Button>
					</form>
					<p className="mt-10 flex items-center">
						Have an account already?
						<Link href="/account/signin" prefetch className="link ml-1 text-main">
							Sign in
						</Link>
					</p>
				</div>
			</section>
		</main>
	)
}

export default Signup
