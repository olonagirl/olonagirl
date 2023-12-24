import { Space_Grotesk } from "next/font/google"
import type { Metadata } from "next"

import { Footer, Navbar } from "./_components"
import "./globals.css"

export const metadata: Metadata = {
	title: "OlonaGirl",
	description: "",
}

const font = Space_Grotesk({
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Navbar />
				<main className="w-full">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
