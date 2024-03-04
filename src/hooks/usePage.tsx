import React, { useContext, useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const PageContext = React.createContext({})

export const usePage = () => {
	return useContext(PageContext)
}

const PageProvider = ({ children }: any) => {
	const [page, setPage] = useState<string>("main")
	return (
		<PageContext.Provider value={{ page, setPage }}>
			{children}
			<ToastContainer />
		</PageContext.Provider>
	)
}

export default PageProvider
