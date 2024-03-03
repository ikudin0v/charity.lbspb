import React from "react"

const Header = () => {
	return (
		<div className="container m-auto flex flex-col w-4/5">
			<div className="flex">
				<img src="logo.jpg" alt="" className="h-fit self-center" />
				<div className="border border-solid border-black m-3"></div>
				<div className="text-3xl font-bold flex flex-col justify-center">
					<div>Государственная специальная центральная библиотека для слепых и слабовидящих</div>
					<div>State Library for the Blind</div>
				</div>
			</div>
			<div className="flex mt-2 p-1 border border-solid border-gray-600 rounded-md">
				<div className="text-2xl p-2 hover:bg-blue-300 rounded-md">Главная</div>
				<div className="text-2xl p-2 hover:bg-blue-300 rounded-md">Указатели</div>
				<div className="text-2xl p-2 hover:bg-blue-300 rounded-md">О ресурсе</div>
				<div className="text-2xl p-2 hover:bg-blue-300 rounded-md">Поиск</div>
				<div className="text-2xl p-2 hover:bg-blue-300 rounded-md">Контактная информация</div>
			</div>
		</div>
	)
}

export default Header
