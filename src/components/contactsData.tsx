import * as React from "react"

const ContactsData = () => {
	return (
		<ul className="list-disc text-lg mt-2 ms-5">
			<li>
				Адрес:{" "}
				<a href="https://yandex.ru/maps/-/CDFfZ87-" className="text-blue-600 visited:text-purple-600">
					Санкт-Петербург, ул.Стрельнинская, дом 11
				</a>
			</li>
			<li>
				Телефон:{" "}
				<a href="tel:+78124175228" className="text-blue-600 visited:text-purple-600">
					(812) 417-51-76
				</a>
			</li>
			<li>
				Email:{" "}
				<a href="mailto:infor@gscbs.ru" className="text-blue-600 visited:text-purple-600">
					infor@gscbs.ru
				</a>
			</li>
			<li>
				<a href="http://www.gbs.spb.ru" className="text-blue-600 visited:text-purple-600">
					www.gbs.spb.ru
				</a>
			</li>
		</ul>
	)
}

export default ContactsData
