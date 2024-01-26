import { PayPalButton } from "react-paypal-button-v2"
import React from "react"

interface Props {
	amount: number
	currency: string
}

const PayPalIntegration = (props: Props) => {
	return (
		<div>
			<PayPalButton
				amount={props.amount}
				onSuccess={(details: any, data: any) => console.log({ details, data })}
				onError={(error: any) => console.log(error)}
				currency={props.currency}
				options={{
					clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
				}}
			/>
		</div>
	)
}

export default PayPalIntegration
