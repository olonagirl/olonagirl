import type { Metadata } from "next"

import { Footer, Navbar } from "./_components"
import "./globals.css"

export const metadata: Metadata = {
	title: "OlonaGirl",
	description: "",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main className="w-full">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
