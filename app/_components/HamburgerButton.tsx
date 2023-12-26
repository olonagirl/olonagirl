"use client"
import React, { Dispatch, SetStateAction } from "react"

import "./hamburger.css"

interface Props {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

const HamburgerButton = (props: Props) => {
	return (
		<button
			onClick={() => props.setOpen(!props.open)}
			aria-label="menu-button"
			className={`hamburger-button ${props.open ? "active" : ""}`}>
			<span className="line"></span>
			<span className="line"></span>
			<span className="line"></span>
		</button>
	)
}

export default HamburgerButton
