import { Customer } from "@chec/commerce.js/types/customer"
import { Cart } from "@chec/commerce.js/types/cart"
import { persist } from "zustand/middleware"
import { create } from "zustand"

interface Store {
	cart: Cart | null
	totalItems: number
	updateTotalItems: (value: number) => void
	user: Customer | null
	isAuthenticated: boolean
	login: (payload: Customer) => void
	logout: () => void
}

export const store = create<Store>()(
	persist(
		(set) => ({
			cart: null,
			totalItems: 0,
			updateTotalItems: (value) => set(() => ({ totalItems: value })),
			user: null,
			isAuthenticated: false,
			login: (payload) => set(() => ({ user: payload, isAuthenticated: true })),
			logout: () => set(() => ({ user: null, isAuthenticated: false })),
		}),
		{ name: "store" }
	)
)
