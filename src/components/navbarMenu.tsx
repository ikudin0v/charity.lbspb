import React, { useState } from "react"

const NavbarMenu = () => {
	const [page, setPage] = useState("main")
	const [showDropdown, setShowDropdown] = useState(false)
	const pageToRus: any = { main: "Главная", pointers: "Указатели", about: "О ресурсе", search: "Поиск", contacts: "Контактная информация" }

	const handleNavChoose = (cat: string) => {
		setPage(cat)
		setShowDropdown(false)
	}

	return (
		<>
			<div className="md:flex hidden mt-2 border border-solid border-gray-600 rounded-md">
				<div
					className={page === "main" ? "border-b-4 border-solid border-blue-500 cursor-pointer" : "border-b-4 border-solid border-transparent cursor-pointer"}
					onClick={() => handleNavChoose("main")}
				>
					<p className="text-2xl p-2 hover:bg-blue-300 rounded-md">Главная</p>
				</div>
				<div
					className={page === "pointers" ? "border-b-4 border-solid border-blue-500 cursor-pointer" : "border-b-4 border-solid border-transparent cursor-pointer"}
					onClick={() => handleNavChoose("pointers")}
				>
					<p className="text-2xl p-2 hover:bg-blue-300 rounded-md">Указатели</p>
				</div>
				<div
					className={page === "about" ? "border-b-4 border-solid border-blue-500 cursor-pointer" : "border-b-4 border-solid border-transparent cursor-pointer"}
					onClick={() => handleNavChoose("about")}
				>
					<p className="text-2xl p-2 hover:bg-blue-300 rounded-md">О ресурсе</p>
				</div>
				<div
					className={page === "search" ? "border-b-4 border-solid border-blue-500 cursor-pointer" : "border-b-4 border-solid border-transparent cursor-pointer"}
					onClick={() => handleNavChoose("search")}
				>
					<p className="text-2xl p-2 hover:bg-blue-300 rounded-md">Поиск</p>
				</div>
				<div
					className={page === "contacts" ? "border-b-4 border-solid border-blue-500 cursor-pointer" : "border-b-4 border-solid border-transparent cursor-pointer"}
					onClick={() => handleNavChoose("contacts")}
				>
					<p className="text-2xl p-2 hover:bg-blue-300 rounded-md">Контактная информация</p>
				</div>
			</div>

			<div className="md:hidden block mt-4 border border-solid border-gray-600 rounded-md">
				<div className="border border-x-0 border-t-0" onClick={() => setShowDropdown(!showDropdown)}>
					<p className="text-2xl font-bold text-center p-2 rounded-md">{pageToRus[page]}</p>
				</div>
				<div className={showDropdown ? "block border border-solid border-gray-600 rounded-md" : "hidden"} id="navDropdown">
					<div
						className={page === "main" ? " bg-blue-400 cursor-pointer border border-x-0 border-t-0" : "bg-white cursor-pointer border border-x-0 border-t-0"}
						onClick={() => handleNavChoose("main")}
					>
						<p className="text-2xl text-center p-2 hover:bg-blue-300">Главная</p>
					</div>
					<div
						className={page === "pointers" ? " bg-blue-400 cursor-pointer border border-x-0 border-t-0" : "bg-white cursor-pointer border border-x-0 border-t-0"}
						onClick={() => handleNavChoose("pointers")}
					>
						<p className="text-2xl text-center p-2 hover:bg-blue-300">Указатели</p>
					</div>
					<div
						className={page === "about" ? " bg-blue-400 cursor-pointer border border-x-0 border-t-0" : "bg-white cursor-pointer border border-x-0 border-t-0"}
						onClick={() => handleNavChoose("about")}
					>
						<p className="text-2xl text-center p-2 hover:bg-blue-300">О ресурсе</p>
					</div>
					<div
						className={page === "search" ? " bg-blue-400 cursor-pointer border border-x-0 border-t-0" : "bg-white cursor-pointer border border-x-0 border-t-0"}
						onClick={() => handleNavChoose("search")}
					>
						<p className="text-2xl text-center p-2 hover:bg-blue-300">Поиск</p>
					</div>
					<div
						className={page === "contacts" ? " bg-blue-400 cursor-pointer border border-x-0 border-t-0" : "bg-white cursor-pointer border border-x-0 border-t-0"}
						onClick={() => handleNavChoose("contacts")}
					>
						<p className="text-2xl text-center p-2 hover:bg-blue-300">Контактная информация</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default NavbarMenu
