import type { Session, User } from "@supabase/auth-helpers-nextjs"
import { persist } from "zustand/middleware"
import { create } from "zustand"

interface Store {
	user: User | null
	session: Session | null
	login: (user: User, session: Session) => void
	logout: () => void
}

export const store = create<Store>()(
	persist(
		(set) => ({
			user: null,
			session: null,
			login: (user, session) => set(() => ({ user, session })),
			logout: () => set(() => ({ user: null, session: null })),
		}),
		{ name: "store" }
	)
)
