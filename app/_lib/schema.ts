import * as Yup from "yup"

export const SigninSchema = Yup.object({
	email: Yup.string()
		.email("Please enter a valid email!")
		.required("Email is required!"),
	password: Yup.string()
		.matches(
			/^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,20}$/,
			"Password must contain at least one uppercase, lowercase, number and special character"
		)
		.required("Password is required!"),
})

export const SignupSchema = Yup.object({
	first_name: Yup.string().required("First name is required!"),
	last_name: Yup.string().required("Last name is required!"),
	phone_number: Yup.string()
		.matches(
			/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
			"Please enter a valid phone number"
		)
		.required("Phone number is required!"),
	email: Yup.string()
		.email("Please enter a valid email!")
		.required("Email is required!"),
	password: Yup.string()
		.matches(
			/^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{8,20}$/,
			"Password must contain at least one uppercase, lowercase, number and special character"
		)
		.required("Password is required!"),
})

export const CheckoutSchema = Yup.object({
	first_name: Yup.string().required("First name is required!"),
	last_name: Yup.string().required("Last name is required!"),
	email: Yup.string()
		.email("Please enter a valid email!")
		.required("Email is required!"),
	address1: Yup.string().required("Address is required!"),
	city: Yup.string().required("City is required!"),
	zip: Yup.string().optional(),
	shippingCountry: Yup.string().required("Country is required!"),
	shippingSubdivision: Yup.string().required("State is required!"),
	shippingOption: Yup.string().required("Shipping option is required!"),
})
