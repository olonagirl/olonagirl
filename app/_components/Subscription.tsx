"use client"
import { useFormik } from "formik"

import Button from "./Button"
import Input from "./Input"

const Subscription = () => {
	const { errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			email: "",
		},
		onSubmit: (data) => console.log(data),
	})

	return (
		<div className="my-4 flex w-full items-center justify-center lg:w-1/3">
			<form
				onSubmit={handleSubmit}
				className="flex w-full flex-col items-center gap-3">
				<Input
					typed="email"
					onChange={handleChange}
					placeholder="Email"
					error={errors.email}
					required
				/>
				<Button type="submit" width="w-[200px]">
					Subscribe
				</Button>
			</form>
		</div>
	)
}

export default Subscription
