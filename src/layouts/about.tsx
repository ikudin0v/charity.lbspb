import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactsData from "../components/contactsData"

const AboutPage = () => {
	return (
		<div className="flex flex-col justify-between h-screen m-0 p-0">
			<div className="m-0 p-0">
				<Header />
				<div className="sm:m-auto p-5 flex flex-col sm:w-4/5 h-100">
					<h1 className="text-4xl mt-3 font-semibold">О ресурсе</h1>
					<p className="text-lg mt-3">
						Данный проект, реализуемый Санкт-Петербургской государственной специальной центральной библиотекой для слепых и слабовидящих, представляет собой систематизированные материалы по
						истории благотворительности в Санкт-Петербурге.
					</p>
					<p className="text-lg mt-3">
						Ведущие специалисты информационно-библиографического отдела библиотеки в своей работе опираются на исследования петербургских историков и краеведов, используют информацию из книг
						и открытых источников, а также архивные источники.
					</p>
					<h1 className="text-2xl mt-3 font-semibold">Разделы электронной библиотеки:</h1>
					<ul className="list-disc text-lg mt-2 ms-5">
						<li>Благотворительный Петербург прошлого на современной карте города</li>
						<li>Благотворительные общества</li>
						<li>Персоналии </li>
						<li>Указатели</li>
					</ul>
					<h2 className="text-xl mt-3 font-semibold">Контактная информация:</h2>
					<p className="text-lg mt-2">Информационно-библиографический отдел:</p>
					<ContactsData />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default AboutPage
