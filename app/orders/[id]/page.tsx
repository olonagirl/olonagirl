"use client"
import { Order } from "@chec/commerce.js/types/order"
import { useEffect, useState } from "react"

import { commerce } from "@/app/_lib/commerce"
import { Loader } from "@/app/_components"

interface Props {
	params: {
		id: string
	}
}

const Page = ({ params: { id } }: Props) => {
	const [order, setOrder] = useState<Order | null>(null)

	const getOrder = async () => setOrder(await commerce.customer.getOrder(id))

	useEffect(() => {
		getOrder()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!order) return <Loader />

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl lg:text-4xl">Order {order.id}</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="my-5 w-full"></section>
		</main>
	)
}

export default Page
