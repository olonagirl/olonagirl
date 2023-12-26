"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useFormik } from "formik"
import { useState } from "react"
import Link from "next/link"

import { Button, Input, Spinner } from "../../_components"
import { SigninSchema } from "../../_lib/schema"
import { store } from "../../_store"

const initialValues = { email: "", password: "" }

const Signin = () => {
	const supabase = createClientComponentClient()
	const [loading, setLoading] = useState(false)
	const { login, user } = store()
	const { push } = useRouter()

	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues,
		validationSchema: SigninSchema,
		onSubmit: async ({ email, password }) => {
			setLoading(true)
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password,
			})
			if (!error) {
				const { session, user } = data
				login(user, session)
				push("/")
			} else {
				console.log(error.message)
			}
			setLoading(false)
		},
	})

	if (user) push("/")

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
						<Button type="submit" disabled={loading} width="w-full lg:w-[350px]">
							{loading ? <Spinner /> : "Signin"}
						</Button>
					</form>
					<p className="mt-10 flex items-center">
						Don&apos;t have an account?
						<Link href="/account/signup" prefetch className="ml-1 underline">
							Sign up
						</Link>
					</p>
				</div>
			</section>
		</main>
	)
}

export default Signin
