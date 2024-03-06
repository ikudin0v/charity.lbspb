import * as React from "react"
import ContactsData from "./contactsData"
import { Link } from "react-router-dom"
import { usePage } from "../hooks/usePage"

const Footer = () => {
	const { setPage }: any = usePage()
	return (
		<div className="sm:mx-auto my-2 p-5 flex flex-col sm:flex-row sm:w-4/5 border border-solid border-gray-600 rounded-md ">
			<div className="flex flex-col me-10">
				<Link to="/main" onClick={() => setPage("main")}>
					Главная
				</Link>
				<Link to="/pointers" onClick={() => setPage("pointers")}>
					Указатели
				</Link>
				<Link to="/search" onClick={() => setPage("search")}>
					Поиск
				</Link>
				<Link to="/about" onClick={() => setPage("about")}>
					О ресурсе
				</Link>
				<Link to="/contacts" onClick={() => setPage("contacts")}>
					Контакты
				</Link>
			</div>
			<ContactsData />
		</div>
	)
}

export default Footer
