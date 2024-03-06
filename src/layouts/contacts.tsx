import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactsData from "../components/contactsData"

const ContactsPage = () => {
	return (
		<div className="flex flex-col justify-between h-screen m-0 p-0">
			<div className="m-0 p-0">
				<Header />
				<div className="sm:m-auto p-5 flex flex-col sm:w-4/5 h-100">
					<h2 className="text-4xl font-semibold">Контактная информация:</h2>
					<p className="text-lg mt-2">Информационно-библиографический отдел:</p>
					<ContactsData />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ContactsPage
