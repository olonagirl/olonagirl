"use client"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

interface Props {
	children: React.ReactNode
}

const initialOptions = {
	clientId: "sb",
	currency: "USD",
	intent: "capture",
}

const PaypalProvider = (props: Props) => {
	return (
		<PayPalScriptProvider options={initialOptions}>
			{props.children}
		</PayPalScriptProvider>
	)
}

export default PaypalProvider
