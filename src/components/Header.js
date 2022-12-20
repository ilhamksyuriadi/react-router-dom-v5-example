import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

// NOTES: the html structure is example only, feel free to use other approach or style 
// as long as you use NavLink should be ok

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink
                    to="/"
                    // NOTES: this is just additional if you want to add active class for navlink
                    activeClassName="active-class"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/testimoni"
                    activeClassName="active-class"
                >
                    Testimoni
                </NavLink>
            </nav>
        </header>
    )
}

export default Header