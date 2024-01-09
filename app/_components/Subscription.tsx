"use client"
import { useFormik } from "formik"
import * as Yup from "yup"

import Button from "./Button"
import Input from "./Input"

const Subscription = () => {
	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email!").required("Email is required!"),
		}),
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
				<Button type="submit" width="w-[200px]">
					Subscribe
				</Button>
			</form>
		</div>
	)
}

export default Subscription
