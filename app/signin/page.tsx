"use client"
import { useFormik } from "formik"
import Link from "next/link"

import { Button, Input } from "../_components"
import { commerce } from "../_lib/commerce"
import { store } from "../_store"

const initialValues = { email: "", password: "" }

const Signin = () => {
	const { login } = store()

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: async (data) => {
			const token = await commerce.customer.login(data.email, "")
			if (token.success) {
				const user = await commerce.customer.about()
				login(user)
			}
		},
	})

	return (
		<div className="flex w-full flex-col items-center gap-4 py-10 lg:flex-row lg:items-start">
			<section className="h-full w-full lg:w-2/3"></section>
			<section className="grid h-full w-full place-items-center px-5 lg:w-1/3 lg:px-14">
				<div className="w-full">
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
						<Input
							typed="email"
							id="email"
							onChange={handleChange}
							label="Email"
							error={errors.email}
							placeholder="Email"
						/>
						<Input
							typed="password"
							id="password"
							onChange={handleChange}
							label="Password"
							error={errors.password}
							placeholder="Password"
						/>
						<Button type="submit">Signin</Button>
					</form>
					<p className="mt-10 flex items-center">
						Don&apos;t have an account?
						<Link href="/signup" prefetch className="link ml-1 text-main">
							Sign up
						</Link>
					</p>
				</div>
			</section>
		</div>
	)
}

export default Signin
