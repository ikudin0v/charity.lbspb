import React from "react"
import NavbarMenu from "./navbarMenu"
import logo from "../img/logo.svg"

const Header = () => {
	return (
		<div className="container sm:m-auto p-5 flex flex-col sm:w-4/5 ">
			<div className="flex justify-evenly">
				<img src={logo} alt="" className=" w-full md:w-6/12 lg:w-3/12 self-center" />
				<div className="md:block hidden border border-solid border-black m-3"></div>
				<div className="md:flex hidden flex-col text-3xl font-bold justify-center">
					<div>Государственная специальная центральная библиотека для слепых и слабовидящих</div>
					<div>State Library for the Blind</div>
				</div>
			</div>
			<NavbarMenu />
		</div>
	)
}

export default Header
