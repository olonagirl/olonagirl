"use client"
import { CheckoutToken } from "@chec/commerce.js/types/checkout-token"
import { useFormik } from "formik"
import { useEffect } from "react"

import { Button, Input } from "../_components"
import { commerce } from "../_lib/commerce"

interface Props {
	checkoutToken: CheckoutToken
}

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	address1: "",
	city: "",
	zip: "",
}

const Shipping = ({ checkoutToken }: Props) => {
	const { handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: (data) => console.log(data),
	})

	const fetchShippingCountries = async (checkoutTokenId: string) => {
		const { countries } =
			await commerce.services.localeListShippingCountries(checkoutTokenId)
		console.log(countries)
	}

	useEffect(() => {
		fetchShippingCountries(checkoutToken.id)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
				<p className="mb-5 text-sm font-semibold lg:text-base">Shipping details</p>
				<Input
					as="select"
					id="shippingCountry"
					label="Country"
					onChange={handleChange}></Input>
				<div className="flex flex-col items-center gap-4 lg:flex-row">
					<Input
						typed="text"
						id="firstName"
						onChange={handleChange}
						label="First Name"
						width="w-full lg:w-1/2"
					/>
					<Input
						typed="text"
						id="lastName"
						onChange={handleChange}
						label="Last Name"
						width="w-full lg:w-1/2"
					/>
				</div>
				<Input typed="text" id="address1" onChange={handleChange} label="Address" />
				<div className="flex flex-col items-center gap-4 lg:flex-row">
					<Input
						typed="text"
						id="city"
						onChange={handleChange}
						label="City"
						width="w-full lg:w-1/3"
					/>
					<Input
						as="select"
						id="state"
						onChange={handleChange}
						label="State"
						width="w-full lg:1/2"></Input>
					<Input
						typed="text"
						id="zip"
						onChange={handleChange}
						label="Postal Code"
						width="w-full lg:w-1/3"
					/>
				</div>
				<Input
					typed="tel"
					id="phone"
					onChange={handleChange}
					label="Phone"
					width="w-full"
				/>
				<hr className="my-4 w-full bg-dark" />
				<p className="mb-5 text-sm font-semibold lg:text-base">Shipping method</p>
				<hr className="my-4 w-full bg-dark" />
				<p className="mb-5 text-sm font-semibold lg:text-base">Payment method</p>
				<Button type="submit">Review Order</Button>
			</form>
		</div>
	)
}

export default Shipping
