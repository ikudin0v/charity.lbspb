import React from "react"
import { usePage } from "../hooks/usePage"
import { engToRus } from "../utils/engToRus"
import { useHistory } from "react-router-dom"

const NavbarLgItem = ({ header }: any) => {
	const { page, setPage }: any = usePage()
	const history = useHistory()
	return (
		<div
			className={page === header ? "border-b-4 border-solid border-blue-500 cursor-pointer" : "border-b-4 border-solid border-transparent cursor-pointer"}
			onClick={() => {
				setPage(header)
				history.push("/" + header)
			}}
		>
			<p className="text-2xl p-2 hover:bg-blue-300 rounded-md">{engToRus(header)}</p>
		</div>
	)
}

export default NavbarLgItem
