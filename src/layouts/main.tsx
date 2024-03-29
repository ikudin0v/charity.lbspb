import * as React from "react"
import Header from "../components/header"
import img from "../img/data.png"
import Footer from "../components/footer"
import ContactsData from "../components/contactsData"

const MainPage = () => {
	return (
		<div className="flex flex-col justify-between h-screen m-0 p-0">
			<div className="m-0 p-0">
				<Header />
				<div className="sm:m-auto p-5 flex flex-col sm:w-4/5 h-100">
					<h1 className="text-4xl text-center font-semibold mb-3">Благотворительный Петербург</h1>
					<div className="sm:m-auto p-5 flex md:flex-row flex-col">
						<img src={img} alt="" className="md:w-2/5 p-4 h-fit self-center m-auto" />
						<div>
							<h1 className="text-2xl mt-3 font-semibold">Электронная библиотека &quot;Благотворительный Петербург&quot;</h1>
							<p className="text-lg mt-3">
								Данный проект, реализуемый Санкт-Петербургской государственной специальной центральной библиотекой для слепых и слабовидящих, представляет собой систематизированные материалы
								по истории благотворительности в Санкт-Петербурге.
							</p>
							<p className="text-lg mt-3">
								Разнообразие материалов (в том числе аудио, видео, фото и др.) позволяет воссоздать историческую перспективу развития благотворительного движения.
							</p>
						</div>
					</div>
					<div className="p-5 flex flex-col">
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
			</div>
			<Footer />
		</div>
	)
}

export default MainPage
