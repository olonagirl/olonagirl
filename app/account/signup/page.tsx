"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useFormik } from "formik"
import Link from "next/link"

import { Button, Input } from "@/app/_components"
import { SignupSchema } from "@/app/_lib/schema"

const initialValues = {
	email: "",
	name: "",
	phone: "",
	password: "",
}

const Signup = () => {
	const supabase = createClientComponentClient()
	const { push } = useRouter()

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: SignupSchema,
		onSubmit: async (values) => {
			const { error } = await supabase.auth.signUp({ ...values })
			if (!error) {
				push("/account/signin")
			} else {
				console.log(error.message)
			}
		},
	})

	return (
		<main className="flex w-full items-center gap-4 px-5 py-10 lg:px-20 lg:py-20">
			<section className="h-full w-full">
				<p className="my-4 text-2xl lg:text-4xl">Create account</p>
				<hr className="my-4 w-full bg-dark" />
				<div className="my-10 w-full">
					<form
						onSubmit={handleSubmit}
						className="flex w-full flex-col gap-4 lg:mb-10">
						<Input
							typed="text"
							id="name"
							onChange={handleChange}
							label="Display Name"
							error={errors.name}
							placeholder="First Name"
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
						<Link href="/account/signin" prefetch className="ml-1 underline">
							Sign in
						</Link>
					</p>
				</div>
			</section>
		</main>
	)
}

export default Signup
