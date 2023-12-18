import React from "react"

const Page = () => {
	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl lg:text-4xl">Customer Service</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Order Processing</p>
				<p className="text-sm lg:text-base">
					Please allow 24-36 hours to process your order. We do not ship on weekends.
					Occasionally items may be oversold. If an item is sold out, you will be
					notified via email or telephone. You can choose to wait on the back-ordered
					item or the item can be voided and the purchase amount refunded. Please
					note, for purchases outside the united States, your bank may charge an
					international processing.
				</p>
			</section>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Payment</p>
				<p className="text-sm lg:text-base">
					We accept Visa, MasterCard, American Express, Discover and PayPal. We do
					not accept cash or check. You may purchase a gift card for $100 or more.
				</p>
			</section>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Returns & Exchanges</p>
				<p className="text-sm lg:text-base">
					Items can be returned for full refund or store credit within 14 days of the
					purchase as long as product is in its original condition and returned to us
					with original packaging. All shipping fees are non-refundable unless
					product is determined to be damaged or defective. Before returning any
					items please contact us by email at hello@olonagirl.com or telephone at
					1-800-OLONAGIRL.
				</p>
			</section>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Shipping</p>
				<p className="text-sm lg:text-base">
					All orders ship Monday - Friday. Domestic orders will ship via DHL and
					international orders will ship via DHL or Lithuanian Post. You are able to
					select your shipping cost and options at the time of checkout. Upon
					shipping, you will receive a tracking number and confirmation outlining the
					details of your order. Please contact us if you have any questions about
					your order by email hello@olonagirl.com or telephone at 1-800-OLONAGIRL.
				</p>
			</section>
		</main>
	)
}

export default Page
