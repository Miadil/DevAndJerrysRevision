import { Link } from "react-router-dom"

import logo from "../logo.svg"

import "./Header.css"

const Header = () => {
	return (
		<header className="navHeaderGlob">
			<nav className="navGlobal">
				<img className="navLogo" src={logo} alt="logo du site web" />
				<ul className="navUl">
					<li className="navLi">
						<Link to="/">Home</Link>
					</li>
					<li className="navLi">
						<Link to="/characters">Character</Link>
					</li>
					<li className="navLi">
						<Link to="/spells">Spells</Link>
					</li>
					<li className="navLi">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<div className="degrader"></div>
		</header>
	)
}

export default Header
