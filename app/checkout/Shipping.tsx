"use client"
import { CheckoutToken } from "@chec/commerce.js/types/checkout-token"
import { PayPalButtons } from "@paypal/react-paypal-js"
import { Cart } from "@chec/commerce.js/types/cart"
import { PaystackButton } from "react-paystack"
import { useEffect, useState } from "react"
import { useFormik } from "formik"

import { CheckoutSchema } from "../_lib/schema"
import { Button, Input } from "../_components"
import { commerce } from "../_lib/commerce"
import { ShippingProps } from "../_types"

interface Props {
	checkoutToken: CheckoutToken
	cart: Cart
}

const initialValues = {
	firstname: "",
	lastname: "",
	email: "",
	phone: "",
	address1: "",
	city: "",
	zip: "",
	shippingCountry: "",
	shippingSubdivision: "",
	shippingOption: "",
}

const Shipping = ({ cart, checkoutToken: { id } }: Props) => {
	const [subdivisions, setSubdivisions] = useState<ShippingProps[]>([])
	const [countries, setCountries] = useState<ShippingProps[]>([])
	const [options, setOptions] = useState<ShippingProps[]>([])

	const { handleChange, handleSubmit, values } = useFormik({
		initialValues,
		validationSchema: CheckoutSchema,
		onSubmit: (data) => console.log(data),
	})

	const fetchShippingCountries = async () => {
		const { countries } = await commerce.services.localeListShippingCountries(id)
		const shippingCountries = Object.entries(countries).map(([code, name]) => ({
			id: code,
			label: name,
		}))
		setCountries(shippingCountries)
	}

	const fetchShippingSubdivisions = async (country: string) => {
		const { subdivisions } =
			await commerce.services.localeListShippingSubdivisions(id, country)
		const shippingSubdivisions = Object.entries(subdivisions).map(
			([code, name]) => ({ id: code, label: name })
		)
		setSubdivisions(shippingSubdivisions)
	}

	const fetchShippingOptions = async (country: string, state: string) => {
		const options = await commerce.checkout.getShippingOptions(id, {
			country,
			region: state,
		})
		const shippingOptions = options.map((option) => ({
			id: option.id,
			label: `${option.description} - ${option.price.formatted_with_symbol}`,
		}))
		console.log(shippingOptions)
		setOptions(shippingOptions)
	}

	const componentProps = {
		amount: cart.subtotal.raw * 100,
		email: values.email,
		publicKey: String(process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY),
		firstname: values.firstname,
		lastname: values.lastname,
		text: "Pay now",
		className: "w-full bg-green-700 py-2 text-white",
		onSuccess: () => console.log("success"),
		onClose: () => console.log("error"),
		phone: values.phone,
	}

	useEffect(() => {
		fetchShippingCountries()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (values.shippingCountry) fetchShippingSubdivisions(values.shippingCountry)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values.shippingCountry])

	useEffect(() => {
		if (values.shippingSubdivision)
			fetchShippingOptions(values.shippingCountry, values.shippingSubdivision)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [values.shippingSubdivision])

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
				<p className="mb-5 text-sm font-semibold lg:text-base">Shipping details</p>
				<Input
					as="select"
					id="shippingCountry"
					label="Country"
					onChange={handleChange}>
					{countries.map((country) => (
						<option key={country.id} value={country.id}>
							{country.label}
						</option>
					))}
				</Input>
				<div className="flex flex-col items-center gap-4 lg:flex-row">
					<Input
						typed="text"
						id="firstname"
						onChange={handleChange}
						label="First Name"
						width="w-full lg:w-1/2"
					/>
					<Input
						typed="text"
						id="lastname"
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
						width="w-full lg:1/2">
						{subdivisions.map((subdivision) => (
							<option key={subdivision.id} value={subdivision.id}>
								{subdivision.label}
							</option>
						))}
					</Input>
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
				<Input
					as="select"
					id="shippingOption"
					onChange={handleChange}
					label="Shipping Option"
					width="w-full">
					{options.map((option) => (
						<option key={option.id} value={option.id}>
							{option.label}
						</option>
					))}
				</Input>
				<hr className="my-4 w-full bg-dark" />
				<p className="mb-5 text-sm font-semibold lg:text-base">Payment method</p>
				<PaystackButton {...componentProps} />
				<PayPalButtons
					style={{ layout: "vertical", shape: "pill", color: "gold" }}
					createOrder={(_, actions) =>
						actions.order.create({
							purchase_units: [{ amount: { value: cart.subtotal.raw.toString() } }],
						})
					}
					onApprove={async (_, actions) => {
						try {
							actions.order?.capture().then((details) => {
								const name = details?.payer?.name?.given_name
								alert(`Transaction completed by ${name}`)
							})
						} catch (error) {
							console.error(error)
							alert("Transaction failed")
						}
					}}
				/>
				<Button type="submit">Proceed</Button>
			</form>
		</div>
	)
}

export default Shipping
