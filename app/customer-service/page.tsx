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
					not accept cash or check.
				</p>
			</section>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Returns </p>
				<p className="text-sm lg:text-base">
					We accept returns of any of our items clothing, hair or accessories that is
					unworn and still fitted with all security tags and labels if the wrong item
					or size was originally sent. For wigs we will only accept return of wigs
					whose laces have not been trimmed as evidence that it has not be worn if
					the wig sent is different from what was original ordered. Returns must be
					initiated within 3 working days of receiving the item. <br />
					We will not accept returns for items after the 3 day period mentioned
					above. If you try to make a return, we may have to send it back to your
					default delivery address and ask you to cover the shipping costs. <br />
					Please send us your proof of return via email . Your proof of return should
					include the shipping and tracking details of the returned
					item(info@olonagirl.com).{" "}
					<b>
						Also note that only items that have been received can be processed for
						returns.
					</b>
				</p>
				<p className="text-sm lg:text-base">Return address</p>
				<div className="flex flex-col text-sm lg:text-base">
					22 Alhaji Musa Ibraheem Street ,
					<br />
					Idimu, Lagos,
					<br />
					Nigeria. <br />
				</div>
			</section>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Processing of Returns</p>
				<p className="text-sm lg:text-base">
					Once we receive your return, we shall then proceed to process it. Upon
					receipt it takes about 3-5 working days to process your return. All refunds
					will be credited back to the original purchaser&apos;s credit card. <br />
					<b>
						PLEASE NOTE: Items purchased during a sale, or at a discounted prices
						cannot be returned as these items are bought as is .This is
						non-negotiable. Upon purchasing you agree to these terms.
					</b>
				</p>
			</section>
			<section className="my-5 flex w-full flex-col gap-5 py-3 lg:my-10 lg:w-1/2">
				<p className="text-lg font-semibold lg:text-2xl">Exchanges</p>
				<p className="text-sm lg:text-base">
					We do not offer direct exchanges at this time.
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
