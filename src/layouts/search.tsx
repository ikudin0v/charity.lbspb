import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const SearchPage = () => {
	return (
		<div className="flex flex-col justify-between h-screen m-0 p-0">
			<div className="m-0 p-0">
				<Header />
				<div className="sm:m-auto p-5 flex flex-col sm:w-4/5 h-100">
					<div>search</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default SearchPage
