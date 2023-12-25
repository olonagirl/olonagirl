import { Customer } from "@chec/commerce.js/types/customer"
import { persist } from "zustand/middleware"
import { create } from "zustand"

interface Store {
	user: Customer | null
	login: (payload: Customer) => void
	logout: () => void
}

export const store = create<Store>()(
	persist(
		(set) => ({
			user: null,
			login: (payload) => set(() => ({ user: payload, isAuthenticated: true })),
			logout: () => set(() => ({ user: null, isAuthenticated: false })),
		}),
		{ name: "store" }
	)
)
