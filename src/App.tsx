import React from "react"
import PageProvider from "./hooks/usePage"
import { Route, Switch, Redirect } from "react-router-dom"
import MainPage from "./layouts/main"
import pointersPage from "./layouts/pointers"
import AboutPage from "./layouts/about"
import SearchPage from "./layouts/search"
import ContactsPage from "./layouts/contacts"

function App() {
	return (
		<div className="App">
			<PageProvider>
				<Switch>
					<Route path="/main" component={MainPage} />
					<Route path="/pointers" component={pointersPage} />
					<Route path="/about" component={AboutPage} />
					<Route path="/search" component={SearchPage} />
					<Route path="/contacts" component={ContactsPage} />
					<Redirect from="/" to="/main" />
				</Switch>
			</PageProvider>
		</div>
	)
}

export default App
