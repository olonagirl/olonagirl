"use client"
import { useFormik } from "formik"

import { EmailSubscriptionSchema } from "../_lib/schema"
import Button from "./Button"
import Input from "./Input"

const Subscription = () => {
	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: "",
			agree: false,
		},
		validationSchema: EmailSubscriptionSchema,
		onSubmit: (data) => console.log(data),
	})

	return (
		<div className="my-4 flex w-full items-center justify-center lg:w-1/3">
			<form
				onSubmit={handleSubmit}
				className="flex w-full flex-col items-center gap-3">
				<Input
					typed="email"
					id="email"
					onChange={handleChange}
					placeholder="Email"
					error={errors.email}
				/>
				<Input
					as="input"
					typed="checkbox"
					id="agree"
					onChange={handleChange}
					label="I agree to receive promotions from Olonagirl."
					error={errors.agree}
					width="w-fit"
				/>
				<Button type="submit" width="w-[200px]">
					Subscribe
				</Button>
			</form>
		</div>
	)
}

export default Subscription
