import React from "react"
import { usePage } from "../hooks/usePage"
import { engToRus } from "../utils/engToRus"
import { useHistory } from "react-router-dom"

const NavbarSmItem = ({ header, onChange }: any) => {
	const { page, setPage }: any = usePage()
	const history = useHistory()

	return (
		<div
			className={page === header ? " bg-blue-400 cursor-pointer border border-x-0 border-t-0" : "bg-white cursor-pointer border border-x-0 border-t-0"}
			onClick={() => {
				setPage(header)
				onChange(header)
				history.push("/" + header)
			}}
		>
			<p className="text-2xl text-center p-2 hover:bg-blue-300">{engToRus(header)}</p>
		</div>
	)
}

export default NavbarSmItem
