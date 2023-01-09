import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"

import Home from "./screens/Home"
import Characters from "./screens/Characters"
import Spells from "./screens/Spells"
import Contact from "./screens/Contact"

import "./App.css"

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/spells" element={<Spells />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	)
}

export default App
