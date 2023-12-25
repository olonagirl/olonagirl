import React from "react"

import { commerce } from "../_lib/commerce"
import { Loader } from "../_components"
import { store } from "../_store"

const Page = async () => {
	const { user } = store()
	const orders = await commerce.customer.getOrders(user?.id)

	if (!orders) return <Loader />

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl lg:text-4xl">Orders</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="my-5 flex w-full flex-col gap-4 lg:w-1/2">
				{orders.data.map((order) => (
					<div key={order.id} className="flex w-full flex-col border p-4">
						<p className="text-2xl">Order {order.id}</p>
					</div>
				))}
			</section>
		</main>
	)
}

export default Page
