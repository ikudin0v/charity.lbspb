import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const pointersPage = () => {
	return (
		<div className="flex flex-col justify-between h-screen m-0 p-0">
			<div className="m-0 p-0">
				<Header />
				<div className="sm:m-auto p-5 flex flex-col sm:w-4/5 h-100">
					<p className="text-lg m-3 p-0">
						Указатели позволяют вам просмотреть какие типы метаданных присутствуют в коллекции, какие значения они принимают, а также сколько и какие именно публикации отмечены этими
						значениями.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default pointersPage
