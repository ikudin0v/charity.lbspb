import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "react-router-dom"

const pointersPage = () => {
	return (
		<div className="flex flex-col justify-between h-screen m-0 p-0">
			<div className="m-0 p-0">
				<Header />
				<div className="sm:m-auto px-5 flex flex-col sm:w-4/5 h-100">
					<p className="text-lg p-3">
						Указатели позволяют вам просмотреть какие типы метаданных присутствуют в коллекции, какие значения они принимают, а также сколько и какие именно публикации отмечены этими
						значениями.
					</p>
				</div>
				<div className="sm:m-auto px-5 flex flex-row sm:w-4/5 h-100">
					<div>
						<div>Указатели</div>
						<div><Link to="#" className="text-blue-600 visited:text-purple-600">Организации</Link></div>
						<div><Link to="#" className="text-blue-600 visited:text-purple-600">Персоны</Link></div>
					</div>
					<div>список указателей</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default pointersPage
