import React from 'react'
import codebook from "../assets/codebook.png"
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <Link to="/" className="logo">
            <img src={codebook} alt='codebook'></img>
            <span>CodeBook</span>
        </Link>
        <nav className="navigation">
            <NavLink to='/' className="link " end>Home</NavLink>
            <NavLink to='/products' className="link">Products</NavLink>
            <NavLink to='/contact' className="link">Contact</NavLink>
        </nav>
    </header>
  )
}

export default Header
