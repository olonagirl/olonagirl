"use client"
// import { useRouter } from "next/navigation"

import { Loader } from "@/app/_components"
import { store } from "@/app/_store"

const User = () => {
	// const { push } = useRouter()
	const { user } = store()

	const click = () => console.log(user)

	if (!user) return <Loader />

	return (
		<main className="w-full px-5 py-10 lg:px-20">
			<p className="my-4 text-2xl capitalize lg:text-4xl">Hello, {user.email}</p>
			<hr className="my-4 w-full bg-dark" />
			<button onClick={click}>Console Log</button>
			<section className="my-5 flex w-full flex-col lg:w-1/2"></section>
		</main>
	)
}

export default User
