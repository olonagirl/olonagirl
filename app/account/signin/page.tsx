"use client"
import { useFormik } from "formik"
import Link from "next/link"

import { Button, Input } from "../../_components"
import { SigninSchema } from "@/app/_lib/schema"
import { commerce } from "../../_lib/commerce"
import { store } from "../../_store"

const initialValues = { email: "", password: "" }

const Signin = () => {
	const { login } = store()

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: SigninSchema,
		onSubmit: async (data) => {
			const token = await commerce.customer.login(data.email, "")
			if (token.success) {
				const user = await commerce.customer.about()
				login(user)
			}
		},
	})

	return (
		<main className="flex w-full flex-col items-center gap-4 px-5 py-10 lg:px-20 lg:py-20">
			<section className="h-full w-full">
				<p className="my-4 text-2xl lg:text-4xl">Signin</p>
				<hr className="my-4 w-full bg-dark" />
				<div className="my-5 w-full">
					<form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
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
							typed="password"
							id="password"
							onChange={handleChange}
							label="Password"
							error={errors.password}
							placeholder="Password"
							width="w-full lg:w-[350px]"
						/>
						<Button type="submit" width="w-full lg:w-[350px]">
							Signin
						</Button>
					</form>
					<p className="mt-10 flex items-center">
						Don&apos;t have an account?
						<Link href="/account/signup" prefetch className="link ml-1 text-main">
							Sign up
						</Link>
					</p>
				</div>
			</section>
		</main>
	)
}

export default Signin
