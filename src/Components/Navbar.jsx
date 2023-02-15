import React from 'react'
import "../style/Nav.css"
import logo from "../img/Logo.png"
import Searchbar from './Searchbar'

const Navbar = () => {
	return (
		<nav className='nav-bar'>
			<div className='img'>
					<img src={logo} width="100" height="100" alt="img-not-found" />
			</div>
			<div className='search'>
				<Searchbar />
			</div>
		</nav>
	)
}

export default Navbar