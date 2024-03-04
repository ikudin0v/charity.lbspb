import React, { useState } from "react"
import { engToRus } from "../utils/engToRus"
import NavbarLgItem from "./navbarLgItem"
import { usePage } from "../hooks/usePage"
import NavbarSmItem from "./navbarSmItem"

const NavbarMenu = () => {
	const { page }: any = usePage()
	const [showDropdown, setShowDropdown] = useState(false)

	return (
		<>
			<div className="md:flex hidden mt-2 border border-solid border-gray-600 rounded-md">
				<NavbarLgItem header="main" />
				<NavbarLgItem header="pointers" />
				<NavbarLgItem header="about" />
				<NavbarLgItem header="search" />
				<NavbarLgItem header="contacts" />
			</div>

			<div className="md:hidden block mt-4 border border-solid border-gray-600 rounded-md">
				<div className="border border-x-0 border-t-0" onClick={() => setShowDropdown(!showDropdown)}>
					<p className="text-2xl font-bold text-center p-2 rounded-md">{engToRus(page)}</p>
				</div>
				<div className={showDropdown ? "block border border-solid border-gray-600 rounded-md" : "hidden"} id="navDropdown">
					<NavbarSmItem header="main" onChange={() => setShowDropdown(false)} />
					<NavbarSmItem header="pointers" onChange={() => setShowDropdown(false)} />
					<NavbarSmItem header="about" onChange={() => setShowDropdown(false)} />
					<NavbarSmItem header="search" onChange={() => setShowDropdown(false)} />
					<NavbarSmItem header="contacts" onChange={() => setShowDropdown(false)} />
				</div>
			</div>
		</>
	)
}

export default NavbarMenu
