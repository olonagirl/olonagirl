"use client"
import { Customer } from "@chec/commerce.js/types/customer"
import { useEffect, useState } from "react"

import { commerce } from "../../_lib/commerce"
import { Loader } from "../../_components"

const User = () => {
	const [user, setUser] = useState<Customer | null>(null)

	const getUser = async () => setUser(await commerce.customer.about())

	useEffect(() => {
		getUser()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!user) return <Loader />

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl capitalize lg:text-4xl">
				Hello, {user.firstname}
			</p>
			<hr className="my-4 w-full bg-dark" />
			<section className="my-5 flex w-full flex-col lg:w-1/2"></section>
		</main>
	)
}

export default User
